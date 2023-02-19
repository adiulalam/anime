import { Gradient } from "@/utils/getAnimationStyle";
import humanizeDuration from "humanize-duration";
import { seasonalMap, scoreColour, statusMap } from "@/utils/constMap";
import _ from "lodash";
import { Score } from "../atomicComponents/molecules/score";
import { Status } from "../atomicComponents/molecules/status";
import { Season } from "../atomicComponents/molecules/season";

export const CarouselHover = ({ cardData, showRight }) => {
	return (
		<Gradient
			startColour={cardData.coverImage.color ?? "#ee7752"}
			className={`hidden group-hover:flex flex-col items-center justify-evenly absolute top-0 z-10 ${
				showRight ? "left-36 md:left-52 pl-5 pr-2" : "right-36 md:right-52 pr-5 pl-2"
			} md:h-72 md:w-56 h-52 w-40 rounded-lg transition-all duration-300 ease-in-out`}
			style={{
				clipPath: showRight
					? "polygon(100% 0, 7% 0, 7% 40%, 0 50%, 7% 60%, 7% 100%, 100% 100%)"
					: "polygon(0% 0%, 93% 0, 93% 40%, 100% 50%, 93% 60%, 93% 100%, 0 100%)",
			}}
		>
			{(cardData?.status || cardData?.averageScore) && (
				<div className="flex flex-row w-full h-auto justify-center items-center gap-2 ">
					{cardData.status && (
						<Status
							label={cardData.status}
							containerClass={`flex w-auto py-1 px-2 h-auto items-center justify-center break-normal rounded-lg`}
							labelClass={`text-black dark:text-white text-xs md:text-base`}
						/>
					)}
					{cardData.averageScore && (
						<Score
							label={cardData.averageScore}
							containerClass={`flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full`}
							labelClass={`text-black dark:text-white text-xs md:text-base`}
						/>
					)}
				</div>
			)}

			<Season
				nextAiringEpisode={cardData.nextAiringEpisode}
				season={cardData.season}
				seasonYear={cardData.seasonYear}
				startDate={cardData.startDate}
				episodes={null}
				containerClass={`flex w-full h-auto justify-center items-center`}
				labelClass={`flex w-auto h-auto items-center justify-center break-normal rounded-lg text-black
				dark:text-white py-1 px-2 text-xs md:text-base`}
				countdown={false}
			/>

			{cardData.episodes && (
				<div className="flex w-full h-auto justify-center items-center">
					<div
						className="flex py-1 px-2 md:px-4 h-auto items-center justify-center bg-slate-400 dark:bg-slate-800 
					text-black dark:text-white break-normal rounded-lg text-xs md:text-base"
					>
						{cardData.episodes > 1
							? `Total Episodes: ${cardData.episodes}`
							: cardData.format ?? "Unknown"}
					</div>
				</div>
			)}

			<div className="flex flex-row flex-wrap w-auto h-auto justify-center items-center ">
				{cardData?.genres?.slice(0, 5)?.map((genre, i) => (
					<div
						key={i}
						className="flex w-auto h-auto items-center justify-center bg-gray-300 dark:bg-gray-700 text-black 
						dark:text-white break-normal rounded-3xl m-1 px-2 text-xs md:text-base"
					>
						{genre}
					</div>
				))}
			</div>
		</Gradient>
	);
};
