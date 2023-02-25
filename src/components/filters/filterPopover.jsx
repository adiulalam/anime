import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import settings2 from "react-useanimations/lib/settings2";
import UseAnimations from "react-useanimations";
import { useTheme } from "next-themes";
import { filterMap } from "@/utils/constMap";
import { FilterAutocomplete } from "./filterAutocomplete";
import { FilterSearchBar } from "./filterSearchBar";
import { FilterSlider } from "./filterSlider";
import { FilterToggle } from "./filterToggle";

// todo add remove all text/array from autocomplete
export const FilterPopover = ({ searchData, filterValue, setFilterValue, loading }) => {
	const [enableAdvanced, setEnableAdvanced] = useState(false);
	const { theme, systemTheme } = useTheme();

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
							strokeColor={
								theme === "dark" || (theme === "system" && systemTheme === "dark")
									? "white"
									: "black"
							}
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
									{Object.entries(filterMap).map(
										([key, value], index) =>
											(!value.advanced ||
												(value.advanced && enableAdvanced)) &&
											(value.type === "autocomplete" ? (
												<FilterAutocomplete
													key={index}
													filterValue={filterValue}
													setFilterValue={setFilterValue}
													filterKey={key}
												/>
											) : value.type === "toggle_advanced" ? (
												<FilterToggle
													key={index}
													enableAdvanced={enableAdvanced}
													setEnableAdvanced={setEnableAdvanced}
													filterKey={key}
												/>
											) : value.type === "slider" ? (
												<FilterSlider
													key={index}
													filterKey={key}
													filterValue={filterValue}
													setFilterValue={setFilterValue}
												/>
											) : null)
									)}
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};
