import {
	BULLET_SIZE,
	BULLET_SPEED,
	GAME_STATES,
	walls,
} from "./config.js";
import { aabbOverlap } from "./collision.js";
import { world } from "./world.js";

const SHOT_COOLDOWN = 0.25;
const MIN_SHOT_DISTANCE = 0.001;

export function shootBullet() {
	const { player, mouse, bullets } = world;
	if (world.state !== GAME_STATES.PLAYING || player.shotTimer > 0) return;

	const centerX = player.x + player.w / 2;
	const centerY = player.y + player.h / 2;
	const dx = mouse.x - centerX;
	const dy = mouse.y - centerY;
	const distance = Math.hypot(dx, dy);

	if (distance < MIN_SHOT_DISTANCE) return;

	const vx = dx / distance;
	const vy = dy / distance;
	bullets.push({
		x: centerX - BULLET_SIZE / 2,
		y: centerY - BULLET_SIZE / 2,
		w: BULLET_SIZE,
		h: BULLET_SIZE,
		vx,
		vy,
	});
	player.shotTimer = SHOT_COOLDOWN;
}

export function updateBullets(dt) {
	const { player, bullets, W, H } = world;
	player.shotTimer = Math.max(0, player.shotTimer - dt);

	for (let i = bullets.length - 1; i >= 0; i--) {
		const bullet = bullets[i];
		bullet.x += bullet.vx * BULLET_SPEED * dt;
		bullet.y += bullet.vy * BULLET_SPEED * dt;

		const outsideCanvas =
			bullet.x + bullet.w < 0 ||
			bullet.x > W ||
			bullet.y + bullet.h < 0 ||
			bullet.y > H;
		const hitWall = walls.some((wall) => aabbOverlap(bullet, wall));

		if (outsideCanvas || hitWall) {
			bullets.splice(i, 1);
			continue;
		}

		const hitEnemy = world.enemies.find((enemy) => aabbOverlap(bullet, enemy));
		if (hitEnemy) {
			hitEnemy.flashRed = true;
			bullets.splice(i, 1);
		}
	}
}
