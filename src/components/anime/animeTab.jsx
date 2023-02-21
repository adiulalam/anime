import { useState } from "react";
import { Tab } from "@headlessui/react";
import { formatMap, statusMap } from "@/utils/constMap";
import humanizeDuration from "humanize-duration";
import dayjs from "dayjs";
import { TabOverview } from "./tabOverview";

export const AnimeTab = ({ data }) => {
	const [categories] = useState({
		Overview: <TabOverview data={data} />,
		Characters: <h1 className="text-black">Characters</h1>,
		Staff: <h1 className="text-black">Staff</h1>,
		Reviews: <h1 className="text-black">Reviews</h1>,
		Related: <h1 className="text-black">Reviews</h1>,
	});

	return (
		<Tab.Group>
			<Tab.List
				className={`flex flex-row flex-wrap items-center justify-evenly gap-1 rounded-xl 
				bg-blue-400 p-1 my-2`}
			>
				{Object.keys(categories).map((category) => (
					<Tab
						key={category}
						className={({ selected }) =>
							`${
								selected
									? "bg-white shadow"
									: "text-blue-100 hover:bg-slate-600 hover:text-white"
							} rounded-lg p-1 md:p-3 text-sm font-medium leading-5 text-blue-900`
						}
					>
						{category}
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels className="">
				{Object.values(categories).map((posts, idx) => (
					<Tab.Panel key={idx} className={`rounded-xl bg-white p-3 `}>
						<div>{posts}</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};
