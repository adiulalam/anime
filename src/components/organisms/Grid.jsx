import Image from "next/image";
import { Gradient } from "@/utils/getAnimationStyle";
import Link from "next/link";
import { Description, Title, Score, Season, Genre } from "../molecules";

export const Grid = ({ element }) => {
	return (
		<div
			className="flex h-48 md:h-56 sm:h-40 w-full md:w-[28rem] sm:w-72 justify-center text-6xl border-2 
		border-gray-800 dark:border-gray-300 rounded-xl bg-gray-100"
		>
			<Gradient
				startColour={element.coverImage.color ?? "#ee7752"}
				className="grid grid-cols-5 grid-rows-1 grid-flow-col w-full h-full rounded-xl"
			>
				<div className="col-span-2 row-span-full">
					<Link href={`/${element.id}`}>
						<div className="relative w-full h-full bg-cover">
							<Image
								alt={element.title.userPreferred}
								fill
								sizes="100%"
								src={element.coverImage.large}
								className="rounded-l-xl"
							/>

							{element.averageScore && (
								<Score
									label={element.averageScore}
									containerClass={`absolute w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10 rounded-full m-1 text-lg 
								sm:text-sm md:text-xl ring-1 ring-black dark:ring-white`}
									labelClass={`flex w-full h-full text-lg sm:text-sm md:text-xl items-center justify-center 
								text-center`}
								/>
							)}
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-center justify-between flex-wrap col-span-3 row-span-1 ">
					<div className="flex w-full h-2/5">
						<div className="flex flex-col items-center justify-evenly flex-wrap w-full h-full gap-1">
							<Link href={`/${element.id}`}>
								<Title
									label={element.title.userPreferred}
									containerClass={`flex w-full max-h-12 sm:max-h-10 md:max-h-14 text-lg sm:text-sm md:text-xl 
							justify-center overflow-hidden leading-[1.4rem] sm:leading-[1.2rem] md:leading-[1.6rem] font-medium`}
									labelClass={`flex px-2 w-full h-full rounded-md text-ellipsis backdrop-blur-md 
										backdrop-contrast-75 backdrop-saturate-100 backdrop-brightness-200 
										dark:backdrop-brightness-50`}
								/>
							</Link>
							<Season
								nextAiringEpisode={element.nextAiringEpisode}
								season={element.season}
								seasonYear={element.seasonYear}
								startDate={element.startDate}
								episodes={element.episodes}
								format={element.format}
								type={element.type}
								containerClass={`flex w-full max-h-4 sm:max-h-4 md:max-h-6 items-center justify-center`}
								labelClass={`flex px-2 md:p-1 truncate items-center justify-center rounded-lg 
							overflow-hidden text-base sm:text-xs md:text-lg text-center`}
								countdownContainerClass={`text-sm sm:text-xs md:text-sm`}
								countdownLabelClass={`countdown font-mono text-sm sm:text-sm md:text-lg`}
								countdown={true}
							/>
						</div>
					</div>

					{element.description && (
						<Description
							containerClass={`flex flex-wrap h-[45%] w-full bg-gray-300 dark:bg-gray-600 overflow-hidden hover:overflow-auto 
						text-sm sm:text-xs md:text-base rounded-md`}
							labelClass={`leading-4 sm:leading-4 md:leading-5 ml-1`}
							label={element.description}
						/>
					)}
					<Genre
						genres={element?.genres}
						color={element?.coverImage?.color}
						containerClass={`flex w-full h-[13%] overflow-hidden rounded-br-xl py-1 sm:py-0 md:py-1`}
						childClass={`flex flex-row whitespace-nowrap gap-2 px-2 hover:animate-marquee`}
						labelClass={`flex text-xs sm:text-xs md:text-sm px-2 rounded-xl ring-1 ring-black 
					dark:ring-white font-medium`}
						uniqueColor={true}
					/>
				</div>
			</Gradient>
		</div>
	);
};
