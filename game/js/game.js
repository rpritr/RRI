/**
 * P16 — starter igra (teden 1)
 * HTML Canvas + vanilla JS, brez knjižnic.
 *
 * Cilj: igralec (moder pravokotnik) + WASD + zanka igre.
 * Teden 2+: tukaj dodamo sovražnika, trke, strele …
 */
import { bindInput } from "./input.js";
import { createPlayer, updatePlayer } from "./player.js";
import { draw } from "./render.js";
import { world } from "./world.js";

world.player = createPlayer();
bindInput();

let lastTime = 0;

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

	updatePlayer(dt);
	// Kasneje (teden 4+): tukaj posodobiš tudi sovražnike in strele.
	draw();
	requestAnimationFrame(update);
}

// --- Začetek ---------------------------------------------------------------
requestAnimationFrame(update);
