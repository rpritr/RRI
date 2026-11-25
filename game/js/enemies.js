import {
	ENEMY_SIZE,
	ENEMY_SPAWN_PADDING,
	ENEMY_TYPES,
	walls,
} from "./config.js";
import { aabbOverlap } from "./collision.js";
import { damagePlayer } from "./player.js";
import { world } from "./world.js";

const ENEMY_WALK_FRAME_DURATION = 0.1;

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

		const type = Math.random() < 2 / 3 ? "walker" : "runner";
		const stats = ENEMY_TYPES[type];
		enemies.push({
			...candidate,
			type,
			...stats,
			maxHp: stats.hp,
			facingRight: true,
			walkFrame: 0,
			walkTimer: 0,
		});
		if (enemies.length === enemyCount) break;
	}

	if (enemies.length < enemyCount) {
		throw new RangeError(`Not enough free edge positions to spawn wave ${n}.`);
	}

	world.wave = n;
	world.enemies = enemies;
}

export function updateEnemies(dt) {
	const { enemies, player } = world;
	const playerX = player.x + player.w / 2;
	const playerY = player.y + player.h / 2;

	for (const enemy of enemies) {
		const dx = playerX - (enemy.x + enemy.w / 2);
		const dy = playerY - (enemy.y + enemy.h / 2);
		if (dx !== 0) enemy.facingRight = dx > 0;
		const distance = Math.hypot(dx, dy);
		if (distance === 0) {
			enemy.walkFrame = 0;
			enemy.walkTimer = 0;
			continue;
		}

		const previousX = enemy.x;
		const previousY = enemy.y;
		const step = Math.min(enemy.speed * dt, distance);
		const moveX = (dx / distance) * step;
		enemy.x += moveX;
		const xHitsPlayer = aabbOverlap(enemy, player);
		if (xHitsPlayer) damagePlayer();
		if (walls.some((wall) => aabbOverlap(enemy, wall)) || xHitsPlayer) {
			enemy.x -= moveX;
		}

		const moveY = (dy / distance) * step;
		enemy.y += moveY;
		const yHitsPlayer = aabbOverlap(enemy, player);
		if (yHitsPlayer) damagePlayer();
		if (walls.some((wall) => aabbOverlap(enemy, wall)) || yHitsPlayer) {
			enemy.y -= moveY;
		}

		enemy.x = Math.max(0, Math.min(world.W - enemy.w, enemy.x));
		enemy.y = Math.max(0, Math.min(world.H - enemy.h, enemy.y));

		if (enemy.x !== previousX || enemy.y !== previousY) {
			enemy.walkTimer =
				(enemy.walkTimer + dt) % (ENEMY_WALK_FRAME_DURATION * 10);
			enemy.walkFrame = Math.floor(
				enemy.walkTimer / ENEMY_WALK_FRAME_DURATION,
			);
		} else {
			enemy.walkTimer = 0;
			enemy.walkFrame = 0;
		}
	}
}
