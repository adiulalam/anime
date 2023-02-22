import Image from "next/image";
import { Title } from "../molecules/title";
import { AnimeCharacterCard } from "./animeCharacterCard";
import { TabOverviewInfo } from "./tabOverviewInfo";

export const TabOverview = ({ data }) => {
	return (
		<div
			className="flex flex-col flex-wrap w-full h-full gap-2  
		text-center items-center justify-evenly"
		>
			<TabOverviewInfo data={data} />

			<AnimeCharacterCard data={data?.characters?.edges} showDual={true} />
		</div>
	);
};
