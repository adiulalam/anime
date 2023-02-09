import { useState } from "react";
import { Switch } from "@headlessui/react";

const FilterToggle = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled
						? "bg-white dark:bg-black border-white dark:border-black"
						: "bg-black dark:bg-white border-white dark:border-black"
				} relative inline-flex h-6 w-14 items-center rounded-full border-2 transition-colors 
				duration-200 ease-in-out`}
			>
				<span
					className={`${
						enabled
							? "bg-black dark:bg-white translate-x-[33px]"
							: "translate-x-1 bg-white dark:bg-black"
					} inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out`}
				/>
			</Switch>
		</div>
	);
};

export default FilterToggle;
