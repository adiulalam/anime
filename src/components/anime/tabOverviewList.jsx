import Link from "next/link";

export const TabOverviewList = ({ data, label, link = false, tags = false }) => {
	return (
		<div
			className="flex flex-col w-full rounded-xl border-2 border-black dark:border-white bg-white 
			dark:bg-black"
		>
			<p className="text-black dark:text-white text-xl font-medium py-2">{label}</p>
			<div
				className="flex flex-row flex-wrap w-full h-full gap-2  
		text-center items-center justify-evenly rounded-xl bg-white dark:bg-black p-3 "
			>
				{data?.map((element, index) => (
					<div
						key={index}
						className="flex flex-col w-auto h-auto px-2 border-b-2 text-black dark:text-white"
					>
						{link ? (
							<Link
								href={{
									pathname: "/anime/categories",
									query: { genre_in: [element] },
								}}
							>
								<h1 className="text-base">{element}</h1>
							</Link>
						) : (
							<h1 className="text-base">{tags ? element.name : element}</h1>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
