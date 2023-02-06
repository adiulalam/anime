import { getCurrentSeason } from "./getCurrentSeason";

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

export const carouselMap = {
	trending: {
		title: "Trending Now",
		sort: "TRENDING_DESC",
		filter: {},
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 3000,
			cssEase: "linear",
		},
	},
	popular: {
		title: "Most Popular",
		sort: "POPULARITY_DESC",
		filter: {},
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 2000,
			cssEase: "linear",
		},
	},
	rating: {
		title: "Highest Rated",
		sort: "SCORE_DESC",
		filter: {},
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 3000,
		},
	},
	favourite: {
		title: "Most Favourite",
		sort: "FAVOURITES_DESC",
		filter: {},
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 2000,
		},
	},
	upcoming: {
		title: "Top Upcoming",
		sort: "POPULARITY_DESC",
		filter: { status: "NOT_YET_RELEASED" },
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 4000,
			cssEase: "linear",
		},
	},
	year: {
		title: "Top Anime This Year",
		sort: "SCORE_DESC",
		filter: { seasonYear: new Date().getFullYear() },
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 4000,
		},
	},
	seasonal: {
		title: "Top Anime This Season",
		sort: "SCORE_DESC",
		filter: { seasonYear: new Date().getFullYear(), season: `${getCurrentSeason()}` },
		moreSettings: {
			speed: 1000,
			autoplaySpeed: 5000,
			cssEase: "linear",
		},
	},
};

export const filterMap = {
	selected: {
		filterArrayKeys: ["a", "b", "c", "d", "e", "f", "g", "h"],
		filterArrayMap: { a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H" },
	},
};
