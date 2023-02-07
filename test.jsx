import Slider from "rc-slider";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { BsChevronExpand, BsCheck2 } from "react-icons/bs";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";

const people = [
	{ id: 1, name: "Wade Cooper" },
	{ id: 2, name: "Arlene Mccoy" },
	{ id: 3, name: "Devon Webb" },
	{ id: 4, name: "Tom Cook" },
	{ id: 5, name: "Tanya Fox" },
	{ id: 6, name: "Hellen Schmidt" },
];
export default function Home() {
	const [selected, setSelected] = useState(people[0]);
	const [query, setQuery] = useState("");

	const filteredPeople =
		query === ""
			? people
			: people.filter((person) => person.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));

	const onSliderChange = (value) => {
		// console.log(value);
	};

	const Handle = Slider.Handle;

	const handle = (props) => {
		console.log("🚀 ~ file: index.js:33 ~ handle ~ props", props);
		const { value, dragging, index, ...restProps } = props;
		console.log("🚀 ~ file: index.js:34 ~ handle ~ value", value);
		return (
			<Tooltip prefixCls="rc-slider-tooltip" overlay={value} visible={dragging} placement="top" key={index}>
				{/* <Handle value={value} {...restProps} /> */}
				<Handle value={value} {...restProps}>
					<span>{value}</span>
				</Handle>
				{/* <div className="flex h-10 w-10 bg-white">{value}</div> */}
			</Tooltip>
		);
	};

	return (
		<div className="flex flex-col h-full w-full items-center justify-center p-10 ">
			{/* <Combobox value={selected} onChange={setSelected}>
				<div className="relative mt-1 dropdown">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<Combobox.Input
							className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
							displayValue={(person) => person.name}
							onChange={(event) => setQuery(event.target.value)}
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
							className="dropdown-content menu flex flex-row flex-wrap mt-1 max-h-60 w-full overflow-auto rounded-md
					text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
					sm:text-sm bg-white dark:bg-black text-black dark:text-white"
						>
							{filteredPeople.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
							) : (
								filteredPeople.map((person) => (
									<Combobox.Option
										key={person.id}
										className={`relative w-full cursor-pointer py-2 pl-10
										hover:bg-neutral-300 hover:dark:bg-neutral-700 rounded-md`}
										value={person}
									>
										{({ selected }) => (
											<>
												<span className={`block bg-transparent truncate ${selected ? "font-medium" : "font-normal"}`}>
													{person.name}
												</span>
												{selected ? (
													<span className={`absolute bg-transparent inset-y-0 left-0 flex items-center pl-3 `}>
														<BsCheck2 className="h-5 w-5" aria-hidden="true" />
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
			</Combobox> */}

			<Slider
				className="mt-10"
				min={0}
				max={100}
				onChange={onSliderChange}
				range
				allowCross={false}
				handleRender={({ props }) => (
					<div {...props} className="tooltip bottom-[450%]" data-tip={props["aria-valuenow"]}>
						<div {...props}></div>
					</div>
				)}
				trackStyle={{ backgroundColor: "black" }}
				handleStyle={{
					backgroundColor: "black",
					borderColor: "darkgrey",
				}}
				railStyle={{ backgroundColor: "gray" }}
				dotStyle={{ borderColor: "black" }}
				activeDotStyle={{ borderColor: "black" }}
			/>
		</div>
	);
}
