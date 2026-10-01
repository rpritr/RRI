/**
 * Sovražniki (tedna 7 in 8): val, ko je arena prazna, in seek.
 */
import { HURT_COOLDOWN, KINDS } from "./config.js";
import { aabbOverlap, hitsWall, moveWithWalls } from "./collision.js";
import { world } from "./world.js";

function spawnEnemy(kind, index) {
  const spec = KINDS[kind];
  const spots = [
    [20, 20],
    [world.W - spec.w - 20, 20],
    [20, world.H - spec.h - 20],
    [world.W - spec.w - 20, world.H - spec.h - 20],
    [world.W / 2 - spec.w / 2, 20],
    [20, world.H / 2 - spec.h / 2],
    [world.W - spec.w - 20, world.H / 2 - spec.h / 2],
  ];

  const player = world.player;
  let x = spots[0][0];
  let y = spots[0][1];
  for (let n = 0; n < spots.length; n++) {
    const spot = spots[(index + n) % spots.length];
    const box = { x: spot[0], y: spot[1], w: spec.w, h: spec.h };
    const dx = player.x + player.w / 2 - (box.x + box.w / 2);
    const dy = player.y + player.h / 2 - (box.y + box.h / 2);
    if (!hitsWall(box) && Math.hypot(dx, dy) > 140) {
      x = spot[0];
      y = spot[1];
      break;
    }
  }

  world.enemies.push({
    kind: kind,
    x: x,
    y: y,
    w: spec.w,
    h: spec.h,
    speed: spec.speed,
    hp: spec.hp,
    maxHp: spec.hp,
    color: spec.color,
    points: spec.points,
  });
}

// Val 1: samo walkerji. Od vala 2 tudi runnerji. Večji val = več sovražnikov.
export function spawnWave(n) {
  world.wave = n;
  world.enemies = [];
  const walkers = 2 + n;
  const runners = n > 1 ? n - 1 : 0;
  let index = 0;
  for (let i = 0; i < walkers; i++) spawnEnemy("walker", index++);
  for (let i = 0; i < runners; i++) spawnEnemy("runner", index++);
}

export function updateEnemy(e, dt) {
  const player = world.player;
  const tx = player.x + player.w / 2;
  const ty = player.y + player.h / 2;
  let dx = tx - (e.x + e.w / 2);
  let dy = ty - (e.y + e.h / 2);
  const len = Math.hypot(dx, dy);
  if (len > 0) {
    dx /= len;
    dy /= len;
  }
  moveWithWalls(e, dx * e.speed * dt, dy * e.speed * dt);

  if (aabbOverlap(e, player) && player.hurtTimer <= 0) {
    player.hp -= 1;
    player.hurtTimer = HURT_COOLDOWN;
    if (player.hp <= 0) {
      player.hp = 0;
      world.state = "GAME_OVER";
    }
  }
}
