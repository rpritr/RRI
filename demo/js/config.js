/**
 * Števila in podatki. Spremeni tukaj, osveži, poglej igro.
 */

export const PLAYER_SPEED = 220;
export const PLAYER_SIZE = 28;
export const PLAYER_MAX_HP = 5;
export const HURT_COOLDOWN = 0.8;
export const BULLET_SPEED = 420;
export const BULLET_COOLDOWN = 0.25;
export const BULLET_SIZE = 8;

// Dva tipa = isti seek, različna števila (teden 8).
export const KINDS = {
  walker: { w: 32, h: 32, speed: 55, hp: 3, color: "#4a7c59", points: 10 },
  runner: { w: 20, h: 20, speed: 150, hp: 1, color: "#d44545", points: 20 },
};

export const walls = [
  { x: 140, y: 150, w: 200, h: 28 },
  { x: 640, y: 140, w: 28, h: 180 },
  { x: 400, y: 400, w: 180, h: 28 },
];
