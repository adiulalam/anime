export const Title = ({ label, containerClass, labelClass }) => {
	return (
		<div className={containerClass}>
			<p className={labelClass}>{label}</p>
		</div>
	);
};
