/**
 * Vhod (tedna 1–2 in 5): WASD / puščice zabeležijo stanje,
 * miška meri in strelja. Poslušalci ne premikajo igralca.
 */
import { STATE } from "./config.js";
import { world } from "./world.js";

export function setStatus() {
  const statusEl = world.statusEl;
  if (!statusEl) return;
  if (!world.keysHeard) {
    statusEl.textContent = "Klikni platno, nato WASD ali ENTER";
    return;
  }
  statusEl.textContent = "tipke: OK · zadnji: " + world.lastKeyLabel;
}

export function focusCanvas() {
  const canvas = world.canvas;
  try {
    canvas.focus({ preventScroll: true });
  } catch (err) {
    canvas.focus();
  }
}

/**
 * WASD prek e.code (KeyW …) — deluje tudi na AZERTY/QWERTZ.
 * Dodatno e.key in puščice.
 */
function moveDirFromEvent(e) {
  switch (e.code) {
    case "KeyW":
    case "ArrowUp":
      return "w";
    case "KeyA":
    case "ArrowLeft":
      return "a";
    case "KeyS":
    case "ArrowDown":
      return "s";
    case "KeyD":
    case "ArrowRight":
      return "d";
    default:
      break;
  }
  const k = (e.key || "").toLowerCase();
  if (k === "w" || k === "a" || k === "s" || k === "d") return k;
  if (k === "arrowup") return "w";
  if (k === "arrowleft") return "a";
  if (k === "arrowdown") return "s";
  if (k === "arrowright") return "d";
  return null;
}

function isEnterEvent(e) {
  return (
    e.code === "Enter" ||
    e.code === "NumpadEnter" ||
    e.key === "Enter" ||
    e.key === "NumpadEnter"
  );
}

function isRestartEvent(e) {
  const k = (e.key || "").toLowerCase();
  return e.code === "KeyR" || k === "r";
}

/**
 * Pretvori zaslonske koordinate miške v koordinate platna (teden 5).
 */
function canvasMouse(e) {
  const canvas = world.canvas;
  const r = canvas.getBoundingClientRect();
  const scaleX = canvas.width / r.width;
  const scaleY = canvas.height / r.height;
  return {
    x: (e.clientX - r.left) * scaleX,
    y: (e.clientY - r.top) * scaleY,
  };
}

function onKeyDown(e, startGame) {
  // Isti dogodek slišijo window, document in canvas (capture).
  // Oznaka prepreči trikratni startGame na en pritisk.
  if (e.p16demo) return;
  e.p16demo = true;

  world.keysHeard = true;
  world.lastKeyLabel = e.code || e.key || "?";
  setStatus();

  const dir = moveDirFromEvent(e);
  if (dir) {
    world.keys[dir] = true;
    e.preventDefault();
    // Na meniju / game over: WASD (in puščice) začnejo igro, tipka ostane pritisnjena.
    if (world.state === STATE.MENU || world.state === STATE.GAME_OVER) startGame();
    return;
  }
  if (isEnterEvent(e)) {
    e.preventDefault();
    if (!e.repeat && (world.state === STATE.MENU || world.state === STATE.GAME_OVER)) {
      startGame();
    }
    return;
  }
  if (isRestartEvent(e)) {
    if (!e.repeat && (world.state === STATE.PLAYING || world.state === STATE.GAME_OVER)) {
      startGame();
    }
  }
}

function onKeyUp(e) {
  if (e.p16demo) return;
  e.p16demo = true;
  const dir = moveDirFromEvent(e);
  if (dir) world.keys[dir] = false;
}

function bindKeys(target, startGame) {
  target.addEventListener("keydown", (e) => onKeyDown(e, startGame), true);
  target.addEventListener("keyup", onKeyUp, true);
}

export function bindInput(startGame) {
  const canvas = world.canvas;

  bindKeys(window, startGame);
  bindKeys(document, startGame);
  bindKeys(canvas, startGame);

  canvas.addEventListener("pointerdown", (e) => {
    focusCanvas();
    if (e.button !== undefined && e.button !== 0) return;
    const pos = canvasMouse(e);
    world.mouse.x = pos.x;
    world.mouse.y = pos.y;
    world.mouse.down = true;
    if (world.state === STATE.MENU || world.state === STATE.GAME_OVER) startGame();
  });
  canvas.addEventListener("click", focusCanvas);
  window.addEventListener("load", focusCanvas);
  document.addEventListener("DOMContentLoaded", focusCanvas);
  focusCanvas();
  setStatus();

  canvas.addEventListener("mousemove", (e) => {
    const pos = canvasMouse(e);
    world.mouse.x = pos.x;
    world.mouse.y = pos.y;
  });

  canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    focusCanvas();
    const pos = canvasMouse(e);
    world.mouse.x = pos.x;
    world.mouse.y = pos.y;
    world.mouse.down = true;
    if (world.state === STATE.MENU || world.state === STATE.GAME_OVER) startGame();
  });

  window.addEventListener("mouseup", () => {
    world.mouse.down = false;
  });
  window.addEventListener("pointerup", () => {
    world.mouse.down = false;
  });

  canvas.addEventListener("contextmenu", (e) => e.preventDefault());
}
