/**
 * Sovražniki (tedna 6–8): spawn ob robu, valovi, seek brez pathfindinga.
 */
import { CONFIG, ENEMY_TYPES, STATE } from "./config.js";
import { world } from "./world.js";
import {
  aabbOverlap,
  centerOf,
  clampToCanvas,
  hitsAnyWall,
  moveWithWalls,
} from "./collision.js";

function spawnPointFor(size) {
  // Spawn ob robu, ne v oviri in ne preblizu igralca.
  for (let attempt = 0; attempt < 24; attempt++) {
    const side = attempt % 4;
    const pad = 8;
    let x;
    let y;
    if (side === 0) {
      x = pad;
      y = pad + Math.random() * (world.H - size - pad * 2);
    } else if (side === 1) {
      x = world.W - size - pad;
      y = pad + Math.random() * (world.H - size - pad * 2);
    } else if (side === 2) {
      x = pad + Math.random() * (world.W - size - pad * 2);
      y = pad;
    } else {
      x = pad + Math.random() * (world.W - size - pad * 2);
      y = world.H - size - pad;
    }
    const box = { x, y, w: size, h: size };
    const pc = centerOf(world.player);
    const ec = centerOf(box);
    const farEnough = Math.hypot(pc.x - ec.x, pc.y - ec.y) > 160;
    if (farEnough && !hitsAnyWall(box)) return box;
  }
  return { x: 8, y: 8, w: size, h: size };
}

function spawnEnemy(kind) {
  const spec = ENEMY_TYPES[kind];
  const pos = spawnPointFor(spec.w);
  const speedScale = 1 + (world.wave - 1) * 0.06;
  world.enemies.push({
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
  world.wave = n;
  world.spawnQueue = [];
  const walkers = 2 + n;
  const runners = Math.max(0, n - 1);
  for (let i = 0; i < walkers; i++) world.spawnQueue.push("walker");
  for (let i = 0; i < runners; i++) world.spawnQueue.push("runner");
  world.spawnTimer = 0.15;
  world.waveBanner = "Val " + world.wave;
  world.waveTimer = CONFIG.wavePause;
}

export function updateWaves(dt) {
  if (world.waveBanner) {
    world.waveTimer -= dt;
    if (world.waveTimer <= 0) world.waveBanner = "";
  }

  world.spawnTimer -= dt;
  if (world.spawnQueue.length > 0 && world.spawnTimer <= 0) {
    spawnEnemy(world.spawnQueue.shift());
    world.spawnTimer = CONFIG.spawnGap;
  }

  if (world.spawnQueue.length === 0 && world.enemies.length === 0 && !world.waveBanner) {
    queueWave(world.wave + 1);
  }
}

/**
 * Seek: smer proti središču igralca, konstantna hitrost, brez pathfindinga.
 */
export function updateEnemies(dt) {
  const player = world.player;
  const target = centerOf(player);
  for (let i = 0; i < world.enemies.length; i++) {
    const e = world.enemies[i];
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
        world.state = STATE.GAME_OVER;
      }
    }
  }
}
