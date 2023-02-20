import { useState } from "react";
import { Tab } from "@headlessui/react";

export const AnimeTab = ({ data }) => {
	const [categories] = useState({
		Overview: <TabOne data={data} />,
		Characters: <h1 className="text-black">Characters</h1>,
		Staff: <h1 className="text-black">Staff</h1>,
		Reviews: <h1 className="text-black">Reviews</h1>,
		Related: <h1 className="text-black">Reviews</h1>,
	});

	return (
		<Tab.Group>
			<Tab.List
				className={`flex flex-row flex-wrap items-center justify-evenly gap-1 rounded-xl 
				bg-blue-500 p-1 my-2`}
			>
				{Object.keys(categories).map((category) => (
					<Tab
						key={category}
						className={({ selected }) =>
							`${
								selected
									? "bg-white shadow"
									: "text-blue-100 hover:bg-slate-600 hover:text-white"
							} rounded-lg p-1 md:p-3 text-sm font-medium leading-5 text-blue-700`
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

const TabOne = ({ data }) => {
	return (
		<div className="flex flex-row w-full h-full gap-2 divide-x-2 divide-solid divide">
			<div className="flex flex-col w-auto h-auto px-2">
				<h1 className="text-black text-lg font-medium">hello</h1>
				<h1 className="text-black">helldddddo</h1>
			</div>
		</div>
	);
};
