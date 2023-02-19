export const Description = ({ label = "", containerClass = "", labelClass = "" }) => {
	return (
		<div className={containerClass}>
			<p
				className={labelClass}
				dangerouslySetInnerHTML={{
					__html: label,
				}}
			/>
		</div>
	);
};
