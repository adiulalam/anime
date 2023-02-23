export const Episode = ({ episodes, format, type, containerClass = "", labelClass = "" }) => {
	return (
		<div className={containerClass}>
			<p className={labelClass}>
				{episodes > 1 ? `Total Episodes: ${episodes}` : format ?? type ?? "Unknown"}
			</p>
		</div>
	);
};
