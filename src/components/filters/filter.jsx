import { AutoComplete, Input } from "antd";
import { useState } from "react";
import { GoSettings } from "react-icons/go";

const Filter = () => {
	const [options, setOptions] = useState([]);
	// console.log("🚀 ~ file: filter.jsx:7 ~ Filter ~ options", options);
	const handleSearch = (value) => {
		setOptions(value ? searchResult(value) : []);
	};
	const onSelect = (value) => {
		console.log("onSelect", value);
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-full md:w-[40rem] w-full rounded-lg">
				<AutoComplete className="h-full w-full" options={options} onSelect={onSelect} onSearch={handleSearch}>
					<Input.Search size="large" placeholder={"Search.."} enterButton />
				</AutoComplete>
			</div>
		</div>
	);
};

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
	new Array(getRandomInt(5))
		.join(".")
		.split(".")
		.map((_, idx) => {
			const category = `${query}${idx}`;
			return {
				value: category,
				label: <Label query={query} category={category} />,
			};
		});

const Label = ({ query, category }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<span>
				Found {query} on{" "}
				<a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
					{category}
				</a>
			</span>
			<span>{getRandomInt(200, 100)} results</span>
		</div>
	);
};

export default Filter;
