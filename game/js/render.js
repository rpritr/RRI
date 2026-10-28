import { world } from "./world.js";

// --- Risanje ----------------------------------------------------------------
export function draw() {
	const { ctx, W, H, player } = world;
	// Počisti platno (temno ozadje — dopolnjuje CSS).
	ctx.fillStyle = "#1a1d23";
	ctx.fillRect(0, 0, W, H);

	// Igralec.
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x, player.y, player.w, player.h);

	// Majhen "obraz" / smer — samo vizualni namig (opcijsko).
	ctx.fillStyle = "#93c5fd";
	ctx.fillRect(player.x + 8, player.y + 8, 6, 6);
	ctx.fillRect(player.x + 18, player.y + 8, 6, 6);
}
