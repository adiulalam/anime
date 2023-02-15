import Image from "next/image";
import { seasonalMap, scoreColour, statusMap, formatMap } from "@/utils/constMap";
import humanizeDuration from "humanize-duration";
import { Gradient } from "@/utils/getAnimationStyle";
import Color from "color";

const CategoryGrid = ({ data }) => {
	return (
		<div className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-2 p-2">
			{data?.filter?.media?.map((element, index) => (
				<div
					key={index}
					className="flex h-48 md:h-56 sm:h-40 w-full md:w-[28rem] sm:w-72 justify-center text-6xl border-2 border-gray-300 rounded-xl bg-gray-100"
				>
					<Gradient
						startColour={element.coverImage.color ?? "#ee7752"}
						className="grid grid-cols-5 grid-rows-1 grid-flow-col w-full h-full rounded-xl"
					>
						<div className="col-span-2 row-span-full">
							<div className="relative w-full h-full bg-cover">
								<Image
									alt={element.title.userPreferred}
									fill
									// src="data:image/jpeg;base64,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"
									src={element.coverImage.large}
									className="rounded-l-xl"
								/>
								<div
									className={`${scoreColour(
										element.averageScore
									)} absolute w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10 rounded-full m-1 text-lg sm:text-sm md:text-xl`}
								>
									<p className={`flex w-full h-full text-lg sm:text-sm md:text-xl items-center justify-center text-center`}>
										{element.averageScore}
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center justify-between flex-wrap col-span-3 row-span-1 ">
							<div className="flex w-full h-2/5">
								<div className="flex flex-col items-center justify-between flex-wrap w-full h-full ">
									<div className="flex w-full h-3/5 text-lg sm:text-base md:text-xl rounded-tr-xl justify-center overflow-hidden">
										<div className="leading-[1.5rem] sm:leading-[1.2rem] md:leading-[1.6rem] ">
											<p className="flex px-2 rounded-lg text-ellipsis bg-white dark:bg-black">
												{element.title.userPreferred}
											</p>
										</div>
									</div>
									<div className="flex w-full h-2/5 items-center justify-center ">
										<div
											className={`${
												element.season ? seasonalMap[element.season] : "bg-gray-300 dark:bg-gray-800"
											}  px-2 rounded-lg`}
										>
											<p className="flex truncate text-base sm:text-sm md:text-lg">
												{!_.isEmpty(element.nextAiringEpisode)
													? `Episode ${element.nextAiringEpisode.episode} in ${humanizeDuration(
															(element.nextAiringEpisode.timeUntilAiring * 1000).toFixed(0) ?? 0,
															{
																units: ["d"],
																round: true,
															}
													  )}`
													: element.season || element.seasonYear || element.startDate.year
													? `${element.season ?? ""} ${element.seasonYear ?? element.startDate.year ?? ""} ${
															element.episodes ? `(${element.episodes} Episodes)` : ""
													  }`
													: "TBA"}
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-wrap h-1/2 w-full bg-gray-300 dark:bg-gray-600 overflow-hidden hover:overflow-auto text-sm sm:text-xs md:text-base ">
								<p
									className="leading-4 sm:leading-4 md:leading-5 ml-1"
									dangerouslySetInnerHTML={{ __html: element.description ?? "" }}
								/>
							</div>

							<div className="flex w-full h-[10%] overflow-hidden rounded-br-xl">
								<div className="flex flex-row whitespace-nowrap gap-2 px-2 hover:animate-marquee ">
									{element?.genres?.map((genre, i) => (
										<p
											key={i}
											className={`${
												Color(element.coverImage.color ?? "#ee7752").rotate(45).isDark() ? `text-white` : `text-black`
											} flex text-xs sm:text-xs md:text-sm px-2 rounded-xl border-black dark:border-white border-2 items-center`}
											style={{backgroundColor: Color(element.coverImage.color ?? "#ee7752").rotate(45).hex() }}
										>
											{genre}
										</p>
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
