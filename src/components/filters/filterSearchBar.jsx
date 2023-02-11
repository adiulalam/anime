import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import { FilterSearchList } from "./filterSearchList";
import { BsSearch } from "react-icons/bs";

export const FilterSearchBar = ({
	searchData,
	filterValue,
	setFilterValue,
	loading,
	filterKey,
}) => {
	console.log(!_.isEmpty(filterValue[filterKey]) && _.isEmpty(searchData?.media));
	return (
		<div className="dropdown flex flex-col h-full md:w-[40rem] w-full rounded-lg">
			<div className="flex relative w-full h-full pb-1">
				<BsSearch className="absolute top-4 left-2 h-4 w-4 dark:fill-black fill-white " />
				<input
					className="flex pl-10 h-full w-full rounded-lg p-2 dark:bg-white bg-black text-white dark:text-black"
					type={"text"}
					placeholder={"Search.."}
					onChange={(e) =>
						setFilterValue((prev) => ({ ...prev, [filterKey]: e.target.value }))
					}
				></input>
			</div>
			<div className="flex w-full">
				<ul
					tabIndex={0}
					className="dropdown-content flex flex-col gap-1
						menu p-2 shadow w-full bg-white dark:bg-black rounded-box "
					style={{
						opacity:
							_.isEmpty(filterValue[filterKey]) && _.isEmpty(searchData?.media)
								? "0"
								: "1",
						transition: "opacity .5s ease-in-out",
					}}
				>
					{filterValue[filterKey] && loading ? (
						<li className="flex w-full rounded-box bg-black dark:bg-white">
							<Skeleton
								className="flex h-full w-full items-center bg-white dark:bg-black"
								highlightColor="#4444"
							/>
						</li>
					) : !_.isEmpty(filterValue[filterKey]) && _.isEmpty(searchData?.media) ? (
						<li className="flex w-full h-full rounded-box ">
							<div className="flex h-full w-full focus:bg-neutral-700 dark:focus:bg-neutral-300 cursor-default bg-black dark:bg-white ">
								<div className="flex whitespace-nowrap w-full h-full overflow-hidden text-white dark:text-black ">
									<div className={`flex flex-row gap-2`}>
										<p>Nothing found...</p>
									</div>
								</div>
							</div>
						</li>
					) : (
						searchData?.media?.map((element, index) => (
							<FilterSearchList key={index} list={element} />
						))
					)}
				</ul>
			</div>
		</div>
	);
};
