import { Icon } from "@/components/molecules/icon";
import { useEffect, useState } from "react";
import { AnimeBanner } from "@/components/anime/animeBanner";
import { AnimePoster } from "@/components/anime/animePoster";
import { AnimeTab } from "@/components/anime/animeTab";
import { PageError } from "@/components/error";
import { client } from "@/services/client";
import { getAnimePage } from "@/services/queries";
import _ from "lodash";
import Head from "next/head";

export default function Anime({ data, isError }) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(false);
	}, [data]);

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
		return <p>loading...</p>;
	}

	return (
		<div className="bg-white dark:bg-black">
			<Head>
				<title>{data.title.userPreferred}</title>
			</Head>
			<div className="flex flex-col w-full h-full">
				<AnimeBanner src={data.bannerImage} name={data.title.userPreferred} />
				<div className="flex items-center justify-end px-2 py-1">
					<Icon home={true} />
				</div>
				<AnimePoster
					src={data.coverImage.large}
					name={data.title.userPreferred}
					description={data.description}
					color={data.coverImage.color}
				/>
				<AnimeTab data={data} />
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
