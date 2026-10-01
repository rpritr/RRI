/**
 * Igralec (tedna 2 in 6): WASD, diagonala, clamp, hurtTimer.
 */
import { PLAYER_MAX_HP, PLAYER_SIZE, PLAYER_SPEED } from "./config.js";
import { moveWithWalls } from "./collision.js";
import { world } from "./world.js";

export function resetPlayer() {
  const size = PLAYER_SIZE;
  return {
    x: world.W / 2 - size / 2,
    y: world.H / 2 - size / 2,
    w: size,
    h: size,
    speed: PLAYER_SPEED,
    color: "#3b82f6",
    hp: PLAYER_MAX_HP,
    maxHp: PLAYER_MAX_HP,
    hurtTimer: 0,
  };
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
  if (player.hurtTimer > 0) player.hurtTimer -= dt;
}
