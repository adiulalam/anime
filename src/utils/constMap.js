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
	genre: {
		filterArrayKeys: [
			"Action",
			"Adventure",
			"Comedy",
			"Drama",
			"Ecchi",
			"Fantasy",
			"Horror",
			"Mahou Shoujo",
			"Mecha",
			"Music",
			"Mystery",
			"Psychological",
			"Romance",
			"Sci-Fi",
			"Slice of Life",
			"Sports",
			"Supernatural",
			"Thriller",
		],
	},
	tags: {
		filterArrayKeys: [
			"4-koma",
			"Achromatic",
			"Achronological Order",
			"Acting",
			"Adoption",
			"Advertisement",
			"Afterlife",
			"Age Gap",
			"Age Regression",
			"Agender",
			"Agriculture",
			"Airsoft",
			"Alchemy",
			"Aliens",
			"Alternate Universe",
			"American Football",
			"Amnesia",
			"Anachronism",
			"Angels",
			"Animals",
			"Anthology",
			"Anthropomorphism",
			"Anti-Hero",
			"Archery",
			"Artificial Intelligence",
			"Asexual",
			"Assassins",
			"Astronomy",
			"Athletics",
			"Augmented Reality",
			"Autobiographical",
			"Aviation",
			"Badminton",
			"Band",
			"Bar",
			"Baseball",
			"Basketball",
			"Battle Royale",
			"Biographical",
			"Bisexual",
			"Body Horror",
			"Body Swapping",
			"Boxing",
			"Boys' Love",
			"Bullying",
			"Butler",
			"Calligraphy",
			"Cannibalism",
			"Card Battle",
			"Cars",
			"Centaur",
			"CGI",
			"Cheerleading",
			"Chibi",
			"Chimera",
			"Chuunibyou",
			"Circus",
			"Classic Literature",
			"Clone",
			"College",
			"Coming of Age",
			"Conspiracy",
			"Cosmic Horror",
			"Cosplay",
			"Crime",
			"Crossdressing",
			"Crossover",
			"Cult",
			"Cultivation",
			"Cute Boys Doing Cute Things",
			"Cute Girls Doing Cute Things",
			"Cyberpunk",
			"Cyborg",
			"Cycling",
			"Dancing",
			"Death Game",
			"Delinquents",
			"Demons",
			"Denpa",
			"Detective",
			"Dinosaurs",
			"Disability",
			"Dissociative Identities",
			"Dragons",
			"Drawing",
			"Drugs",
			"Dullahan",
			"Dungeon",
			"Dystopian",
			"E-Sports",
			"Economics",
			"Educational",
			"Elf",
			"Ensemble Cast",
			"Environmental",
			"Episodic",
			"Ero Guro",
			"Espionage",
			"Fairy Tale",
			"Family Life",
			"Fashion",
			"Female Harem",
			"Female Protagonist",
			"Fencing",
			"Firefighters",
			"Fishing",
			"Fitness",
			"Flash",
			"Food",
			"Football",
			"Foreign",
			"Found Family",
			"Fugitive",
			"Full CGI",
			"Full Color",
			"Gambling",
			"Gangs",
			"Gender Bending",
			"Ghost",
			"Go",
			"Goblin",
			"Gods",
			"Golf",
			"Gore",
			"Guns",
			"Gyaru",
			"Handball",
			"Henshin",
			"Heterosexual",
			"Hikikomori",
			"Historical",
			"Homeless",
			"Ice Skating",
			"Idol",
			"Isekai",
			"Iyashikei",
			"Josei",
			"Judo",
			"Kaiju",
			"Karuta",
			"Kemonomimi",
			"Kids",
			"Kuudere",
			"Lacrosse",
			"Language Barrier",
			"LGBTQ+ Themes",
			"Lost Civilization",
			"Love Triangle",
			"Mafia",
			"Magic",
			"Mahjong",
			"Maids",
			"Makeup",
			"Male Harem",
			"Male Protagonist",
			"Martial Arts",
			"Medicine",
			"Memory Manipulation",
			"Mermaid",
			"Meta",
			"Military",
			"Mixed Gender Harem",
			"Monster Boy",
			"Monster Girl",
			"Mopeds",
			"Motorcycles",
			"Musical",
			"Mythology",
			"Necromancy",
			"Nekomimi",
			"Ninja",
			"No Dialogue",
			"Noir",
			"Non-fiction",
			"Nudity",
			"Nun",
			"Office Lady",
			"Oiran",
			"Ojou-sama",
			"Orphan",
			"Otaku Culture",
			"Outdoor",
			"Pandemic",
			"Parkour",
			"Parody",
			"Philosophy",
			"Photography",
			"Pirates",
			"Poker",
			"Police",
			"Politics",
			"Post-Apocalyptic",
			"POV",
			"Primarily Adult Cast",
			"Primarily Child Cast",
			"Primarily Female Cast",
			"Primarily Male Cast",
			"Primarily Teen Cast",
			"Puppetry",
			"Rakugo",
			"Real Robot",
			"Rehabilitation",
			"Reincarnation",
			"Religion",
			"Revenge",
			"Robots",
			"Rotoscoping",
			"Rugby",
			"Rural",
			"Samurai",
			"Satire",
			"School",
			"School Club",
			"Scuba Diving",
			"Seinen",
			"Shapeshifting",
			"Ships",
			"Shogi",
			"Shoujo",
			"Shounen",
			"Shrine Maiden",
			"Skateboarding",
			"Skeleton",
			"Slapstick",
			"Slavery",
			"Software Development",
			"Space",
			"Space Opera",
			"Spearplay",
			"Steampunk",
			"Stop Motion",
			"Succubus",
			"Suicide",
			"Sumo",
			"Super Power",
			"Super Robot",
			"Superhero",
			"Surfing",
			"Surreal Comedy",
			"Survival",
			"Swimming",
			"Swordplay",
			"Table Tennis",
			"Tanks",
			"Tanned Skin",
			"Teacher",
			"Teens' Love",
			"Tennis",
			"Terrorism",
			"Time Manipulation",
			"Time Skip",
			"Tokusatsu",
			"Tomboy",
			"Torture",
			"Tragedy",
			"Trains",
			"Transgender",
			"Travel",
			"Triads",
			"Tsundere",
			"Twins",
			"Urban",
			"Urban Fantasy",
			"Vampire",
			"Video Games",
			"Vikings",
			"Villainess",
			"Virtual World",
			"Volleyball",
			"VTuber",
			"War",
			"Werewolf",
			"Witch",
			"Work",
			"Wrestling",
			"Writing",
			"Wuxia",
			"Yakuza",
			"Yandere",
			"Youkai",
			"Yuri",
			"Zombie",
		],
	},
	status: {
		filterArrayKeys: ["RELEASING", "FINISHED", "NOT_YET_RELEASED", "CANCELLED"],
		filterArrayMap: {
			RELEASING: "Airing",
			FINISHED: "Finished",
			NOT_YET_RELEASED: "Not Yet Aired",
			CANCELLED: "Cancelled",
		},
	},
	format: {
		filterArrayKeys: ["TV", "TV_SHORT", "MOVIE", "SPECIAL", "OVA", "ONA"],
		filterArrayMap: {
			TV: "TV Shows",
			TV_SHORT: "TV Short",
			MOVIE: "Movie",
			SPECIAL: "Special",
			OVA: "OVA",
			ONA: "ONA",
		},
	},
	season: {
		filterArrayKeys: ["WINTER", "SPRING", "SUMMER", "FALL"],
		filterArrayMap: {
			WINTER: "Winter",
			SPRING: "Spring",
			SUMMER: "Summer",
			FALL: "Fall",
		},
	},
	year: {
		filterArrayKeys: Array(new Date().getFullYear() + 2 - (new Date().getFullYear() - 60) + 1)
			.fill(new Date().getFullYear() - 60)
			.map((year, index) => year + index),
	},
};
