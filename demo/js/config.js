/**
 * Konstante (cycle: change → test).
 * Hitrost, HP, cooldown in sestava tipov živijo tukaj, ne raztreseni po zanki.
 */

export const STATE = {
  MENU: "MENU",
  PLAYING: "PLAYING",
  GAME_OVER: "GAME_OVER",
};

export const CONFIG = {
  playerSpeed: 220, // px/s — enako kot starter
  playerSize: 28,
  playerMaxHp: 5,
  hurtCooldown: 0.85, // s i-frameov po zadetku
  fireCooldown: 0.22, // s med streli
  projectileSpeed: 520,
  projectileSize: 6,
  projectileLife: 1.4, // s, če ne zadene ničesar
  wavePause: 1.6, // s med valovi
  spawnGap: 0.4, // s med spawnom znotraj vala
};

export const ENEMY_TYPES = {
  walker: {
    w: 34,
    h: 34,
    speed: 58,
    hp: 3,
    color: "#4a7c59",
    score: 10,
  },
  runner: {
    w: 20,
    h: 20,
    speed: 175,
    hp: 1,
    color: "#d44545",
    score: 20,
  },
};

// Ovire (teden 4). Igralec in sovražniki se ob njih ustavijo (AABB).
// Projektili ob stiku izginejo.
// Središče (spawn igralca) mora ostati prosto — sicer AABB razveljavi vsak premik.
export const WALLS = [
  { x: 200, y: 90, w: 150, h: 28 },
  { x: 680, y: 70, w: 28, h: 160 },
  { x: 260, y: 250, w: 90, h: 28 },
  { x: 610, y: 250, w: 90, h: 28 },
  { x: 70, y: 360, w: 90, h: 80 },
  { x: 800, y: 380, w: 110, h: 28 },
  { x: 470, y: 430, w: 28, h: 80 },
];
