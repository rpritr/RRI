/**
 * Trki (teden 4). Vse entitete so pravokotniki {x, y, w, h}.
 */
import { walls } from "./config.js";
import { world } from "./world.js";

export function aabbOverlap(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

export function hitsWall(box) {
  for (let i = 0; i < walls.length; i++) {
    if (aabbOverlap(box, walls[i])) return true;
  }
  return false;
}

export function clampToCanvas(entity) {
  entity.x = Math.max(0, Math.min(world.W - entity.w, entity.x));
  entity.y = Math.max(0, Math.min(world.H - entity.h, entity.y));
}

// Najprej x, nato y. Če os zadene zid, tisti premik razveljavimo.
export function moveWithWalls(entity, dx, dy) {
  entity.x += dx;
  if (hitsWall(entity)) entity.x -= dx;
  entity.y += dy;
  if (hitsWall(entity)) entity.y -= dy;
  clampToCanvas(entity);
}
