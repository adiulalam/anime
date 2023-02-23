import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { TabOverview } from "./tabOverview";
import { TabCharacter } from "./tabCharacter";
import { TabStaff } from "./tabStaff";
import { TabRelated } from "./tabRelated";
import { TabRecommended } from "./tabRecommended";

export const AnimeTab = ({ data, categoryView }) => {
	const [categories, setCategories] = useState({});

	useEffect(() => {
		setCategories({
			Overview: <TabOverview data={data} categoryView={categoryView} />,
			Characters: <TabCharacter />,
			Staff: <TabStaff />,
			Related: <TabRelated categoryView={categoryView} />,
			Recommended: <TabRecommended categoryView={categoryView} />,
		});
	}, [data, categoryView]);

	return (
		<Tab.Group>
			<Tab.List
				className={`flex flex-row flex-wrap items-center justify-evenly gap-1 rounded-xl 
				bg-black dark:bg-white p-1 my-2`}
			>
				{Object.keys(categories).map((category) => (
					<Tab
						key={category}
						className={({ selected }) =>
							`${
								selected
									? "bg-white dark:bg-black shadow"
									: "text-white dark:text-black hover:bg-stone-700 dark:hover:bg-stone-400 hover:text-white"
							} rounded-lg p-1 md:p-3 text-sm font-medium leading-5 text-black dark:text-white`
						}
					>
						{category}
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels className="">
				{Object.values(categories).map((tab, index) => (
					<Tab.Panel key={index} className={``}>
						<div>{tab}</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};
