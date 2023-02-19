import { scoreColour } from "@/utils/constMap";

export const Score = ({
	label = 0,
	containerClass = "",
	labelClass = "",
	switchColour = false,
}) => {
	return (
		<div className={`${containerClass} ${switchColour ? "" : scoreColour(label)}`}>
			<p className={`${labelClass} ${switchColour ? scoreColour(label) : ""}`}>{label}</p>
		</div>
	);
};
