import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function getSliderMarks(min, max, interval) {
	const marks = {};
	for (let i = min; i <= max; i += interval) {
		marks[i] = i;
	}
	marks[max] = max;

	return marks;
}

export const FilterSlider = ({ min, max, interval, label, range = false }) => {
	function log(value) {
		console.log(value);
	}

	return (
		<div className="flex flex-col w-full h-full">
			<label className={"text-white dark:text-black mb-3"}>{label}</label>
			<Slider
				range={range}
				allowCross={false}
				defaultValue={[min, max]}
				min={min}
				max={max}
				onAfterChange={log}
				trackStyle={{ backgroundColor: "black" }}
				handleStyle={{
					backgroundColor: "black",
					borderColor: "gray",
				}}
				railStyle={{ backgroundColor: "gray" }}
				dotStyle={{ borderColor: "black" }}
				activeDotStyle={{ borderColor: "black" }}
				marks={getSliderMarks(min, max, interval)}
			/>
		</div>
	);
};
