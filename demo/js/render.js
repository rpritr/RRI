/**
 * Risanje: mreža, ovire, entitete, HUD, meni in game over.
 * Barvni pravokotniki namesto spriteov.
 */
import { STATE, WALLS } from "./config.js";
import { world } from "./world.js";
import { centerOf } from "./collision.js";

function drawGrid() {
  const ctx = world.ctx;
  ctx.fillStyle = "#1a1d23";
  ctx.fillRect(0, 0, world.W, world.H);
  ctx.strokeStyle = "rgba(255,255,255,0.035)";
  ctx.lineWidth = 1;
  for (let x = 0; x < world.W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, world.H);
    ctx.stroke();
  }
  for (let y = 0; y < world.H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(world.W, y);
    ctx.stroke();
  }
}

function drawWalls() {
  const ctx = world.ctx;
  for (let i = 0; i < WALLS.length; i++) {
    const w = WALLS[i];
    ctx.fillStyle = "#5c6370";
    ctx.fillRect(w.x, w.y, w.w, w.h);
    ctx.fillStyle = "#6d7580";
    ctx.fillRect(w.x, w.y, w.w, 4);
  }
}

function drawPlayer() {
  const ctx = world.ctx;
  const player = world.player;
  const flashing = player.hurtCooldown > 0 && Math.floor(player.hurtCooldown * 12) % 2 === 0;
  ctx.fillStyle = flashing ? "#fecaca" : player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // "Obraz" proti miški — isti vizualni jezik kot starter
  const c = centerOf(player);
  let dx = world.mouse.x - c.x;
  let dy = world.mouse.y - c.y;
  const len = Math.hypot(dx, dy) || 1;
  dx /= len;
  dy /= len;
  ctx.fillStyle = flashing ? "#fff" : "#93c5fd";
  ctx.fillRect(c.x + dx * 8 - 3, c.y + dy * 8 - 3, 6, 6);
}

function drawEnemies() {
  const ctx = world.ctx;
  for (let i = 0; i < world.enemies.length; i++) {
    const e = world.enemies[i];
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
  const ctx = world.ctx;
  ctx.fillStyle = "#fbbf24";
  for (let i = 0; i < world.projectiles.length; i++) {
    const p = world.projectiles[i];
    ctx.beginPath();
    ctx.arc(p.x + p.w / 2, p.y + p.h / 2, p.w / 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawHud() {
  const ctx = world.ctx;
  const player = world.player;
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
  ctx.fillText("Točke  " + world.score, 20, 42);
  ctx.fillText("Val    " + world.wave, 20, 62);
}

function drawBanner(text, sub) {
  const ctx = world.ctx;
  ctx.fillStyle = "rgba(15, 17, 21, 0.72)";
  ctx.fillRect(0, 0, world.W, world.H);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#e8eaed";
  ctx.font = "700 42px system-ui, sans-serif";
  ctx.fillText(text, world.W / 2, world.H / 2 - 70);

  ctx.font = "16px system-ui, sans-serif";
  ctx.fillStyle = "#9aa0a6";
  const lines = sub.split("\n");
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], world.W / 2, world.H / 2 - 10 + i * 26);
  }
  ctx.textAlign = "left";
}

function drawWaveBanner() {
  if (!world.waveBanner || world.state !== STATE.PLAYING) return;
  const ctx = world.ctx;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "700 28px system-ui, sans-serif";
  ctx.fillStyle = "rgba(232, 234, 237, 0.9)";
  ctx.fillText(world.waveBanner, world.W / 2, 70);
  ctx.textAlign = "left";
}

export function draw() {
  drawGrid();
  drawWalls();

  if (world.state === STATE.MENU) {
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

  if (world.state === STATE.GAME_OVER) {
    drawBanner(
      "Konec igre",
      "Točke  " + world.score + "     Val  " + world.wave + "\n\nR ali ENTER — igraj znova"
    );
  }
}
