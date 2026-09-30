/**
 * Trki (teden 4): AABB, ovire, premik z ločitvijo osi.
 */
import { WALLS } from "./config.js";
import { world } from "./world.js";

export function aabbOverlap(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

export function hitsAnyWall(box) {
  for (let i = 0; i < WALLS.length; i++) {
    if (aabbOverlap(box, WALLS[i])) return true;
  }
  return false;
}

export function clampToCanvas(entity) {
  entity.x = Math.max(0, Math.min(world.W - entity.w, entity.x));
  entity.y = Math.max(0, Math.min(world.H - entity.h, entity.y));
}

export function centerOf(box) {
  return { x: box.x + box.w / 2, y: box.y + box.h / 2 };
}

/**
 * Če je entiteta že v steni, jo potisni ven po manjši prekrivanju osi
 * (minimum translation). Brez tega AABB “razveljavi premik” obdrži klešče.
 */
export function unstickFromWalls(entity) {
  for (let n = 0; n < 8; n++) {
    let wall = null;
    for (let i = 0; i < WALLS.length; i++) {
      if (aabbOverlap(entity, WALLS[i])) {
        wall = WALLS[i];
        break;
      }
    }
    if (!wall) return;
    const overlapX =
      Math.min(entity.x + entity.w, wall.x + wall.w) - Math.max(entity.x, wall.x);
    const overlapY =
      Math.min(entity.y + entity.h, wall.y + wall.h) - Math.max(entity.y, wall.y);
    if (overlapX <= overlapY) {
      const ec = entity.x + entity.w / 2;
      const wc = wall.x + wall.w / 2;
      entity.x += ec < wc ? -overlapX : overlapX;
    } else {
      const ec = entity.y + entity.h / 2;
      const wc = wall.y + wall.h / 2;
      entity.y += ec < wc ? -overlapY : overlapY;
    }
    clampToCanvas(entity);
  }
}

/**
 * Premik z ločitvijo osi: najprej X, potem Y.
 * Če os trči v oviro, tisti premik razveljavimo (preprosti resolve).
 */
export function moveWithWalls(entity, dx, dy) {
  unstickFromWalls(entity);
  entity.x += dx;
  if (hitsAnyWall(entity)) entity.x -= dx;
  entity.y += dy;
  if (hitsAnyWall(entity)) entity.y -= dy;
}
