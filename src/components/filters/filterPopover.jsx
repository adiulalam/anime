import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import settings2 from "react-useanimations/lib/settings2";
import UseAnimations from "react-useanimations";
import { useTheme } from "next-themes";
import { FilterAutocomplete } from "./filterAutocomplete";
import { FilterSearchBar } from "./filterSearchBar";
import { FilterSlider } from "./filterSlider";
import FilterToggle from "./filterToggle";

export const FilterPopover = ({ searchData, filterValue, setFilterValue, loading }) => {
	const [enableAdvanced, setEnableAdvanced] = useState(false);
	const { theme } = useTheme();

	return (
		<Popover className="relative flex h-full w-full items-center justify-center">
			{({ open }) => (
				<>
					<FilterSearchBar
						searchData={searchData}
						filterValue={filterValue}
						setFilterValue={setFilterValue}
						loading={loading}
						filterKey={"search"}
					/>
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
						<Popover.Panel className="absolute left-1/2 top-1/2 mt-8 transform -translate-x-1/2 z-10 w-screen max-w-full md:max-w-3xl">
							<div className="overflow-none shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="relative grid gap-8 bg-black dark:bg-white p-7 md:grid-cols-3 rounded-lg">
									<FilterAutocomplete
										filterValue={filterValue}
										setFilterValue={setFilterValue}
										filterKey={"format"}
										label={"Format:"}
									/>
									<FilterAutocomplete
										filterValue={filterValue}
										setFilterValue={setFilterValue}
										filterKey={"status"}
										label={"Status:"}
									/>
									<FilterAutocomplete
										filterValue={filterValue}
										setFilterValue={setFilterValue}
										filterKey={"genre"}
										accessorKey={"genre_in"}
										label={"Genre:"}
									/>
									<FilterAutocomplete
										filterValue={filterValue}
										setFilterValue={setFilterValue}
										filterKey={"season"}
										label={"Season:"}
									/>
									<FilterAutocomplete
										filterValue={filterValue}
										setFilterValue={setFilterValue}
										filterKey={"year"}
										label={"Year:"}
									/>
									{/* <FilterSlider
										min={0}
										max={50}
										interval={10}
										label={"Label"}
										range={false}
										sliderMap={{ minMap: "minimum", maxMap: "maximum" }}
										filterValue={filterValue}
										setFilterValue={setFilterValue}
									/> */}
									<FilterToggle
										label={"Advanced"}
										overrideClass={"items-center font-bold"}
										enableAdvanced={enableAdvanced}
										setEnableAdvanced={setEnableAdvanced}
									/>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};
