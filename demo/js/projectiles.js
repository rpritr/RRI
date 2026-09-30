/**
 * Streljanje (teden 5): smer proti miški, cooldown, življenjska doba.
 */
import { CONFIG } from "./config.js";
import { world } from "./world.js";
import { aabbOverlap, centerOf, hitsAnyWall } from "./collision.js";

export function tryShoot() {
  if (!world.mouse.down || world.fireTimer > 0) return;

  const origin = centerOf(world.player);
  let dx = world.mouse.x - origin.x;
  let dy = world.mouse.y - origin.y;
  const len = Math.hypot(dx, dy);
  if (len < 1) return;
  dx /= len;
  dy /= len;

  const size = CONFIG.projectileSize;
  world.projectiles.push({
    x: origin.x - size / 2,
    y: origin.y - size / 2,
    w: size,
    h: size,
    vx: dx * CONFIG.projectileSpeed,
    vy: dy * CONFIG.projectileSpeed,
    life: CONFIG.projectileLife,
  });
  world.fireTimer = CONFIG.fireCooldown;
}

export function updateProjectiles(dt) {
  const projectiles = world.projectiles;
  const enemies = world.enemies;

  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= dt;

    const offscreen =
      p.x + p.w < 0 || p.x > world.W || p.y + p.h < 0 || p.y > world.H;
    if (offscreen || p.life <= 0 || hitsAnyWall(p)) {
      projectiles.splice(i, 1);
      continue;
    }

    let hit = false;
    for (let j = enemies.length - 1; j >= 0; j--) {
      if (!aabbOverlap(p, enemies[j])) continue;
      enemies[j].hp -= 1;
      if (enemies[j].hp <= 0) {
        world.score += enemies[j].score;
        enemies.splice(j, 1);
      }
      hit = true;
      break;
    }
    if (hit) projectiles.splice(i, 1);
  }
}
