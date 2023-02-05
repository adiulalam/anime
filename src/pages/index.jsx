import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Switcher from "@/components/switcher";
import { CarouselBox } from "@/components/carousel/carouselBox";
import { carouselMap } from "@/utils/constMap";
import { getLandingPage } from "@/services/queries";
import { client } from "@/services/client";
import { useEffect, useState } from "react";
import { PageError } from "@/components/error";
import CarouselSkeleton from "@/components/skeleton/carouselSkeleton";
import Filter from "@/components/filters/filterBar";
import { FilterSkeleton } from "@/components/skeleton/filterSkeleton";

export default function Home({ data, isError }) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(false);
	}, [data]);

	if (isError) {
		return (
			<PageError
				message={isError?.message}
				statuscode={
					isError?.clientErrors?.[0]?.status ??
					isError?.graphQLErrors?.[0]?.status ??
					isError?.networkError?.[0]?.status ??
					"Unknown"
				}
			/>
		);
	}

	if (isLoading) {
		return (
			<>
				<FilterSkeleton />
				<CarouselSkeleton />
			</>
		);
	}

	return (
		<div className="bg-white dark:bg-black">
			<div className="flex items-center justify-center h-16 p-2">
				<Filter />
			</div>
			<div className="flex items-center justify-end px-2">
				<Switcher />
			</div>
			{Object.entries(data).map(([key, value], index) => (
				<CarouselBox
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
	try {
		const { data } = await client.query({
			query: getLandingPage,
		});
		return {
			props: {
				data,
			},
		};
	} catch (error) {
		return {
			props: {
				isError: JSON.parse(JSON.stringify(error)),
			},
		};
	}
}
