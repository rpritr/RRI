/**
 * Skupno stanje. Funkcije v drugih datotekah berejo in pišejo sem.
 * V študentskem enem game.js so to običajne spremenljivke (let state, let player, …).
 */

export const world = {
  canvas: null,
  ctx: null,
  W: 0,
  H: 0,
  state: "MENU",
  player: null,
  bullets: [],
  enemies: [],
  score: 0,
  wave: 0,
  shotTimer: 0,
  keys: { w: false, a: false, s: false, d: false },
  mouse: { x: 0, y: 0, down: false },
};

export function attachCanvas(canvas) {
  world.canvas = canvas;
  world.ctx = canvas.getContext("2d");
  world.W = canvas.width;
  world.H = canvas.height;
  world.mouse.x = world.W / 2;
  world.mouse.y = world.H / 2;
}
