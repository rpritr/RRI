/**
 * Risanje: ozadje, ovire, entitete, HUD, meni in game over.
 */
import { walls } from "./config.js";
import { world } from "./world.js";

function drawCenter(title, lines) {
  const ctx = world.ctx;
  ctx.fillStyle = "rgba(15, 17, 21, 0.72)";
  ctx.fillRect(0, 0, world.W, world.H);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#e8eaed";
  ctx.font = "700 42px system-ui, sans-serif";
  ctx.fillText(title, world.W / 2, world.H / 2 - 70);
  ctx.font = "18px system-ui, sans-serif";
  ctx.fillStyle = "#9aa0a6";
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], world.W / 2, world.H / 2 - 10 + i * 28);
  }
  ctx.textAlign = "left";
}

export function draw() {
  const ctx = world.ctx;
  ctx.fillStyle = "#1a1d23";
  ctx.fillRect(0, 0, world.W, world.H);

  if (world.state === "MENU") {
    drawCenter("Zombie Survival", [
      "WASD ali puščice — premik",
      "miška — strel",
      "ENTER ali klik — začni",
    ]);
    return;
  }

  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    ctx.fillStyle = "#5c6370";
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  }

  for (let i = 0; i < world.enemies.length; i++) {
    const e = world.enemies[i];
    ctx.fillStyle = e.color;
    ctx.fillRect(e.x, e.y, e.w, e.h);
    if (e.maxHp > 1) {
      const ratio = e.hp / e.maxHp;
      ctx.fillStyle = "#111";
      ctx.fillRect(e.x, e.y - 6, e.w, 4);
      ctx.fillStyle = "#86efac";
      ctx.fillRect(e.x, e.y - 6, e.w * ratio, 4);
    }
  }

  const player = world.player;
  ctx.fillStyle = player.hurtTimer > 0 ? "#fecaca" : player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  ctx.fillStyle = "#fbbf24";
  for (let i = 0; i < world.bullets.length; i++) {
    const b = world.bullets[i];
    ctx.fillRect(b.x, b.y, b.w, b.h);
  }

  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.font = "16px system-ui, sans-serif";

  ctx.fillStyle = "rgba(0,0,0,0.45)";
  ctx.fillRect(12, 12, 220, 74);

  ctx.fillStyle = "#e8eaed";
  ctx.fillText("HP", 24, 20);
  const barX = 58;
  const barY = 22;
  const barW = 158;
  const barH = 14;
  const hpRatio = player.hp / player.maxHp;
  ctx.fillStyle = "#2a2e35";
  ctx.fillRect(barX, barY, barW, barH);
  ctx.fillStyle = hpRatio > 0.4 ? "#4ade80" : "#f87171";
  ctx.fillRect(barX, barY, barW * hpRatio, barH);

  ctx.fillStyle = "#e8eaed";
  ctx.fillText("Točke " + world.score, 24, 44);
  ctx.fillText("Val " + world.wave, 24, 62);

  if (world.state === "GAME_OVER") {
    drawCenter("Konec igre", [
      "Točke " + world.score + "    Val " + world.wave,
      "R ali ENTER — znova",
    ]);
  }
}
