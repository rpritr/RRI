import { ENEMY_SIZE, ENEMY_SPAWN_PADDING, walls } from "./config.js";
import { aabbOverlap } from "./collision.js";
import { world } from "./world.js";

export function spawnWave(n) {
	if (!Number.isInteger(n) || n < 1) {
		throw new RangeError("Wave number must be a positive integer.");
	}

	const spawnPoints = [];
	for (
		let x = ENEMY_SPAWN_PADDING;
		x <= world.W - ENEMY_SIZE - ENEMY_SPAWN_PADDING;
		x += ENEMY_SPAWN_PADDING
	) {
		spawnPoints.push(
			{ x, y: ENEMY_SPAWN_PADDING },
			{ x, y: world.H - ENEMY_SIZE - ENEMY_SPAWN_PADDING },
		);
	}
	for (
		let y = ENEMY_SPAWN_PADDING;
		y <= world.H - ENEMY_SIZE - ENEMY_SPAWN_PADDING;
		y += ENEMY_SPAWN_PADDING
	) {
		spawnPoints.push(
			{ x: ENEMY_SPAWN_PADDING, y },
			{ x: world.W - ENEMY_SIZE - ENEMY_SPAWN_PADDING, y },
		);
	}

	const validSpawnPoints = spawnPoints.filter((position) => {
		const candidate = { ...position, w: ENEMY_SIZE, h: ENEMY_SIZE };
		return (
			!aabbOverlap(candidate, world.player) &&
			!walls.some((wall) => aabbOverlap(candidate, wall))
		);
	});

	for (let i = validSpawnPoints.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[validSpawnPoints[i], validSpawnPoints[j]] = [
			validSpawnPoints[j],
			validSpawnPoints[i],
		];
	}

	const enemies = [];
	const enemyCount =  n;
	for (const position of validSpawnPoints) {
		const candidate = { ...position, w: ENEMY_SIZE, h: ENEMY_SIZE };
		if (enemies.some((enemy) => aabbOverlap(candidate, enemy))) continue;

		enemies.push({
			...candidate,
			hp: 3,
			maxHp: 3,
			color: "#22c55e",
		});
		if (enemies.length === enemyCount) break;
	}

	if (enemies.length < enemyCount) {
		throw new RangeError(`Not enough free edge positions to spawn wave ${n}.`);
	}

	world.wave = n;
	world.enemies = enemies;
}
