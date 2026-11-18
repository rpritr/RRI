import { GAME_STATES, walls } from "./config.js";
import { world } from "./world.js";

// --- Risanje ----------------------------------------------------------------
export function draw() {
	const { ctx, W, H, player, enemies, bullets } = world;
	// Počisti platno (temno ozadje — dopolnjuje CSS).
	ctx.fillStyle = "#1a1d23";
	ctx.fillRect(0, 0, W, H);

	// Zidovi.
	ctx.fillStyle = "#6b7280";
	for (const wall of walls) {
		ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
	}

	// Sovražniki.
	for (const enemy of enemies) {
		ctx.fillStyle = enemy.flashRed ? "#ef4444" : enemy.color;
		ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
		enemy.flashRed = false;
	}

	// Projektili.
	ctx.fillStyle = "#facc15";
	for (const bullet of bullets) {
		ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
	}

	// Igralec.
	ctx.fillStyle = player.flashRed ? "#ef4444" : player.color;
	ctx.fillRect(player.x, player.y, player.w, player.h);
	player.flashRed = false;

	// Majhen "obraz" / smer — samo vizualni namig (opcijsko).
	ctx.fillStyle = "#93c5fd";
	ctx.fillRect(player.x + 8, player.y + 8, 6, 6);
	ctx.fillRect(player.x + 18, player.y + 8, 6, 6);

	if (
		world.state === GAME_STATES.GAME_OVER ||
		world.state === GAME_STATES.PAUSED
	) {
		const title =
			world.state === GAME_STATES.PAUSED ? "Paused" : "Game Over";
		const message =
			world.state === GAME_STATES.PAUSED
				? "Press P to resume"
				: "Press R to restart";
		ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
		ctx.fillRect(0, 0, W, H);
		ctx.fillStyle = "#ffffff";
		ctx.textAlign = "center";
		ctx.font = "bold 32px sans-serif";
		ctx.fillText(title, W / 2, H / 2);
		ctx.font = "16px sans-serif";
		ctx.fillText(message, W / 2, H / 2 + 32);
	}

	const healthBarWidth = 120;
	const healthRatio = Math.max(0, Math.min(1, player.hp / player.maxHp));
	ctx.fillStyle = "#ffffff";
	ctx.textAlign = "left";
	ctx.font = "16px sans-serif";
	ctx.fillText(`HP: ${player.hp} / ${player.maxHp}`, 12, 24);
	ctx.fillStyle = "#ef4444";
	ctx.fillRect(12, 32, healthBarWidth, 10);
	ctx.fillStyle = "#22c55e";
	ctx.fillRect(12, 32, healthBarWidth * healthRatio, 10);
}
