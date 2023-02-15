import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const FilterSearchList = ({ list }) => {
	const listRef = useRef(null);
	const [isScrollingText, setIsScrollingText] = useState(false);

	useEffect(() => {
		setIsScrollingText(listRef?.current?.offsetWidth < listRef?.current?.scrollWidth);
	}, [listRef]);

	return (
		<li className="flex w-full h-full rounded-box bg-black dark:bg-white ">
			<Link
				href={`/anime/${list.id}`}
				className="flex h-full w-full focus:bg-neutral-700	dark:focus:bg-neutral-300"
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
						{list?.averageScore ? <p>• Score: {list?.averageScore}</p> : <></>}
						{list?.status ? <p>• Status: {list?.status}</p> : <></>}
						{list?.episodes ? (
							list?.episodes > 1 ? (
								<p>• Episodes: {list?.episodes}</p>
							) : (
								<p>• {list?.format}</p>
							)
						) : (
							<></>
						)}
					</div>
				</div>
			</Link>
		</li>
	);
};
