import Image from "next/image";
import { seasonalMap, scoreColour } from "@/utils/constMap";
import { Gradient } from "@/utils/getAnimationStyle";
import Color from "color";
import Link from "next/link";
import { CategoryCountdown } from "./categoryCountdown";

const CategoryGrid = ({ data }) => {
	return (
		<div className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-4 py-4">
			{data?.filter?.media?.map((element, index) => (
				<div
					key={index}
					className="flex h-48 md:h-56 sm:h-40 w-full md:w-[28rem] sm:w-72 justify-center text-6xl border-2 
					border-gray-800 dark:border-gray-300 rounded-xl bg-gray-100"
				>
					<Gradient
						startColour={element.coverImage.color ?? "#ee7752"}
						className="grid grid-cols-5 grid-rows-1 grid-flow-col w-full h-full rounded-xl"
					>
						<div className="col-span-2 row-span-full">
							<Link href={`/anime/${element.id}`}>
								<div className="relative w-full h-full bg-cover">
									<Image
										alt={element.title.userPreferred}
										fill
										sizes="100%"
										src={element.coverImage.large}
										className="rounded-l-xl"
									/>

									{element.averageScore && (
										<div
											className={`${scoreColour(
												element.averageScore
											)} absolute w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10 rounded-full m-1 text-lg 
										sm:text-sm md:text-xl ring-1 ring-black dark:ring-white`}
										>
											<p
												className={`flex w-full h-full text-lg sm:text-sm md:text-xl items-center 
											justify-center text-center`}
											>
												{element.averageScore}
											</p>
										</div>
									)}
								</div>
							</Link>
						</div>
						<div className="flex flex-col items-center justify-between flex-wrap col-span-3 row-span-1 ">
							<div className="flex w-full h-2/5">
								<div className="flex flex-col items-center justify-evenly flex-wrap w-full h-full gap-1">
									<Link href={`/anime/${element.id}`}>
										<div
											className="flex w-full max-h-12 sm:max-h-10 md:max-h-14 text-lg sm:text-sm md:text-xl 
										justify-center overflow-hidden"
										>
											<div className="leading-[1.4rem] sm:leading-[1.2rem] md:leading-[1.6rem] font-medium">
												<p
													className="flex px-2 w-full h-full rounded-md text-ellipsis backdrop-blur-md 
													backdrop-contrast-75 backdrop-saturate-100 backdrop-brightness-200 
													dark:backdrop-brightness-50 "
												>
													{element.title.userPreferred}
												</p>
											</div>
										</div>
									</Link>
									<div className="flex w-full max-h-4 sm:max-h-4 md:max-h-6 items-center justify-center">
										<div
											className={`${
												element.season
													? seasonalMap[element.season]
													: "bg-gray-300 dark:bg-gray-800"
											} rounded-lg overflow-hidden`}
										>
											<div
												className="flex px-2 truncate text-base sm:text-xs md:text-lg text-center 
											items-center justify-center"
											>
												{!_.isEmpty(element.nextAiringEpisode) ? (
													<CategoryCountdown
														episode={element.nextAiringEpisode.episode}
														remaining={
															element.nextAiringEpisode
																.timeUntilAiring ?? 0
														}
														containerClass={
															"text-xs sm:text-xs md:text-sm"
														}
														labelClass={
															"countdown font-mono text-sm sm:text-sm md:text-lg"
														}
													/>
												) : element.season ||
												  element.seasonYear ||
												  element.startDate.year ? (
													`${element.season ?? ""} ${
														element.seasonYear ??
														element.startDate.year ??
														""
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
								</div>
							</div>

							{element.description && (
								<div
									className="flex flex-wrap h-[45%] w-full bg-gray-300 dark:bg-gray-600 overflow-hidden hover:overflow-auto 
							text-sm sm:text-xs md:text-base rounded-md"
								>
									<p
										className="leading-4 sm:leading-4 md:leading-5 ml-1 "
										dangerouslySetInnerHTML={{
											__html: element.description ?? "",
										}}
									/>
								</div>
							)}

							<div className="flex w-full h-[13%] overflow-hidden rounded-br-xl py-1 sm:py-0 md:py-1">
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
					</Gradient>
				</div>
			))}
		</div>
	);
};

export default CategoryGrid;
