import { GoSettings } from "react-icons/go";

const Filter = () => {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-full md:w-[40rem] w-full bg-white rounded-lg">
				<input
					className="flex h-full w-full rounded-lg p-2"
					type={"text"}
					placeholder={"Search.."}
				></input>
			</div>
			<button type="button" onClick={openModal}>
				<GoSettings className="flex h-full w-10 fill-white" />
			</button>
		</div>
	);
};

export default Filter;
