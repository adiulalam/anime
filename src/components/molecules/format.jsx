import { formatMap } from "@/utils/constMap";

export const Format = ({ label = "", containerClass = "", labelClass = "" }) => {
	return (
		<div className={containerClass}>
			<p className={labelClass}>{formatMap[label]}</p>
		</div>
	);
};
