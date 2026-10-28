// --- Stanja igre -----------------------------------------------------------
export const GAME_STATES = {
	MENU: "MENU",
	PAUSED: "PAUSED",
	PLAYING: "PLAYING",
	GAME_OVER: "GAME_OVER",
};

// --- Nastavitve igralca -----------------------------------------------------
// Hitrost v pikslih na sekundo (delta-time).
export const PLAYER_SPEED = 220;
// Množilnik hitrosti, ko je pritisnjen Shift.
export const SPRINT_MULTIPLIER = 1.6;
export const PLAYER_SIZE = 32;
// Modra barva igralca.
export const PLAYER_COLOR = "#3b82f6";
