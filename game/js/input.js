import { GAME_STATES } from "./config.js";
import { shootBullet } from "./bullets.js";
import { world } from "./world.js";

function normalizeKey(key) {
	switch (key) {
		case "arrowup":
			return "w";
		case "arrowleft":
			return "a";
		case "arrowdown":
			return "s";
		case "arrowright":
			return "d";
		default:
			return key;
	}
}

// --- Tipkovnica -------------------------------------------------------------
export function bindInput() {
	function updateMousePosition(event) {
		const rect = world.canvas.getBoundingClientRect();
		world.mouse.x =
			(event.clientX - rect.left - world.canvas.clientLeft) *
			(world.canvas.width / world.canvas.clientWidth);
		world.mouse.y =
			(event.clientY - rect.top - world.canvas.clientTop) *
			(world.canvas.height / world.canvas.clientHeight);
	}

	world.canvas.addEventListener("mousemove", updateMousePosition);
	world.canvas.addEventListener("click", (event) => {
		updateMousePosition(event);
		shootBullet();
	});

	window.addEventListener("keydown", (event) => {
		const key = normalizeKey(event.key.toLowerCase());
		if (key === "p" && !event.repeat) {
			if (world.state === GAME_STATES.PLAYING) {
				world.state = GAME_STATES.PAUSED;
			} else if (world.state === GAME_STATES.PAUSED) {
				world.state = GAME_STATES.PLAYING;
			}
		}

		if (key in world.keys) {
			world.keys[key] = true;
			event.preventDefault(); // Prepreči drsenje strani pri tipkah.
		}
	});

	window.addEventListener("keyup", (event) => {
		const key = normalizeKey(event.key.toLowerCase());
		if (key in world.keys) {
			world.keys[key] = false;
		}
	});
}
