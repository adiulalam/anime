import { scoreColour, seasonalMap, statusMap, formatMap } from "@/utils/constMap";
import { Gradient } from "@/utils/getAnimationStyle";
import Color from "color";
import Image from "next/image";
import Link from "next/link";
import { CategoryCountdown } from "./categoryCountdown";

const CategoryTable = ({ data }) => {
	return (
		<div className="flex flex-col flex-wrap items-center justify-evenly h-auto w-full gap-4 py-4">
			{data?.filter?.media?.map((element, index) => (
				<Gradient
					key={index}
					startColour={element.coverImage.color ?? "#ee7752"}
					className="flex flex-row w-full h-28 rounded-md"
				>
					<Link
						href={`/anime/${element.id}`}
						className="relative w-20 h-full aspect-video"
					>
						<Image
							alt={element.title.userPreferred}
							fill
							sizes="100%"
							src={element.coverImage.large}
							className="object-contain rounded-md"
						/>
					</Link>
					<div className="flex flex-col flex-grow md:flex-row overflow-hidden ">
						<div className="flex flex-col h-full w-full text-base md:text-2xl">
							<Link href={`/anime/${element.id}`} className="flex md:h-3/5 h-12">
								<div className="flex h-full w-full overflow-hidden items-center justify-center">
									<p
										className="flex px-2 max-h-full overflow-hidden rounded-md text-ellipsis backdrop-blur-md 
													backdrop-contrast-75 backdrop-saturate-100 backdrop-brightness-200 
													dark:backdrop-brightness-50  text-center"
									>
										{element.title.userPreferred}
									</p>
								</div>
							</Link>
							<div className="flex md:h-2/5 h-6 items-center ">
								<div className="flex flex-row whitespace-nowrap gap-2 px-2 hover:animate-marquee">
									{element?.genres?.map((genre, i) => (
										<Link
											key={i}
											href={{
												pathname: "/anime/categories",
												query: { genre_in: [genre] },
											}}
										>
											<p
												className={`${
													Color(element.coverImage.color ?? "#ee7752")
														.rotate(45)
														.isDark()
														? `text-white`
														: `text-black`
												} flex text-xs sm:text-xs md:text-sm px-2 rounded-xl ring-1 ring-black 
												dark:ring-white font-medium`}
												style={{
													backgroundColor: Color(
														element.coverImage.color ?? "#ee7752"
													)
														.rotate(45)
														.hex(),
												}}
											>
												{genre}
											</p>
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className="flex flex-row h-full w-full text-xs sm:text-sm md:text-xl">
							<div className="flex basis-4/6 md:basis-1/2 md:flex-col flex-row">
								<div
									className={`flex basis-1/5 md:basis-1/2 items-center justify-center`}
								>
									{element.averageScore && (
										<p
											className={`${scoreColour(
												element.averageScore
											)} flex p-2 rounded-lg`}
										>
											{element.averageScore}
										</p>
									)}
								</div>
								<div
									className="flex basis-4/5 md:basis-1/2 h-1/1 items-center justify-center 
								text-center"
								>
									<div
										className={`${
											element.season
												? seasonalMap[element.season]
												: "bg-gray-300 dark:bg-gray-800"
										} px-2 p-2 rounded-lg`}
									>
										{!_.isEmpty(element.nextAiringEpisode) ? (
											<CategoryCountdown
												episode={element.nextAiringEpisode.episode}
												remaining={
													element.nextAiringEpisode.timeUntilAiring ?? 0
												}
												containerClass={
													"text-xs md:text-base lg:text-lg tracking-tight md:tracking-tighter"
												}
												labelClass={
													"countdown font-mono text-xs md:text-base lg:text-lg tracking-tight md:tracking-tighter"
												}
											/>
										) : element.season ||
										  element.seasonYear ||
										  element.startDate.year ? (
											`${element.season ?? ""} ${
												element.seasonYear ?? element.startDate.year ?? ""
											} ${
												element.episodes
													? `(${element.episodes} Episodes)`
													: ""
											}`
										) : (
											"TBA"
										)}
									</div>
								</div>
							</div>
							<div className="flex basis-2/6 md:basis-1/2 md:flex-col flex-row ">
								<div
									className="flex basis-1/2 items-center justify-center 
								text-center "
								>
									<p className="bg-gray-300 dark:bg-gray-600 p-1 md:p-2 rounded-lg">
										{formatMap[element.format]}
									</p>
								</div>
								<div
									className={`flex basis-1/2 items-center justify-center 
								text-center `}
								>
									<p
										className={`${
											statusMap[element.status].style ??
											"bg-gray-300 dark:bg-gray-800"
										} p-1 md:p-2 rounded-lg mr-1`}
									>
										{statusMap[element.status].name}
									</p>
								</div>
							</div>
						</div>
					</div>
				</Gradient>
			))}
		</div>
	);
};

export default CategoryTable;
