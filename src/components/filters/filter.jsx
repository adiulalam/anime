import { useEffect, useMemo, useRef, useState } from "react";
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
		<li className="flex w-full rounded-box bg-black dark:bg-white">
			<div
				ref={listRef}
				className="whitespace-nowrap w-full overflow-hidden text-white dark:text-black"
			>
				<div className={`flex flex-row gap-2 ${isScrollingText ? "animate-marquee" : ""}`}>
					<p>
						{element?.title?.userPreferred}{" "}
						{element?.seasonYear ? `(${element?.seasonYear})` : ""}
					</p>
					{element?.averageScore ? <p>• Score: {element?.averageScore}</p> : <></>}
					{element?.status ? <p>• Status: {element?.status}</p> : <></>}
					{element?.episodes ? (
						element?.episodes > 1 ? (
							<p>• Episodes: {element?.episodes}</p>
						) : (
							<p>• {element?.format}</p>
						)
					) : (
						<></>
					)}
				</div>
			</div>
		</li>
	);
};

const Filter = () => {
	const [search, { loading, data }] = useLazyQuery(getFilterResults);

	const [value, setValue] = useState("");

	const debouncedSearch = useMemo(() => _.debounce(search, 500), [search]);

	const handleChange = useCallback(
		(e) => {
			setValue({ variables: { search: e.target.value } });
			debouncedSearch({ variables: { search: e.target.value } });
		},
		[debouncedSearch]
	);

	// const debouncer = useCallback(_.debounce(search, 500), []);

	const openModal = (value) => {
		console.log("onSelect", value);
	};

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="dropdown flex flex-col h-full md:w-[40rem] w-full rounded-lg">
				<input
					className="flex h-full w-full rounded-lg p-2 dark:bg-white bg-black"
					type={"text"}
					placeholder={"Search.."}
					onChange={handleChange}
				></input>
				<div className="flex w-full ">
					<ul
						tabIndex={0}
						className="dropdown-content flex flex-col gap-1 
						menu p-2 shadow w-full bg-white dark:bg-black rounded-box"
						style={{
							opacity: _.isEmpty(data?.filter?.media) ? "0" : "1",
							transition: "opacity .5s ease-in-out",
						}}
					>
						{value?.variables?.search && loading && (
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
