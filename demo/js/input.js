/**
 * Vhod (tedna 1–2 in 5). Poslušalci samo zapišejo stanje tipk in miške.
 */
import { world } from "./world.js";

function dirFromKey(key) {
  const k = key.toLowerCase();
  if (k === "w" || k === "arrowup") return "w";
  if (k === "a" || k === "arrowleft") return "a";
  if (k === "s" || k === "arrowdown") return "s";
  if (k === "d" || k === "arrowright") return "d";
  return null;
}

function mouseOnCanvas(e) {
  const canvas = world.canvas;
  const rect = canvas.getBoundingClientRect();
  world.mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
  world.mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
}

export function bindInput(resetGame) {
  const canvas = world.canvas;

  window.addEventListener("keydown", (e) => {
    const dir = dirFromKey(e.key);
    if (dir) {
      world.keys[dir] = true;
      e.preventDefault();
      if (world.state === "MENU" || world.state === "GAME_OVER") resetGame();
      return;
    }
    if (e.key === "Enter" && !e.repeat && (world.state === "MENU" || world.state === "GAME_OVER")) {
      resetGame();
    }
    if (e.key.toLowerCase() === "r" && !e.repeat && world.state !== "MENU") {
      resetGame();
    }
  });

  window.addEventListener("keyup", (e) => {
    const dir = dirFromKey(e.key);
    if (dir) world.keys[dir] = false;
  });

  canvas.addEventListener("mousemove", mouseOnCanvas);
  canvas.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    mouseOnCanvas(e);
    world.mouse.down = true;
    if (world.state === "MENU" || world.state === "GAME_OVER") resetGame();
  });
  window.addEventListener("mouseup", () => {
    world.mouse.down = false;
  });
}
