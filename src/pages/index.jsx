import Switcher from "@/components/switcher";
import { Carousel } from "@/components/carousel";
import { carouselMap } from "@/utils/constMap";
const { data } = require("../data.json");

export default function Home() {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	// console.log(data);

	return (
		<div className="bg-white dark:bg-black">
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
