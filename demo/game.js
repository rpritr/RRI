/**
 * P16 — referenčna igra (milestone tedna 8)
 * HTML Canvas + vanilla JS, brez knjižnic.
 *
 * To NI rešitev za teden 1. Študenti zgradijo to postopoma:
 *   1–2  igralec + WASD + clamp
 *   3    game loop, dt, stanja
 *   4    AABB ovire
 *   5    strel proti miški
 *   6    HP, i-frames, GAME_OVER, R
 *   7    score, valovi, HUD
 *   8    seek AI + 2 tipa sovražnikov
 *
 * Barvni pravokotniki namesto spriteov — teden 9 doda assete.
 */

(function () {
  "use strict";

  // --- Platno ---------------------------------------------------------------
  const canvas = document.getElementById("game");
  if (!canvas) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<p>Napaka: platna <code>#game</code> ni. Odpri <code>index.html</code> iz mape <code>demo/</code> prek <code>python3 -m http.server</code>.</p>"
    );
    return;
  }
  canvas.tabIndex = 0;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const statusEl = document.getElementById("input-status");

  // --- Stanja (teden 3 / 6) -------------------------------------------------
  const STATE = {
    MENU: "MENU",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME_OVER",
  };

  // --- Konstante, ki jih je lahko spremeniti (cycle: change → test) ---------
  const CONFIG = {
    playerSpeed: 220, // px/s — enako kot starter
    playerSize: 28,
    playerMaxHp: 5,
    hurtCooldown: 0.85, // s i-frameov po zadetku
    fireCooldown: 0.22, // s med streli
    projectileSpeed: 520,
    projectileSize: 6,
    projectileLife: 1.4, // s, če ne zadene ničesar
    wavePause: 1.6, // s med valovi
    spawnGap: 0.4, // s med spawnom znotraj vala
  };

  const ENEMY_TYPES = {
    walker: {
      w: 34,
      h: 34,
      speed: 58,
      hp: 3,
      color: "#4a7c59",
      score: 10,
    },
    runner: {
      w: 20,
      h: 20,
      speed: 175,
      hp: 1,
      color: "#d44545",
      score: 20,
    },
  };

  // --- Svet: ovire (teden 4) ------------------------------------------------
  // Igralec in sovražniki se ob njih ustavijo (AABB). Projektili ob stiku izginejo.
  // Središče (spawn igralca) mora ostati prosto — sicer AABB razveljavi vsak premik.
  const WALLS = [
    { x: 200, y: 90, w: 150, h: 28 },
    { x: 680, y: 70, w: 28, h: 160 },
    { x: 260, y: 250, w: 90, h: 28 },
    { x: 610, y: 250, w: 90, h: 28 },
    { x: 70, y: 360, w: 90, h: 80 },
    { x: 800, y: 380, w: 110, h: 28 },
    { x: 470, y: 430, w: 28, h: 80 },
  ];

  // --- Vhod -----------------------------------------------------------------
  const keys = { w: false, a: false, s: false, d: false };
  let lastKeyLabel = "—";
  let keysHeard = false;

  const mouse = {
    x: W / 2,
    y: H / 2,
    down: false,
  };

  function setStatus() {
    if (!statusEl) return;
    if (!keysHeard) {
      statusEl.textContent = "Klikni platno, nato WASD ali ENTER";
      return;
    }
    statusEl.textContent = "tipke: OK · zadnji: " + lastKeyLabel;
  }

  /**
   * WASD prek e.code (KeyW …) — deluje tudi na AZERTY/QWERTZ.
   * Dodatno e.key in puščice.
   */
  function moveDirFromEvent(e) {
    switch (e.code) {
      case "KeyW":
      case "ArrowUp":
        return "w";
      case "KeyA":
      case "ArrowLeft":
        return "a";
      case "KeyS":
      case "ArrowDown":
        return "s";
      case "KeyD":
      case "ArrowRight":
        return "d";
      default:
        break;
    }
    const k = (e.key || "").toLowerCase();
    if (k === "w" || k === "a" || k === "s" || k === "d") return k;
    if (k === "arrowup") return "w";
    if (k === "arrowleft") return "a";
    if (k === "arrowdown") return "s";
    if (k === "arrowright") return "d";
    return null;
  }

  function isEnterEvent(e) {
    return (
      e.code === "Enter" ||
      e.code === "NumpadEnter" ||
      e.key === "Enter" ||
      e.key === "NumpadEnter"
    );
  }

  function isRestartEvent(e) {
    const k = (e.key || "").toLowerCase();
    return e.code === "KeyR" || k === "r";
  }

  function focusCanvas() {
    try {
      canvas.focus({ preventScroll: true });
    } catch (err) {
      canvas.focus();
    }
  }

  function onKeyDown(e) {
    if (e.p16demo) return;
    e.p16demo = true;

    keysHeard = true;
    lastKeyLabel = e.code || e.key || "?";
    setStatus();

    const dir = moveDirFromEvent(e);
    if (dir) {
      keys[dir] = true;
      e.preventDefault();
      // Na meniju / game over: WASD (in puščice) začnejo igro, tipka ostane pritisnjena.
      if (state === STATE.MENU || state === STATE.GAME_OVER) startGame();
      return;
    }
    if (isEnterEvent(e)) {
      e.preventDefault();
      if (!e.repeat && (state === STATE.MENU || state === STATE.GAME_OVER)) startGame();
      return;
    }
    if (isRestartEvent(e)) {
      if (!e.repeat && (state === STATE.PLAYING || state === STATE.GAME_OVER)) startGame();
    }
  }

  function onKeyUp(e) {
    if (e.p16demo) return;
    e.p16demo = true;
    const dir = moveDirFromEvent(e);
    if (dir) keys[dir] = false;
  }

  function bindKeys(target) {
    target.addEventListener("keydown", onKeyDown, true);
    target.addEventListener("keyup", onKeyUp, true);
  }

  bindKeys(window);
  bindKeys(document);
  bindKeys(canvas);

  canvas.addEventListener("pointerdown", (e) => {
    focusCanvas();
    if (e.button !== undefined && e.button !== 0) return;
    const pos = canvasMouse(e);
    mouse.x = pos.x;
    mouse.y = pos.y;
    mouse.down = true;
    if (state === STATE.MENU || state === STATE.GAME_OVER) startGame();
  });
  canvas.addEventListener("click", focusCanvas);
  window.addEventListener("load", focusCanvas);
  document.addEventListener("DOMContentLoaded", focusCanvas);
  focusCanvas();
  setStatus();

  canvas.addEventListener("mousemove", (e) => {
    const pos = canvasMouse(e);
    mouse.x = pos.x;
    mouse.y = pos.y;
  });

  canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    focusCanvas();
    const pos = canvasMouse(e);
    mouse.x = pos.x;
    mouse.y = pos.y;
    mouse.down = true;
    if (state === STATE.MENU || state === STATE.GAME_OVER) startGame();
  });

  window.addEventListener("mouseup", () => {
    mouse.down = false;
  });
  window.addEventListener("pointerup", () => {
    mouse.down = false;
  });

  canvas.addEventListener("contextmenu", (e) => e.preventDefault());

  /**
   * Pretvori zaslonske koordinate miške v koordinate platna (teden 5).
   */
  function canvasMouse(e) {
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;
    return {
      x: (e.clientX - r.left) * scaleX,
      y: (e.clientY - r.top) * scaleY,
    };
  }

  // --- Stanje igre ----------------------------------------------------------
  let state = STATE.MENU;
  let player;
  let projectiles;
  let enemies;
  let spawnQueue;
  let score;
  let wave;
  let fireTimer;
  let spawnTimer;
  let waveTimer;
  let waveBanner;

  function resetPlayer() {
    const size = CONFIG.playerSize;
    const p = {
      x: W / 2 - size / 2,
      y: H / 2 - size / 2,
      w: size,
      h: size,
      speed: CONFIG.playerSpeed,
      color: "#3b82f6",
      hp: CONFIG.playerMaxHp,
      maxHp: CONFIG.playerMaxHp,
      hurtCooldown: 0,
    };
    if (hitsAnyWall(p)) {
      p.x = 80;
      p.y = 80;
    }
    return p;
  }

  function startGame() {
    player = resetPlayer();
    projectiles = [];
    enemies = [];
    spawnQueue = [];
    score = 0;
    wave = 0;
    fireTimer = 0;
    spawnTimer = 0;
    waveTimer = 0.4;
    waveBanner = "";
    state = STATE.PLAYING;
    // Ne sprazni keys — pritisnjen WASD z menija mora takoj premikati.
    focusCanvas();
    setStatus();
  }

  // --- AABB (teden 4) -------------------------------------------------------
  function aabbOverlap(a, b) {
    return (
      a.x < b.x + b.w &&
      a.x + a.w > b.x &&
      a.y < b.y + b.h &&
      a.y + a.h > b.y
    );
  }

  function hitsAnyWall(box) {
    for (let i = 0; i < WALLS.length; i++) {
      if (aabbOverlap(box, WALLS[i])) return true;
    }
    return false;
  }

  /**
   * Premik z ločitvijo osi: najprej X, potem Y.
   * Če os trči v oviro, tisti premik razveljavimo (preprosti resolve).
   */
  function moveWithWalls(entity, dx, dy) {
    entity.x += dx;
    if (hitsAnyWall(entity)) entity.x -= dx;
    entity.y += dy;
    if (hitsAnyWall(entity)) entity.y -= dy;
  }

  function clampToCanvas(entity) {
    entity.x = Math.max(0, Math.min(W - entity.w, entity.x));
    entity.y = Math.max(0, Math.min(H - entity.h, entity.y));
  }

  function centerOf(box) {
    return { x: box.x + box.w / 2, y: box.y + box.h / 2 };
  }

  // --- Igralec (tedna 2 + 6) ------------------------------------------------
  function updatePlayer(dt) {
    let dx = 0;
    let dy = 0;
    if (keys.w) dy -= 1;
    if (keys.s) dy += 1;
    if (keys.a) dx -= 1;
    if (keys.d) dx += 1;

    if (dx !== 0 || dy !== 0) {
      const len = Math.hypot(dx, dy);
      dx /= len;
      dy /= len;
    }

    moveWithWalls(player, dx * player.speed * dt, dy * player.speed * dt);
    clampToCanvas(player);

    if (player.hurtCooldown > 0) player.hurtCooldown -= dt;
  }

  // --- Streljanje (teden 5) -------------------------------------------------
  function tryShoot() {
    if (!mouse.down || fireTimer > 0) return;

    const origin = centerOf(player);
    let dx = mouse.x - origin.x;
    let dy = mouse.y - origin.y;
    const len = Math.hypot(dx, dy);
    if (len < 1) return;
    dx /= len;
    dy /= len;

    const size = CONFIG.projectileSize;
    projectiles.push({
      x: origin.x - size / 2,
      y: origin.y - size / 2,
      w: size,
      h: size,
      vx: dx * CONFIG.projectileSpeed,
      vy: dy * CONFIG.projectileSpeed,
      life: CONFIG.projectileLife,
    });
    fireTimer = CONFIG.fireCooldown;
  }

  function updateProjectiles(dt) {
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const p = projectiles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;

      const offscreen =
        p.x + p.w < 0 || p.x > W || p.y + p.h < 0 || p.y > H;
      if (offscreen || p.life <= 0 || hitsAnyWall(p)) {
        projectiles.splice(i, 1);
        continue;
      }

      let hit = false;
      for (let j = enemies.length - 1; j >= 0; j--) {
        if (!aabbOverlap(p, enemies[j])) continue;
        enemies[j].hp -= 1;
        if (enemies[j].hp <= 0) {
          score += enemies[j].score;
          enemies.splice(j, 1);
        }
        hit = true;
        break;
      }
      if (hit) projectiles.splice(i, 1);
    }
  }

  // --- Sovražniki (tedna 6–8) -----------------------------------------------
  function spawnPointFor(size) {
    // Spawn ob robu, ne v oviri in ne preblizu igralca.
    for (let attempt = 0; attempt < 24; attempt++) {
      const side = attempt % 4;
      const pad = 8;
      let x;
      let y;
      if (side === 0) {
        x = pad;
        y = pad + Math.random() * (H - size - pad * 2);
      } else if (side === 1) {
        x = W - size - pad;
        y = pad + Math.random() * (H - size - pad * 2);
      } else if (side === 2) {
        x = pad + Math.random() * (W - size - pad * 2);
        y = pad;
      } else {
        x = pad + Math.random() * (W - size - pad * 2);
        y = H - size - pad;
      }
      const box = { x, y, w: size, h: size };
      const pc = centerOf(player);
      const ec = centerOf(box);
      const farEnough = Math.hypot(pc.x - ec.x, pc.y - ec.y) > 160;
      if (farEnough && !hitsAnyWall(box)) return box;
    }
    return { x: 8, y: 8, w: size, h: size };
  }

  function spawnEnemy(kind) {
    const spec = ENEMY_TYPES[kind];
    const pos = spawnPointFor(spec.w);
    const speedScale = 1 + (wave - 1) * 0.06;
    enemies.push({
      kind,
      x: pos.x,
      y: pos.y,
      w: spec.w,
      h: spec.h,
      speed: spec.speed * speedScale,
      hp: spec.hp,
      maxHp: spec.hp,
      color: spec.color,
      score: spec.score,
    });
  }

  function queueWave(n) {
    wave = n;
    spawnQueue = [];
    const walkers = 2 + n;
    const runners = Math.max(0, n - 1);
    for (let i = 0; i < walkers; i++) spawnQueue.push("walker");
    for (let i = 0; i < runners; i++) spawnQueue.push("runner");
    spawnTimer = 0.15;
    waveBanner = "Val " + wave;
    waveTimer = CONFIG.wavePause;
  }

  function updateWaves(dt) {
    if (waveBanner) {
      waveTimer -= dt;
      if (waveTimer <= 0) waveBanner = "";
    }

    spawnTimer -= dt;
    if (spawnQueue.length > 0 && spawnTimer <= 0) {
      spawnEnemy(spawnQueue.shift());
      spawnTimer = CONFIG.spawnGap;
    }

    if (
      spawnQueue.length === 0 &&
      enemies.length === 0 &&
      !waveBanner
    ) {
      queueWave(wave + 1);
    }
  }

  /**
   * Seek: smer proti središču igralca, konstantna hitrost, brez pathfindinga.
   */
  function updateEnemies(dt) {
    const target = centerOf(player);
    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      const c = centerOf(e);
      let dx = target.x - c.x;
      let dy = target.y - c.y;
      const len = Math.hypot(dx, dy);
      if (len > 0.001) {
        dx /= len;
        dy /= len;
      }
      moveWithWalls(e, dx * e.speed * dt, dy * e.speed * dt);
      clampToCanvas(e);

      if (aabbOverlap(e, player) && player.hurtCooldown <= 0) {
        player.hp -= 1;
        player.hurtCooldown = CONFIG.hurtCooldown;
        if (player.hp <= 0) {
          player.hp = 0;
          state = STATE.GAME_OVER;
        }
      }
    }
  }

  // --- Risanje --------------------------------------------------------------
  function drawGrid() {
    ctx.fillStyle = "#1a1d23";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(255,255,255,0.035)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }

  function drawWalls() {
    for (let i = 0; i < WALLS.length; i++) {
      const w = WALLS[i];
      ctx.fillStyle = "#5c6370";
      ctx.fillRect(w.x, w.y, w.w, w.h);
      ctx.fillStyle = "#6d7580";
      ctx.fillRect(w.x, w.y, w.w, 4);
    }
  }

  function drawPlayer() {
    const flashing = player.hurtCooldown > 0 && Math.floor(player.hurtCooldown * 12) % 2 === 0;
    ctx.fillStyle = flashing ? "#fecaca" : player.color;
    ctx.fillRect(player.x, player.y, player.w, player.h);

    // "Obraz" proti miški — isti vizualni jezik kot starter
    const c = centerOf(player);
    let dx = mouse.x - c.x;
    let dy = mouse.y - c.y;
    const len = Math.hypot(dx, dy) || 1;
    dx /= len;
    dy /= len;
    ctx.fillStyle = flashing ? "#fff" : "#93c5fd";
    ctx.fillRect(c.x + dx * 8 - 3, c.y + dy * 8 - 3, 6, 6);
  }

  function drawEnemies() {
    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      ctx.fillStyle = e.color;
      if (e.kind === "runner") {
        ctx.beginPath();
        ctx.arc(e.x + e.w / 2, e.y + e.h / 2, e.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(e.x, e.y, e.w, e.h);
      }
      if (e.maxHp > 1) {
        const ratio = e.hp / e.maxHp;
        ctx.fillStyle = "#111";
        ctx.fillRect(e.x, e.y - 6, e.w, 3);
        ctx.fillStyle = "#86efac";
        ctx.fillRect(e.x, e.y - 6, e.w * ratio, 3);
      }
    }
  }

  function drawProjectiles() {
    ctx.fillStyle = "#fbbf24";
    for (let i = 0; i < projectiles.length; i++) {
      const p = projectiles[i];
      ctx.beginPath();
      ctx.arc(p.x + p.w / 2, p.y + p.h / 2, p.w / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawHud() {
    ctx.font = "600 16px system-ui, sans-serif";
    ctx.textBaseline = "top";

    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.fillRect(10, 10, 250, 78);

    ctx.fillStyle = "#e8eaed";
    ctx.fillText("HP", 20, 18);
    const barX = 52;
    const barY = 20;
    const barW = 196;
    const barH = 14;
    ctx.fillStyle = "#2a2e35";
    ctx.fillRect(barX, barY, barW, barH);
    const hpRatio = player ? player.hp / player.maxHp : 0;
    ctx.fillStyle = hpRatio > 0.4 ? "#4ade80" : "#f87171";
    ctx.fillRect(barX, barY, barW * hpRatio, barH);

    ctx.fillStyle = "#e8eaed";
    ctx.fillText("Točke  " + score, 20, 42);
    ctx.fillText("Val    " + wave, 20, 62);
  }

  function drawBanner(text, sub) {
    ctx.fillStyle = "rgba(15, 17, 21, 0.72)";
    ctx.fillRect(0, 0, W, H);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#e8eaed";
    ctx.font = "700 42px system-ui, sans-serif";
    ctx.fillText(text, W / 2, H / 2 - 70);

    ctx.font = "16px system-ui, sans-serif";
    ctx.fillStyle = "#9aa0a6";
    const lines = sub.split("\n");
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], W / 2, H / 2 - 10 + i * 26);
    }
    ctx.textAlign = "left";
  }

  function drawWaveBanner() {
    if (!waveBanner || state !== STATE.PLAYING) return;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 28px system-ui, sans-serif";
    ctx.fillStyle = "rgba(232, 234, 237, 0.9)";
    ctx.fillText(waveBanner, W / 2, 70);
    ctx.textAlign = "left";
  }

  function draw() {
    drawGrid();
    drawWalls();

    if (state === STATE.MENU) {
      drawBanner(
        "Zombie Survival",
        "Referenčna igra · teden 8\n\nWASD / puščice  premik (tudi začne igro)\nmiška  strel     R  ponovni zagon\n\nPritisni WASD, ENTER ali klikni"
      );
      return;
    }

    drawEnemies();
    drawPlayer();
    drawProjectiles();
    drawHud();
    drawWaveBanner();

    if (state === STATE.GAME_OVER) {
      drawBanner(
        "Konec igre",
        "Točke  " + score + "     Val  " + wave + "\n\nR ali ENTER — igraj znova"
      );
    }
  }

  // --- Game loop (teden 3) --------------------------------------------------
  let lastTime = 0;
  let loopFrames = 0;
  let lastLoopError = "";

  function loop(timestamp) {
    loopFrames += 1;
    try {
      if (!lastTime) lastTime = timestamp;
      let dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
      if (dt > 0.05) dt = 0.05;

      if (state === STATE.PLAYING) {
        updatePlayer(dt);
        if (fireTimer > 0) fireTimer -= dt;
        tryShoot();
        updateProjectiles(dt);
        updateEnemies(dt);
        updateWaves(dt);
      }

      draw();
    } catch (err) {
      lastLoopError = String((err && err.stack) || err);
      console.error(lastLoopError);
    }
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  window.__P16 = {
    getState: function () {
      return state;
    },
    getPlayer: function () {
      return player
        ? { x: player.x, y: player.y, w: player.w, h: player.h, hp: player.hp }
        : null;
    },
    getKeys: function () {
      return { w: keys.w, a: keys.a, s: keys.s, d: keys.d };
    },
    getLastKey: function () {
      return lastKeyLabel;
    },
    getFrames: function () {
      return loopFrames;
    },
    getLoopError: function () {
      return lastLoopError;
    },
  };
})();
