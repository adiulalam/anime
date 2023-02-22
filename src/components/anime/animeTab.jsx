import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { TabOverview } from "./tabOverview";

export const AnimeTab = ({ data }) => {
	const [categories, setCategories] = useState({});

	useEffect(() => {
		setCategories({
			Overview: <TabOverview data={data} />,
			Characters: <h1 className="text-black">Characters</h1>,
			Staff: <h1 className="text-black">Staff</h1>,
			Reviews: <h1 className="text-black">Reviews</h1>,
			Related: <h1 className="text-black">Reviews</h1>,
		});
	}, [data]);

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
				{Object.values(categories).map((posts, idx) => (
					<Tab.Panel key={idx} className={``}>
						<div>{posts}</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};
