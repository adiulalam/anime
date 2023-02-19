import { statusMap } from "@/utils/constMap";

export const Status = ({
	label = 0,
	containerClass = "",
	labelClass = "",
	switchColour = false,
}) => {
	return (
		<div
			className={`${containerClass} ${
				switchColour ? "" : statusMap[label].style ?? "bg-gray-300 dark:bg-gray-800"
			}`}
		>
			<p
				className={`${labelClass} ${
					switchColour ? statusMap[label].style ?? "bg-gray-300 dark:bg-gray-800" : ""
				}`}
			>
				{label}
			</p>
		</div>
	);
};
