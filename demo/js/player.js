/**
 * Igralec (tedna 2 in 6): WASD, clamp, i-frames.
 */
import { CONFIG } from "./config.js";
import { world } from "./world.js";
import {
  clampToCanvas,
  hitsAnyWall,
  moveWithWalls,
  unstickFromWalls,
} from "./collision.js";

export function resetPlayer() {
  const size = CONFIG.playerSize;
  // Spawn nad pasom ovir (~y=250). Središče platna je prekrivalo staro
  // steno in AABB je razveljavil vsak WASD korak.
  const p = {
    x: world.W / 2 - size / 2,
    y: 168,
    w: size,
    h: size,
    speed: CONFIG.playerSpeed,
    color: "#3b82f6",
    hp: CONFIG.playerMaxHp,
    maxHp: CONFIG.playerMaxHp,
    hurtCooldown: 0,
  };
  if (hitsAnyWall(p)) {
    unstickFromWalls(p);
  }
  if (hitsAnyWall(p)) {
    p.x = 80;
    p.y = 80;
  }
  return p;
}

export function updatePlayer(dt) {
  const player = world.player;
  const keys = world.keys;
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
