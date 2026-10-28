import { GAME_STATES } from "./config.js";

// --- Platno -----------------------------------------------------------------
const canvas = document.getElementById("game");

// --- Skupno stanje ----------------------------------------------------------
export const world = {
	canvas,
	ctx: canvas.getContext("2d"),
	W: canvas.width,
	H: canvas.height,
	state: GAME_STATES.PLAYING,
	// Igralca ustvari glavna datoteka game.js.
	player: null,
	// true = tipka je trenutno pritisnjena.
	keys: { w: false, a: false, s: false, d: false, shift: false },
};
