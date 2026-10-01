/**
 * P16 — referenčna igra (milestone tedna 8)
 * HTML Canvas + vanilla JS, brez knjižnic.
 *
 * Zanka in zagon. Ostalo je po datotekah, ista imena kot na vajah:
 *   config.js     števila, KINDS, walls
 *   world.js      skupno stanje
 *   collision.js  aabbOverlap, moveWithWalls
 *   player.js     premik in hurtTimer
 *   bullets.js    strel proti miški
 *   enemies.js    valovi in seek
 *   input.js      tipkovnica in miška
 *   render.js     risanje
 *
 * Študentska oddaja sme ostati v enem game.js. Ta razdelitev je zemljevid sistemov.
 */
import { attachCanvas, world } from "./world.js";
import { bindInput } from "./input.js";
import { resetPlayer, updatePlayer } from "./player.js";
import { shoot, updateBullets } from "./bullets.js";
import { spawnWave, updateEnemy } from "./enemies.js";
import { draw } from "./render.js";

const canvas = document.getElementById("game");

function resetGame() {
  world.player = resetPlayer();
  world.bullets = [];
  world.enemies = [];
  world.score = 0;
  world.shotTimer = 0;
  world.state = "PLAYING";
  spawnWave(1);
}

function update(dt) {
  if (world.state !== "PLAYING") return;

  updatePlayer(dt);
  if (world.shotTimer > 0) world.shotTimer -= dt;
  if (world.mouse.down && world.shotTimer <= 0) shoot();
  updateBullets(dt);

  for (let i = 0; i < world.enemies.length; i++) {
    updateEnemy(world.enemies[i], dt);
    if (world.state !== "PLAYING") return;
  }

  if (world.enemies.length === 0) spawnWave(world.wave + 1);
}

attachCanvas(canvas);
bindInput(resetGame);

let lastTime = 0;

function loop(timestamp) {
  if (!lastTime) lastTime = timestamp;
  let dt = (timestamp - lastTime) / 1000;
  lastTime = timestamp;
  if (dt > 0.05) dt = 0.05;

  update(dt);
  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
