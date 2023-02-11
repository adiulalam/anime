import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsChevronExpand, BsCheck2 } from "react-icons/bs";
import _ from "lodash";
import { filterMap } from "@/utils/constMap";

export const FilterAutocomplete = ({ filterValue, setFilterValue, filterKey }) => {
	const { filterArrayKeys, filterArrayMap, label } = filterMap[filterKey];
	const [query, setQuery] = useState("");

	const filteredQuery =
		query === ""
			? filterArrayKeys
			: filterArrayKeys.filter((key) =>
					(!_.isNil(filterArrayMap) ? filterArrayMap[key] : key)
						.toString()
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<Combobox
			value={_.get(filterValue, filterKey)}
			onChange={(e) => setFilterValue((prev) => ({ ..._.set(prev, filterKey, e) }))}
			multiple={_.isArray(_.get(filterValue, filterKey))}
			nullable={true}
		>
			{({ value }) => (
				<div className="relative dropdown">
					<Combobox.Label className={"text-white dark:text-black"}>
						{label}
					</Combobox.Label>
					{!_.isEmpty(value) && (
						<div
							className={`relative flex flex-row gap-1 overflow-auto w-full whitespace-nowrap text-black  dark:text-white ${
								_.isArray(value) ? "pb-1 mb-1" : ""
							}`}
						>
							{_.isArray(value) &&
								value.map((key, index) => (
									<div
										key={index}
										className="flex flex-col px-2 rounded-3xl bg-white dark:bg-black"
									>
										{!_.isNil(filterArrayMap)
											? filterArrayMap[key]
											: key.toString().toUpperCase()}
									</div>
								))}
						</div>
					)}
					<div
						className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md 
						focus:outline-none sm:text-sm bg-white dark:bg-black text-black dark:text-white"
					>
						<Combobox.Input
							className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 
							focus:ring-0 focus:outline-none bg-inherit"
							displayValue={(people) =>
								_.isArray(people)
									? query
									: !_.isNil(filterArrayMap)
									? filterArrayMap[people]
									: people
							}
							onChange={(event) => setQuery(event.target.value)}
							placeholder={"Search.."}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<BsChevronExpand className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options
							className="dropdown-content menu flex flex-row flex-wrap mt-1 max-h-60 w-full overflow-auto 
							rounded-md text-base shadow-lg ring-1 ring-black dark:ring-white ring-opacity-50 focus:outline-none 
							sm:text-sm bg-white dark:bg-black text-black dark:text-white"
						>
							{_.isEmpty(filteredQuery) && query !== "" ? (
								<div className="relative cursor-default select-none px-4 py-2">
									Nothing found.
								</div>
							) : (
								filteredQuery.map((element, index) => (
									<Combobox.Option
										key={index}
										className={`relative w-full cursor-pointer pl-8  
										hover:bg-neutral-300 hover:dark:bg-neutral-700 rounded-md`}
										value={element}
										onClick={() => setQuery("")}
									>
										{({ selected }) => (
											<>
												<span
													className={`block bg-transparent w-full break-normal ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{!_.isNil(filterArrayMap)
														? filterArrayMap[element]
														: element.toString().toUpperCase()}
												</span>
												{selected ? (
													<span
														className={`absolute bg-transparent inset-y-0 left-0 flex items-center pl-3 `}
													>
														<BsCheck2
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			)}
		</Combobox>
	);
};
