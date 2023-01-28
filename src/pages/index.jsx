import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Switcher from "@/components/switcher";
import { Carousel } from "@/components/carousel";
import { carouselMap } from "@/utils/constMap";
import { getLandingPage } from "@/services/queries";
import { client } from "@/services/client";
import { useEffect, useState } from "react";
// const { data } = require("../data.json");

export default function Home({ data }) {
	// const { loading, error, data, fetchMore } = useQuery(getLandingPage, {
	// 	fetchPolicy: "cache-and-network",
	// });

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [data]);

	if (isLoading) {
		return <h1>loading...</h1>;
	}

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

export async function getServerSideProps() {
	const { data } = await client.query({
		query: getLandingPage,
	});

	return {
		props: {
			data,
		},
	};
}
