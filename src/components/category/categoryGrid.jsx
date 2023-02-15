import Image from "next/image";
import { seasonalMap, scoreColour, statusMap } from "@/utils/constMap";
import humanizeDuration from "humanize-duration";

const CategoryGrid = ({ data }) => {
	return (
		<div className="flex flex-col sm:flex-row flex-wrap items-center justify-evenly h-auto w-full gap-2 p-2">
			{data?.filter?.media?.map((element, index) => (
				<div
					key={index}
					className="flex h-48 md:h-56 sm:h-40 w-full md:w-[28rem] sm:w-72 justify-center text-6xl border-2 border-gray-300 rounded-xl bg-gray-100"
				>
					<div className="grid grid-cols-5 grid-rows-5 grid-flow-col w-full h-full">
						<div className="col-span-2 row-span-full">
							<div className="relative w-full h-full bg-cover">
								<Image
									alt={element.title.userPreferred}
									fill
									src={element.coverImage.large}
									className="rounded-l-xl"
								/>
							</div>
						</div>
						<div className="col-span-3 row-span-2 ">
							<div className="grid grid-cols-5 grid-rows-6 grid-flow-row w-full h-full ">
								<div className="flex items-center justify-start col-span-4 row-span-3 bg-red-400 text-lg sm:text-base md:text-lg">
									<p className="flex ml-1 leading-[1.1rem] sm:leading-[.9rem] md:leading-[1.3rem] h-full w-full text-ellipsis ">
										{element.title.userPreferred}
									</p>
								</div>
								<div
									className={`${scoreColour(
										element.averageScore
									)} flex items-center justify-center col-span-1 row-span-3 rounded-tr-xl`}
								>
									<p className={`flex text-lg sm:text-sm md:text-xl`}>
										{element.averageScore}
									</p>
								</div>
								<div className="col-span-5 row-span-3 ">
									<div className="grid grid-cols-3 grid-rows-2 grid-flow-row w-full h-full ">
										<div className="flex items-center justify-center col-span-3 row-span-1 overflow-hidden bg-blue-600">
											<p className="flex truncate text-base sm:text-sm md:text-lg">
												{!_.isEmpty(element.nextAiringEpisode)
													? `Episode ${
															element.nextAiringEpisode.episode
													  } in ${humanizeDuration(
															(
																element.nextAiringEpisode
																	.timeUntilAiring * 1000
															).toFixed(0) ?? 0,
															{
																units: ["d"],
																round: true,
															}
													  )}`
													: element.season ||
													  element.seasonYear ||
													  element.startDate.year
													? `${element.season ?? ""} ${
															element.seasonYear ??
															element.startDate.year ??
															""
													  } ${
															element.episodes
																? `(${element.episodes} Episodes)`
																: ""
													  }`
													: "TBA"}
											</p>
										</div>
										<div className="flex items-center justify-center col-span-1 row-span-1 bg-yellow-600">
											<p className="flex font-bold text-xs sm:text-xs md:text-sm ">
												Airirng
											</p>
										</div>
										<div className="flex items-center justify-center col-span-1 row-span-1 bg-purple-600">
											<p className="flex font-bold text-xs sm:text-xs md:text-sm">
												TV
											</p>
										</div>
										<div className="flex items-center justify-center col-span-1 row-span-1 truncate bg-gray-600">
											<p className="flex font-bold text-xs sm:text-xs md:text-sm">
												Studio / total ep.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-slate-500 col-span-3 row-span-2 overflow-hidden hover:overflow-auto ">
							<p className="flex text-sm sm:text-xs md:text-base leading-5">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived not
								only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s
								with the release of Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing software like Aldus
								PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
						<div className="flex items-center justify-start bg-slate-900 col-span-3 row-span-1 rounded-br-xl overflow-hidden">
							<div className="flex flex-row whitespace-nowrap animate-marquee gap-1 ">
								<p className="flex text-xs sm:text-xs md:text-sm bg-orange-500">
									marequee scrolling
								</p>
								<p className="flex text-xs sm:text-xs md:text-sm bg-orange-500">
									marequee scrolling
								</p>
								<p className="flex text-xs sm:text-xs md:text-sm bg-orange-500">
									marequee scrolling
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CategoryGrid;
