import { Gradient } from "@/utils/getAnimationStyle";
import Image from "next/image";
import Link from "next/link";
import { Format } from "../molecules/format";
import { Genre } from "../molecules/genre";
import { Score } from "../molecules/score";
import { Season } from "../molecules/season";
import { Status } from "../molecules/status";
import { Title } from "../molecules/title";

export const Table = ({ element }) => {
	return (
		<Gradient
			startColour={element.coverImage.color ?? "#ee7752"}
			className="flex flex-row w-full h-28 rounded-md"
		>
			<Link href={`/anime/${element.id}`} className="relative w-20 h-full aspect-video">
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
						<Title
							label={element.title.userPreferred}
							containerClass={`flex h-full w-full overflow-hidden items-center justify-center`}
							labelClass={`flex px-2 max-h-full overflow-hidden rounded-md text-ellipsis backdrop-blur-md 
											backdrop-contrast-75 backdrop-saturate-100 backdrop-brightness-200 
											dark:backdrop-brightness-50 text-center`}
						/>
					</Link>
					<Genre
						genres={element?.genres}
						color={element?.coverImage?.color}
						containerClass={`flex md:h-2/5 h-6 items-center`}
						childClass={`flex flex-row whitespace-nowrap gap-2 px-2 hover:animate-marquee`}
						labelClass={`flex text-xs sm:text-xs md:text-sm px-2 rounded-xl ring-1 ring-black 
								dark:ring-white font-medium`}
						uniqueColor={true}
					/>
				</div>
				<div className="flex flex-row h-full w-full text-xs sm:text-sm md:text-xl">
					<div className="flex basis-4/6 md:basis-1/2 md:flex-col flex-row">
						{element.averageScore && (
							<Score
								label={element.averageScore}
								containerClass={`flex basis-1/5 md:basis-1/2 items-center justify-center`}
								labelClass={`flex p-2 rounded-lg`}
								switchColour={true}
							/>
						)}
						<Season
							nextAiringEpisode={element.nextAiringEpisode}
							season={element.season}
							seasonYear={element.seasonYear}
							startDate={element.startDate}
							episodes={element.episodes}
							containerClass={`flex basis-4/5 md:basis-1/2 h-1/1 items-center justify-center 
									text-center`}
							labelClass={`px-2 p-2 rounded-lg`}
							countdownContainerClass={`text-xs md:text-base lg:text-lg tracking-tight md:tracking-tighter`}
							countdownLabelClass={`countdown font-mono text-xs md:text-base lg:text-lg tracking-tight md:tracking-tighter`}
							countdown={true}
						/>
					</div>
					<div className="flex basis-2/6 md:basis-1/2 md:flex-col flex-row ">
						{element.format && (
							<Format
								label={element.format}
								containerClass={`flex basis-1/2 items-center justify-center 
										text-center`}
								labelClass={`bg-gray-300 dark:bg-gray-600 p-1 md:p-2 rounded-lg`}
							/>
						)}
						{element.status && (
							<Status
								label={element.status}
								containerClass={`flex basis-1/2 items-center justify-center 
										text-center`}
								labelClass={`p-1 md:p-2 rounded-lg mr-1`}
								switchColour={true}
							/>
						)}
					</div>
				</div>
			</div>
		</Gradient>
	);
};
