import { useRef } from "react";
import { AnimeCharacterCard } from "./animeCharacterCard";
import { TabOverviewInfo } from "./tabOverviewInfo";
import { AnimeRecommendation } from "./animeRecommendation";

export const TabOverview = ({ data }) => {
	return (
		<div
			className="flex flex-col flex-wrap w-full h-full gap-6 
		text-center items-center justify-evenly py-1"
		>
			<TabOverviewInfo data={data} />

			<AnimeCharacterCard
				data={data?.characters?.edges}
				label={"Main Characters"}
				showDual={true}
			/>

			<AnimeCharacterCard data={data?.staff?.edges} label={"Main Staff"} showDual={false} />

			<AnimeRecommendation data={data?.recommendations?.nodes} label={"Recommendation"} />
		</div>
	);
};
