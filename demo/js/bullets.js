/**
 * Streljanje (teden 5). Krogla je pravokotnik, smer je enotski vektor.
 */
import { BULLET_COOLDOWN, BULLET_SIZE, BULLET_SPEED } from "./config.js";
import { aabbOverlap, hitsWall } from "./collision.js";
import { world } from "./world.js";

export function shoot() {
  const player = world.player;
  const cx = player.x + player.w / 2;
  const cy = player.y + player.h / 2;
  let dx = world.mouse.x - cx;
  let dy = world.mouse.y - cy;
  const len = Math.hypot(dx, dy);
  if (len < 1) return;

  dx /= len;
  dy /= len;
  world.bullets.push({
    x: cx - BULLET_SIZE / 2,
    y: cy - BULLET_SIZE / 2,
    w: BULLET_SIZE,
    h: BULLET_SIZE,
    vx: dx,
    vy: dy,
  });
  world.shotTimer = BULLET_COOLDOWN;
}

export function updateBullets(dt) {
  const bullets = world.bullets;
  const enemies = world.enemies;

  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.x += b.vx * BULLET_SPEED * dt;
    b.y += b.vy * BULLET_SPEED * dt;

    const offscreen = b.x + b.w < 0 || b.x > world.W || b.y + b.h < 0 || b.y > world.H;
    if (offscreen || hitsWall(b)) {
      bullets.splice(i, 1);
      continue;
    }

    for (let j = enemies.length - 1; j >= 0; j--) {
      if (!aabbOverlap(b, enemies[j])) continue;
      enemies[j].hp -= 1;
      if (enemies[j].hp <= 0) {
        world.score += enemies[j].points;
        enemies.splice(j, 1);
      }
      bullets.splice(i, 1);
      break;
    }
  }
}
