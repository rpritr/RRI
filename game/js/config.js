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

// Hitrost projektila v pikslih na sekundo.
export const BULLET_SPEED = 500;
export const BULLET_SIZE = 6;

export const walls = [
	{ x: 100, y: 100, w: 200, h: 24 },
	{ x: 450, y: 80, w: 24, h: 160 },
	{ x: 500, y: 300, w: 100, h: 20 },
];
