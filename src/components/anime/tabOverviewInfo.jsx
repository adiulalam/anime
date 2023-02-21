import { formatMap, statusMap } from "@/utils/constMap";
import humanizeDuration from "humanize-duration";
import dayjs from "dayjs";

export const TabOverviewInfo = ({ data }) => {
	const overviewTabInfoMap = {
		Romaji: data.title.romaji,
		English: data.title.english,
		Native: data.title.native,
		Score: data.averageScore,
		Status: statusMap[data.status].name,
		[!_.isEmpty(data.nextAiringEpisode)
			? "Next Episode"
			: !_.isNil(data.episodes)
			? "Total Episodes"
			: "Episodes"]: !_.isEmpty(data.nextAiringEpisode)
			? `Episode ${data.nextAiringEpisode.episode} in ${humanizeDuration(
					data.nextAiringEpisode.timeUntilAiring * 1000 ?? 0,
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
			: !_.isNil(data.episodes)
			? data.episodes
			: null,
		Format: formatMap[data.format],
		Season: data.season,
		Year: data.seasonYear,
		"Start Date":
			data.startDate.year && data.startDate.month && data.startDate.day
				? dayjs(
						`${data.startDate.year}-${data.startDate.month}-${data.startDate.day}`
				  ).format("DD-MMM-YYYY")
				: null,
		"End Date":
			data.endDate.year && data.endDate.month && data.endDate.day
				? dayjs(`${data.endDate.year}-${data.endDate.month}-${data.endDate.day}`).format(
						"DD-MMM-YYYY"
				  )
				: null,
		Duration: !_.isNil(data.duration) ? `${data.duration} mins` : null,
		Source: data.source,
	};

	return (
		<div
			className="flex flex-row flex-wrap w-full h-full gap-2  
		text-center items-center justify-evenly rounded-xl bg-white p-3 "
		>
			{Object.entries(overviewTabInfoMap).map(
				([key, value], index) =>
					value && (
						<div key={index} className="flex flex-col w-auto h-auto px-2 border-b-2">
							<h1 className="text-black text-lg font-medium">{key}</h1>
							<h1 className="text-black">{value.toString()}</h1>
						</div>
					)
			)}
		</div>
	);
};
