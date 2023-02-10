import { Switch } from "@headlessui/react";
import { filterMap } from "@/utils/constMap";

const FilterToggle = ({ enableAdvanced, setEnableAdvanced, filterKey }) => {
	const { label, overrideClass } = filterMap[filterKey];
	return (
		<div className={`flex flex-col ${overrideClass}`}>
			<label className={"text-white dark:text-black "}>{label}</label>
			<div className="flex items-center justify-center mt-1">
				<Switch
					checked={enableAdvanced}
					onChange={setEnableAdvanced}
					className={`${
						enableAdvanced
							? "bg-white dark:bg-black border-white dark:border-black"
							: "bg-black dark:bg-white border-white dark:border-black"
					} relative inline-flex h-6 w-14 items-center rounded-full border-2 transition-colors 
					duration-200 ease-in-out`}
				>
					<span
						className={`${
							enableAdvanced
								? "bg-black dark:bg-white translate-x-[33px]"
								: "translate-x-1 bg-white dark:bg-black"
						} inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out`}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default FilterToggle;
