import { useEffect, useRef, useState } from "react";
import { GoSettings } from "react-icons/go";
import { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import _ from "lodash";
import classNames from "classnames";
import { getFilterResults } from "@/services/queries";

const SearchList = ({ element }) => {
	const listRef = useRef(null);
	const [isScrollingText, setIsScrollingText] = useState(false);

	useEffect(() => {
		setIsScrollingText(listRef?.current?.offsetWidth < listRef?.current?.scrollWidth);
	}, [listRef]);

	return (
		<li className="flex">
			<div ref={listRef} className="whitespace-nowrap overflow-hidden">
				{isScrollingText ? (
					<marquee>{element?.title?.userPreferred}</marquee>
				) : (
					<p>{element?.title?.userPreferred}</p>
				)}
			</div>
		</li>
	);
};

const Filter = () => {
	const [search, { loading, data }] = useLazyQuery(getFilterResults);

	const debouncer = useCallback(_.debounce(search, 500), []);

	const openModal = (value) => {
		console.log("onSelect", value);
	};

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="dropdown dropdown-open flex flex-col h-full md:w-[40rem] w-full rounded-lg">
				<input
					className="flex h-full w-full rounded-lg p-2 dark:bg-white bg-black"
					type={"text"}
					placeholder={"Search.."}
					onChange={(e) => debouncer({ variables: { search: e.target.value } })}
				></input>
				<div className="flex w-full">
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
						style={{
							opacity: _.isEmpty(data?.filter?.media) ? "0" : "1",
							transition: "opacity .5s ease-in-out",
						}}
					>
						{loading && (
							<li>
								<a>loading..</a>
							</li>
						)}
						{data?.filter?.media?.map((element, index) => (
							<SearchList key={index} element={element} />
						))}
					</ul>
				</div>
			</div>
			<button type="button" onClick={openModal}>
				<GoSettings className="flex h-full w-10 dark:fill-white fill-black" />
			</button>
		</div>
	);
};

export default Filter;
