import { TabOverviewInfo } from "./tabOverviewInfo";

export const TabOverview = ({ data }) => {
	return (
		<div
			className="flex flex-row flex-wrap w-full h-full gap-2  
		text-center items-center justify-evenly"
		>
			<TabOverviewInfo data={data} />
		</div>
	);
};
