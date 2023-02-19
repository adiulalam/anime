import Color from "color";
import Link from "next/link";

export const Genre = ({
	genres,
	color,
	containerClass = "",
	childClass = "",
	labelClass = "",
	uniqueColor = false,
	limit = 10,
}) => {
	return (
		<div className={containerClass}>
			<div className={childClass}>
				{genres?.slice(0, limit).map((genre, i) => (
					<Link
						key={i}
						href={{
							pathname: "/anime/categories",
							query: { genre_in: [genre] },
						}}
					>
						<p
							className={`${
								uniqueColor
									? Color(color ?? "#ee7752")
											.rotate(45)
											.isDark()
										? `text-white`
										: `text-black`
									: ""
							} ${labelClass}`}
							style={
								uniqueColor
									? {
											backgroundColor: Color(color ?? "#ee7752")
												.rotate(45)
												.hex(),
									  }
									: {}
							}
						>
							{genre}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
};
