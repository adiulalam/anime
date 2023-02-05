import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import settings2 from "react-useanimations/lib/settings2";
import UseAnimations from "react-useanimations";
import { useTheme } from "next-themes";
import { FilterAutocomplete } from "./filterAutocomplete";

export const FilterPopover = () => {
	const { theme } = useTheme();

	const solutions = [
		{
			name: "Insights",
			description: "Measure actions your users take",
			href: "##",
		},
		{
			name: "Automations",
			description: "Create your own targeted content",
			href: "##",
		},
	];
	return (
		<Popover className=" relative">
			{({ open }) => (
				<>
					<Popover.Button className={"focus:outline-none"}>
						<UseAnimations
							animation={settings2}
							size={50}
							strokeColor={theme === "dark" || theme === "system" ? "white" : "black"}
						/>
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="fixed left-1/2 transform -translate-x-1/2 z-10 w-screen max-w-full md:max-w-3xl">
							<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="relative grid gap-8 bg-black dark:bg-white p-7 md:grid-cols-3">
									{/* {solutions.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
										>
											<div className="ml-4">
												<p className="text-sm font-medium text-gray-900">
													{item.name}
												</p>
												<p className="text-sm text-gray-500">
													{item.description}
												</p>
											</div>
										</a>
									))} */}
									<FilterAutocomplete />
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};
