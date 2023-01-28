export const statusMap = {
	FINISHED: {
		name: "Finished",
		style: "bg-violet-400 dark:bg-violet-900",
	},
	RELEASING: {
		name: "Releasing",
		style: "bg-teal-400 dark:bg-teal-800",
	},
	NOT_YET_RELEASED: {
		name: "Not Released",
		style: "bg-indigo-400 dark:bg-indigo-800",
	},
	CANCELLED: {
		name: "Cancelled",
		style: "bg-pink-400 dark:bg-bg-pink-800",
	},
};

export const scoreColour = (score) =>
	score >= 80
		? "bg-green-400 dark:bg-green-900"
		: score >= 60 && score < 80
		? "bg-yellow-400 dark:bg-yellow-700"
		: score < 60
		? "bg-red-400 dark:bg-red-800"
		: "bg-gray-300 dark:bg-gray-800";

export const seasonalMap = {
	WINTER: "bg-sky-400 dark:bg-sky-900",
	SPRING: "bg-lime-400 dark:bg-lime-800",
	SUMMER: "bg-rose-500 dark:bg-rose-800",
	FALL: "bg-orange-400 dark:bg-orange-800",
};
