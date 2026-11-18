/**
 * P16 — starter igra (teden 1)
 * HTML Canvas + vanilla JS, brez knjižnic.
 *
 * Cilj: igralec (moder pravokotnik) + WASD + zanka igre.
 * Teden 2+: tukaj dodamo sovražnika in trke.
 */
import { GAME_STATES } from "./config.js";
import { updateBullets } from "./bullets.js";
import { createEnemies } from "./enemies.js";
import { bindInput } from "./input.js";
import { createPlayer, updatePlayer } from "./player.js";
import { draw } from "./render.js";
import { world } from "./world.js";

let lastTime = 0;

export function resetGame() {
	world.player = createPlayer();
	world.enemies = createEnemies();
	world.bullets.length = 0;
	world.keys = { w: false, a: false, s: false, d: false, shift: false };
	world.state = GAME_STATES.PLAYING;
	lastTime = 0;
}

resetGame();
bindInput();

window.addEventListener("keydown", (event) => {
	if (event.key.toLowerCase() === "r" && !event.repeat) {
		resetGame();
	}
});

// --- Zanka igre (delta time) -------------------------------------------------
/**
 * Glavna zanka: requestAnimationFrame kliče to funkcijo vsak frejm.
 * @param {number} timestamp - Čas iz rAF v milisekundah.
 */
function update(timestamp) {
	// Prvi frejm: nastavi lastTime, da dt ni ogromen.
	if (!lastTime) lastTime = timestamp;

	// dt v sekundah; omejimo ga, da ob vrnitvi iz zavihka ne "skoči".
	let dt = (timestamp - lastTime) / 1000;
	lastTime = timestamp;
	dt = Math.min(dt, 0.05); // Največji skok ustreza približno 20 FPS.

	if (world.state === GAME_STATES.PLAYING) {
		updatePlayer(dt);
		if (world.state === GAME_STATES.PLAYING) {
			updateBullets(dt);
		}
	}
	// Kasneje (teden 4+): tukaj posodobiš tudi sovražnike.
	draw();
	requestAnimationFrame(update);
}

// --- Začetek ---------------------------------------------------------------
requestAnimationFrame(update);
