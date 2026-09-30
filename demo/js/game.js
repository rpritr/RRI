/**
 * P16 — referenčna igra (milestone tedna 8)
 * HTML Canvas + vanilla JS, ES moduli, brez knjižnic.
 *
 * Vstopna točka: zanka, stanja, zagon. Ostalo je po sistemih:
 *   config.js       konstante, tipi, ovire
 *   world.js        skupno stanje
 *   input.js        tipkovnica in miška
 *   collision.js    AABB
 *   player.js       premik in HP igralca
 *   projectiles.js  strel
 *   enemies.js      valovi in seek
 *   render.js       risanje
 *
 * To NI rešitev za teden 1. Študenti zgradijo to postopoma
 * (lahko v enem game.js, dokler datoteka ostane pregledna):
 *   1–2  igralec + WASD + clamp
 *   3    game loop, dt, stanja
 *   4    AABB ovire
 *   5    strel proti miški
 *   6    HP, i-frames, GAME_OVER, R
 *   7    score, valovi, HUD
 *   8    seek AI + 2 tipa sovražnikov
 */
import { STATE } from "./config.js";
import { attachCanvas, world } from "./world.js";
import { bindInput, focusCanvas, setStatus } from "./input.js";
import { resetPlayer, updatePlayer } from "./player.js";
import { tryShoot, updateProjectiles } from "./projectiles.js";
import { updateEnemies, updateWaves } from "./enemies.js";
import { draw } from "./render.js";

const canvas = document.getElementById("game");
if (!canvas) {
  document.body.insertAdjacentHTML(
    "afterbegin",
    "<p>Napaka: platna <code>#game</code> ni. Odpri <code>index.html</code> iz mape <code>demo/</code> prek <code>python3 -m http.server</code>.</p>"
  );
} else {
  attachCanvas(canvas, document.getElementById("input-status"));

  function startGame() {
    world.player = resetPlayer();
    world.projectiles = [];
    world.enemies = [];
    world.spawnQueue = [];
    world.score = 0;
    world.wave = 0;
    world.fireTimer = 0;
    world.spawnTimer = 0;
    world.waveTimer = 0.4;
    world.waveBanner = "";
    world.state = STATE.PLAYING;
    // Ne sprazni keys — pritisnjen WASD z menija mora takoj premikati.
    focusCanvas();
    setStatus();
  }

  bindInput(startGame);

  // --- Game loop (teden 3) ------------------------------------------------
  let lastTime = 0;

  function loop(timestamp) {
    world.loopFrames += 1;
    try {
      if (!lastTime) lastTime = timestamp;
      let dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
      if (dt > 0.05) dt = 0.05;

      if (world.state === STATE.PLAYING) {
        updatePlayer(dt);
        if (world.fireTimer > 0) world.fireTimer -= dt;
        tryShoot();
        updateProjectiles(dt);
        updateEnemies(dt);
        updateWaves(dt);
      }

      draw();
    } catch (err) {
      world.lastLoopError = String((err && err.stack) || err);
      console.error(world.lastLoopError);
    }
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  window.__P16 = {
    getState: function () {
      return world.state;
    },
    getPlayer: function () {
      const player = world.player;
      return player
        ? { x: player.x, y: player.y, w: player.w, h: player.h, hp: player.hp }
        : null;
    },
    getKeys: function () {
      return { w: world.keys.w, a: world.keys.a, s: world.keys.s, d: world.keys.d };
    },
    getLastKey: function () {
      return world.lastKeyLabel;
    },
    getFrames: function () {
      return world.loopFrames;
    },
    getLoopError: function () {
      return world.lastLoopError;
    },
  };
}
