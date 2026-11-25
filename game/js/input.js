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
	function toggleFullscreen() {
		const isFullscreen =
			document.fullscreenElement === world.canvas ||
			document.webkitFullscreenElement === world.canvas;
		let fullscreenRequest;

		if (isFullscreen) {
			fullscreenRequest =
				document.exitFullscreen?.() ||
				document.webkitExitFullscreen?.();
		} else if (typeof world.canvas.requestFullscreen === "function") {
			fullscreenRequest = world.canvas.requestFullscreen();
		} else if (typeof world.canvas.webkitRequestFullscreen === "function") {
			fullscreenRequest = world.canvas.webkitRequestFullscreen();
		} else {
			console.error("Fullscreen is not supported by this browser.");
			return;
		}

		fullscreenRequest?.catch?.((error) => {
			console.error("Could not toggle canvas fullscreen.", error);
		});
	}

	const fullscreenButton = document.getElementById("fullscreen-button");
	fullscreenButton?.addEventListener("click", toggleFullscreen);

	function updateFullscreenButton() {
		if (!fullscreenButton) return;
		const isFullscreen =
			document.fullscreenElement === world.canvas ||
			document.webkitFullscreenElement === world.canvas;
		fullscreenButton.textContent =
			isFullscreen
				? "Zapri celozaslonsko"
				: "Celozaslonsko";
	}

	document.addEventListener("fullscreenchange", updateFullscreenButton);
	document.addEventListener("webkitfullscreenchange", updateFullscreenButton);

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
		if (key === "f" && !event.repeat) {
			event.preventDefault();
			toggleFullscreen();
		}

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
