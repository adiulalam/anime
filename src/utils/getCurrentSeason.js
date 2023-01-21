export const getCurrentSeason = () => {
	// It's plus one because January is index 0
	const now = new Date();
	const month = now.getMonth() + 1;

	if (month > 3 && month < 6) {
		return "SPRING";
	}

	if (month > 6 && month < 9) {
		return "SUMMER";
	}

	if (month > 9 && month < 12) {
		return "FALL";
	}

	if (month >= 1 && month < 3) {
		return "WINTER";
	}

	const day = now.getDate();
	if (month === 3) {
		return day < 22 ? "WINTER" : "SPRING";
	}

	if (month === 6) {
		return day < 22 ? "SPRING" : "SUMMER";
	}

	if (month === 9) {
		return day < 22 ? "SUMMER" : "FALL";
	}

	if (month === 12) {
		return day < 22 ? "FALL" : "WINTER";
	} else {
		console.error("Unable to calculate current season");
		return "WINTER";
	}
};
