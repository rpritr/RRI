import { GAME_STATES, walls } from "./config.js";
import { world } from "./world.js";

const PLAYER_SPRITE_FRAMES = {
	down: [
		{ x: 144, y: 86, w: 141, h: 203 },
		{ x: 362, y: 86, w: 141, h: 211 },
		{ x: 566, y: 87, w: 142, h: 203 },
		{ x: 768, y: 87, w: 141, h: 211 },
	],
	right: [
		{ x: 143, y: 338, w: 159, h: 185 },
		{ x: 349, y: 334, w: 158, h: 192 },
		{ x: 547, y: 335, w: 159, h: 185 },
		{ x: 746, y: 332, w: 159, h: 199 },
	],
	left: [
		{ x: 132, y: 554, w: 159, h: 185 },
		{ x: 334, y: 553, w: 158, h: 192 },
		{ x: 547, y: 555, w: 159, h: 185 },
		{ x: 735, y: 550, w: 160, h: 199 },
	],
	up: [
		{ x: 142, y: 756, w: 158, h: 185 },
		{ x: 339, y: 754, w: 158, h: 192 },
		{ x: 547, y: 758, w: 159, h: 185 },
		{ x: 736, y: 753, w: 158, h: 192 },
	],
};

let playerSprite = null;
const playerSpriteImage = new Image();
playerSpriteImage.addEventListener("load", () => {
	const canvas = document.createElement("canvas");
	canvas.width = playerSpriteImage.naturalWidth;
	canvas.height = playerSpriteImage.naturalHeight;
	const spriteContext = canvas.getContext("2d", { willReadFrequently: true });
	if (!spriteContext) {
		console.error("Could not create the player sprite canvas context.");
		return;
	}

	spriteContext.drawImage(playerSpriteImage, 0, 0);
	const imageData = spriteContext.getImageData(0, 0, canvas.width, canvas.height);
	// The sprite sheet uses a solid #979797 background instead of transparency.
	for (let i = 0; i < imageData.data.length; i += 4) {
		if (
			imageData.data[i] === 151 &&
			imageData.data[i + 1] === 151 &&
			imageData.data[i + 2] === 151
		) {
			imageData.data[i + 3] = 0;
		}
	}
	spriteContext.putImageData(imageData, 0, 0);
	playerSprite = canvas;
});
playerSpriteImage.addEventListener("error", () => {
	console.error(`Could not load player sprite: ${playerSpriteImage.src}`);
});
playerSpriteImage.src = new URL("../assets/player.png", import.meta.url).href;

function loadEnemyWalkFrames(character) {
	return Array.from({ length: 10 }, (_, index) => {
		const sprite = new Image();
		sprite.addEventListener("error", () => {
			console.error(`Could not load enemy sprite: ${sprite.src}`);
		});
		sprite.src = new URL(
			`../assets/enemy/${character}/Walk (${index + 1}).png`,
			import.meta.url,
		).href;
		return sprite;
	});
}

const enemySprites = {
	walker: loadEnemyWalkFrames("male"),
	runner: loadEnemyWalkFrames("female"),
};

let backgroundPattern = null;
const backgroundTexture = new Image();
backgroundTexture.addEventListener("load", () => {
	backgroundPattern = world.ctx.createPattern(backgroundTexture, "repeat");
	if (backgroundPattern) {
		const scale = Math.max(
			world.W / backgroundTexture.naturalWidth,
			world.H / backgroundTexture.naturalHeight,
		);
		backgroundPattern.setTransform(
			new DOMMatrix([
				scale,
				0,
				0,
				scale,
				(world.W - backgroundTexture.naturalWidth * scale) / 2,
				(world.H - backgroundTexture.naturalHeight * scale) / 2,
			]),
		);
	} else {
		console.error("Could not create the background texture pattern.");
	}
});
backgroundTexture.addEventListener("error", () => {
	console.error(`Could not load background texture: ${backgroundTexture.src}`);
});
backgroundTexture.src = new URL("../assets/bg.jpg", import.meta.url).href;

let wallPattern = null;
const wallTexture = new Image();
wallTexture.addEventListener("load", () => {
	wallPattern = world.ctx.createPattern(wallTexture, "repeat");
	if (wallPattern) {
		wallPattern.setTransform(new DOMMatrix().scale(0.15));
	} else {
		console.error("Could not create the wall texture pattern.");
	}
});
wallTexture.addEventListener("error", () => {
	console.error(`Could not load wall texture: ${wallTexture.src}`);
});
wallTexture.src = new URL("../assets/wall.jpg", import.meta.url).href;

