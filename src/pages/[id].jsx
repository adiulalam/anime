import Head from "next/head";
import { useEffect, useState } from "react";
import _ from "lodash";
import { getAnimePage } from "@/services/queries";
import { client } from "@/services/client";
import { PageError } from "@/components/error";
import { Icon } from "@/components/molecules";
import { AnimeTab, AnimeBanner, AnimePoster } from "@/components/anime";
import { AnimeSkeleton, FilterSkeleton } from "@/components/skeleton";

export default function Anime({ data, isError }) {
	const [isLoading, setIsLoading] = useState(true);
	const [categoryView, setCategoryView] = useState("");

	useEffect(() => {
		setCategoryView(localStorage.getItem("categoryView") ?? "grid");
		setIsLoading(false);
	}, []);

	if (isError || _.isEmpty(data)) {
		return (
			<PageError
				message={isError?.message}
				statuscode={
					isError?.clientErrors?.[0]?.status ??
					isError?.graphQLErrors?.[0]?.status ??
					isError?.networkError?.[0]?.status ??
					_.isEmpty(data)
						? " - No Anime found"
						: "Unknown"
				}
			/>
		);
	}

	if (isLoading) {
		return (
			<>
				<div className="h-28 md:h-40 bg-white dark:bg-black">
					<FilterSkeleton />
				</div>
				<AnimeSkeleton />
			</>
		);
	}

	return (
		<div className="bg-white dark:bg-black">
			<Head>
				<title>{data.title.userPreferred}</title>
			</Head>
			<div className="flex flex-col w-full h-full p-1">
				<AnimeBanner src={data.bannerImage} name={data.title.userPreferred} />
				<div className="flex items-center justify-end px-2 py-1">
					<Icon
						home={true}
						categoryView={categoryView}
						setCategoryView={setCategoryView}
					/>
				</div>
				<AnimePoster
					src={data.coverImage.large}
					name={data.title.userPreferred}
					description={data.description}
					color={data.coverImage.color}
				/>
				<AnimeTab data={data} categoryView={categoryView} />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.query;

	try {
		const { data } = await client.query({
			query: getAnimePage,
			variables: {
				id: _.isNumber(_.toNumber(id)) ? id : null,
			},
		});

		return {
			props: {
				data: !_.isEmpty(data?.anime?.media?.[0]) ? data?.anime?.media?.[0] : null,
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
