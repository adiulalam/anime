import _ from "lodash";
import { FilterSearchList } from "./filterSearchList";

export const FilterSearchBar = ({ handleChange, searchData, value, loading }) => {
	return (
		<div className="dropdown flex flex-col h-full md:w-[40rem] w-full rounded-lg">
			<input
				className="flex h-full w-full rounded-lg p-2 dark:bg-white bg-black"
				type={"text"}
				placeholder={"Search.."}
				onChange={(e) => handleChange(e)}
			></input>
			<div className="flex w-full ">
				<ul
					tabIndex={0}
					className="dropdown-content flex flex-col gap-1 
						menu p-2 shadow w-full bg-white dark:bg-black rounded-box"
					style={{
						opacity: _.isEmpty(searchData?.media) ? "0" : "1",
						transition: "opacity .5s ease-in-out",
					}}
				>
					{value?.search && loading && (
						<li>
							<a>loading..</a>
						</li>
					)}
					{searchData?.media?.map((element, index) => (
						<FilterSearchList key={index} list={element} />
					))}
				</ul>
			</div>
		</div>
	);
};
