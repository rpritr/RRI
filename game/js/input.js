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
	window.addEventListener("keydown", (event) => {
		const key = normalizeKey(event.key.toLowerCase());
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
