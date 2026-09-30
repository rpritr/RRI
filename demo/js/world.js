/**
 * Skupno stanje igre. Moduli berejo in pišejo sem,
 * da si podatkov ne podajajo v krogu (input → zanka → sovražniki).
 */
import { STATE } from "./config.js";

export const world = {
  canvas: null,
  ctx: null,
  W: 0,
  H: 0,
  statusEl: null,
  state: STATE.MENU,
  player: null,
  projectiles: [],
  enemies: [],
  spawnQueue: [],
  score: 0,
  wave: 0,
  fireTimer: 0,
  spawnTimer: 0,
  waveTimer: 0,
  waveBanner: "",
  keys: { w: false, a: false, s: false, d: false },
  mouse: { x: 0, y: 0, down: false },
  lastKeyLabel: "—",
  keysHeard: false,
  loopFrames: 0,
  lastLoopError: "",
};

export function attachCanvas(canvas, statusEl) {
  world.canvas = canvas;
  world.ctx = canvas.getContext("2d");
  world.W = canvas.width;
  world.H = canvas.height;
  world.statusEl = statusEl;
  world.mouse.x = world.W / 2;
  world.mouse.y = world.H / 2;
  canvas.tabIndex = 0;
}
