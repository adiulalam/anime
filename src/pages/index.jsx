import Switcher from "@/components/switcher";
import { Carousel } from "@/components/carousel";
import { getCurrentSeason } from "@/utils/getCurrentSeason";
const { data } = require("../data.json");

export default function Home() {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	// console.log(data);

	const carouselMap = {
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

	return (
		<div className="bg-white dark:bg-black overflow-x-auto">
			<Switcher />
			{Object.entries(data).map(([key, value], index) => (
				<Carousel
					data={value ?? []}
					title={carouselMap[key].title ?? ""}
					sort={carouselMap[key].sort ?? ""}
					moreSettings={carouselMap[key].moreSettings ?? {}}
					filter={carouselMap[key].filter ?? {}}
					key={index}
					index={index}
				/>
			))}
		</div>
	);
}
