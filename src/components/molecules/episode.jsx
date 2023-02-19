export const Episode = ({ episodes, format, containerClass = "", labelClass = "" }) => {
	return (
		<div className={containerClass}>
			<p className={labelClass}>
				{episodes > 1 ? `Total Episodes: ${episodes}` : format ?? "Unknown"}
			</p>
		</div>
	);
};
