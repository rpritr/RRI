import {
	PLAYER_COLOR,
	PLAYER_SIZE,
	PLAYER_SPEED,
	SPRINT_MULTIPLIER,
} from "./config.js";
import { moveWithWalls } from "./collision.js";
import { world } from "./world.js";

// --- Igralec ---------------------------------------------------------------
export function createPlayer() {
	return {
		x: world.W / 2 - PLAYER_SIZE / 2,
		y: world.H / 2 - PLAYER_SIZE / 2,
		w: PLAYER_SIZE,
		h: PLAYER_SIZE,
		speed: PLAYER_SPEED,
		color: PLAYER_COLOR,
		enemyCollision: false,
		flashRed: false,
		shotTimer: 0,
	};
}

// --- Posodobitev igralca ----------------------------------------------------
/**
 * Premakne igralca glede na WASD in ga omeji na rob platna.
 * @param {number} dt - Čas od zadnjega frejma v sekundah.
 */
export function updatePlayer(dt) {
	const { player, keys } = world;
	let dx = 0;
	let dy = 0;

	if (keys.w) dy -= 1;
	if (keys.s) dy += 1;
	if (keys.a) dx -= 1;
	if (keys.d) dx += 1;

	// Diagonalno premikanje: normaliziraj, da ni hitrejše.
	if (dx !== 0 || dy !== 0) {
		const length = Math.hypot(dx, dy);
		dx /= length;
		dy /= length;
	}

	const speedMultiplier = keys.shift ? SPRINT_MULTIPLIER : 1;
	const speed = player.speed * speedMultiplier;
	const hitEnemy = moveWithWalls(player, dx * speed * dt, dy * speed * dt);
	player.flashRed = hitEnemy && !player.enemyCollision;
	player.enemyCollision = hitEnemy;
	// Omejitev na platno (clamp).
	player.x = Math.max(0, Math.min(world.W - player.w, player.x));
	player.y = Math.max(0, Math.min(world.H - player.h, player.y));
}
