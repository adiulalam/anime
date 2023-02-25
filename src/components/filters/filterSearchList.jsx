import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { formatMap } from "@/utils/constMap";

export const FilterSearchList = ({ list, setShowDropdown }) => {
	const listRef = useRef(null);
	const [isScrollingText, setIsScrollingText] = useState(false);

	useEffect(() => {
		setIsScrollingText(listRef?.current?.offsetWidth < listRef?.current?.scrollWidth);
	}, [listRef]);

	return (
		<li className="flex w-full h-full rounded-box bg-black dark:bg-white ">
			<Link
				href={`/${list.id}`}
				className="flex h-full w-full focus:bg-neutral-700	dark:focus:bg-neutral-300"
				onClick={() => setShowDropdown(false)}
			>
				<div
					ref={listRef}
					className="whitespace-nowrap w-full h-full overflow-hidden text-white dark:text-black"
				>
					<div
						className={`flex flex-row gap-2 ${
							isScrollingText ? "animate-marquee" : ""
						}`}
					>
						<p>
							{list?.title?.userPreferred}{" "}
							{list?.seasonYear
								? `(${list?.seasonYear})`
								: list?.startDate.year
								? `(${list?.startDate.year})`
								: ""}
						</p>
						{list?.format ? <p>• {formatMap[list?.type] ?? list?.type}</p> : null}
						{list?.averageScore ? <p>• Score: {list?.averageScore}</p> : null}
						{list?.status ? <p>• Status: {list?.status}</p> : null}
						{list?.episodes ? (
							list?.episodes > 1 ? (
								<p>• Episodes: {list?.episodes}</p>
							) : (
								<p>• {list?.format}</p>
							)
						) : null}
					</div>
				</div>
			</Link>
		</li>
	);
};