// --- Risanje ----------------------------------------------------------------
export function draw() {
	const { ctx, W, H, player, enemies, bullets } = world;
	// Počisti platno (temno ozadje — dopolnjuje CSS).
	ctx.fillStyle = backgroundPattern ?? "#1a1d23";
	ctx.fillRect(0, 0, W, H);

	// Zidovi.
	ctx.fillStyle = wallPattern ?? "#6b7280";
	for (const wall of walls) {
		ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
	}

	// Sovražniki.
	for (const enemy of enemies) {
		const sprite = enemySprites[enemy.type]?.[enemy.walkFrame];
		if (sprite?.complete && sprite.naturalWidth > 0 && !enemy.flashRed) {
			const drawHeight = enemy.h;
			const drawWidth =
				(sprite.naturalWidth / sprite.naturalHeight) * drawHeight;
			ctx.save();
			ctx.translate(enemy.x + enemy.w / 2, 0);
			ctx.scale(enemy.facingRight ? 1 : -1, 1);
			ctx.drawImage(
				sprite,
				-drawWidth / 2,
				enemy.y,
				drawWidth,
				drawHeight,
			);
			ctx.restore();
		} else {
			ctx.fillStyle = enemy.flashRed ? "#ef4444" : enemy.color;
			ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
		}
		enemy.flashRed = false;

		const healthRatio =
			enemy.maxHp > 0
				? Math.max(0, Math.min(1, enemy.hp / enemy.maxHp))
				: 0;
		const barY = enemy.y >= 8 ? enemy.y - 5 : enemy.y + enemy.h + 2;
		ctx.fillStyle = "#ef4444";
		ctx.fillRect(enemy.x + enemy.w / 2 - 16, barY, 32, 3);
		ctx.fillStyle = "#22c55e";
		ctx.fillRect(enemy.x + enemy.w / 2 - 16, barY, 32 * healthRatio, 3);
	}

	// Projektili.
	ctx.fillStyle = "#1e3a8a";
	for (const bullet of bullets) {
		ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
	}

	// Igralec.
	if (playerSprite && !player.flashRed) {
		const frame = PLAYER_SPRITE_FRAMES[player.facing][player.frame];
		const drawHeight = player.h;
		const drawWidth = (frame.w / frame.h) * drawHeight;
		ctx.save();
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(
			playerSprite,
			frame.x,
			frame.y,
			frame.w,
			frame.h,
			player.x + (player.w - drawWidth) / 2,
			player.y,
			drawWidth,
			drawHeight,
		);
		ctx.restore();
	} else {
		ctx.fillStyle = player.flashRed ? "#ef4444" : player.color;
		ctx.fillRect(player.x, player.y, player.w, player.h);
		if (!playerSprite) {
			ctx.fillStyle = "#93c5fd";
			ctx.fillRect(player.x + 8, player.y + 8, 6, 6);
			ctx.fillRect(player.x + 18, player.y + 8, 6, 6);
		}
	}
	player.flashRed = false;

	if (
		world.state === GAME_STATES.GAME_OVER ||
		world.state === GAME_STATES.PAUSED
	) {
		const title =
			world.state === GAME_STATES.PAUSED ? "Paused" : "Game Over";
		const message =
			world.state === GAME_STATES.PAUSED
				? "Press P to resume"
				: "Press R to restart";
		ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
		ctx.fillRect(0, 0, W, H);
		ctx.fillStyle = "#ffffff";
		ctx.textAlign = "center";
		ctx.font = "bold 32px sans-serif";
		ctx.fillText(title, W / 2, H / 2);
		ctx.font = "16px sans-serif";
		ctx.fillText(message, W / 2, H / 2 + 32);
	}

	const healthBarWidth = 120;
	const healthRatio = Math.max(0, Math.min(1, player.hp / player.maxHp));
	ctx.fillStyle = "#ffffff";
	ctx.textAlign = "left";
	ctx.font = "16px sans-serif";
	ctx.fillText(`HP: ${player.hp} / ${player.maxHp}`, 12, 24);
	ctx.fillStyle = "#ef4444";
	ctx.fillRect(12, 32, healthBarWidth, 10);
	ctx.fillStyle = "#22c55e";
	ctx.fillRect(12, 32, healthBarWidth * healthRatio, 10);

	ctx.fillStyle = "#ffffff";
	ctx.textAlign = "right";
	ctx.fillText(`Score: ${world.score}`, W - 12, 24);
	ctx.fillText(`Wave: ${world.wave}`, W - 12, 46);
}
