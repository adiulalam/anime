import { CategoryCountdown } from "@/components/category/categoryCountdown";
import { seasonalMap } from "@/utils/constMap";
import humanizeDuration from "humanize-duration";

export const Season = ({
	nextAiringEpisode,
	season,
	seasonYear,
	startDate,
	episodes,
	format,
	type,
	containerClass = "",
	labelClass = "",
	countdownContainerClass = "",
	countdownLabelClass = "",
	countdown = false,
}) => {
	return (
		<div className={containerClass}>
			<div
				className={`${
					season ? seasonalMap[season] : "bg-gray-300 dark:bg-gray-800"
				} ${labelClass}`}
			>
				{!_.isEmpty(nextAiringEpisode) ? (
					countdown ? (
						<CategoryCountdown
							episode={nextAiringEpisode.episode}
							remaining={nextAiringEpisode.timeUntilAiring ?? 0}
							containerClass={countdownContainerClass}
							labelClass={countdownLabelClass}
						/>
					) : (
						`Episode ${nextAiringEpisode.episode} in ${humanizeDuration(
							nextAiringEpisode.timeUntilAiring * 1000 ?? 0,
							{
								language: "shortEn",
								languages: {
									shortEn: {
										y: () => "y",
										mo: () => "mo",
										w: () => "w",
										d: () => "d",
										h: () => "h",
										m: () => "m",
										s: () => "s",
										ms: () => "ms",
									},
								},
								largest: 2,
								spacer: "",
							}
						)}`
					)
				) : season || seasonYear || format || type || episodes || startDate.year ? (
					`${season ?? format ?? type ?? ""} ${seasonYear ?? startDate.year ?? ""} ${
						episodes ? `(${episodes} Episodes)` : ""
					}`
				) : (
					"TBA"
				)}
			</div>
		</div>
	);
};
