import Slider from "rc-slider";
import _ from "lodash";
import "rc-slider/assets/index.css";

export const FilterSlider = ({ min, max, interval, label, range = false, sliderMap, filterValue, setFilterValue }) => {
	const onChangeEvent = (value) => {
		if (range) {
			const { minMap, maxMap } = sliderMap;
			const minimum = value[0];
			const maximum = value[1];

			setFilterValue((prev) => ({
				...prev,
				[minMap]: minimum <= min ? null : minimum,
				[maxMap]: maximum >= max ? null : maximum,
			}));
		} else {
			const { minMap } = sliderMap;

			setFilterValue((prev) => ({
				...prev,
				[minMap]: value <= min ? null : value,
			}));
		}
	};

	return (
		<div className="flex flex-col w-full h-full">
			<label className={"text-white dark:text-black mb-3"}>{label}</label>
			<Slider
				range={range}
				allowCross={false}
				defaultValue={getDefaultValues(range, sliderMap, filterValue, min, max)}
				min={min}
				max={max}
				onAfterChange={onChangeEvent}
				trackStyle={{ backgroundColor: "black" }}
				handleStyle={{
					backgroundColor: "black",
					borderColor: "darkgrey",
				}}
				railStyle={{ backgroundColor: "gray" }}
				dotStyle={{ borderColor: "black" }}
				activeDotStyle={{ borderColor: "black" }}
				marks={getSliderMarks(min, max, interval)}
				// handleRender={({ props }) => (
				// 	<div {...props} className="tooltip bottom-[450%]" data-tip={props["aria-valuenow"]}>
				// 		<div {...props}></div>
				// 	</div>
				// )}
			/>
		</div>
	);
};

const getSliderMarks = (min, max, interval) => {
	const marks = {};
	for (let i = min; i <= max; i += interval) {
		marks[i] = i;
	}
	marks[max] = max;

	return marks;
};

const getDefaultValues = (range, sliderMap, filterValue, min, max = 0) => {
	if (range) {
		const { minMap, maxMap } = sliderMap;

		const defaultMinValue = _.isNil(_.get(filterValue, minMap)) ? min : _.get(filterValue, minMap);

		const defaultMaxValue = _.isNil(_.get(filterValue, maxMap)) ? max : _.get(filterValue, maxMap);

		return [defaultMinValue, defaultMaxValue];
	} else {
		const { minMap } = sliderMap;

		const defaultValue = _.isNil(_.get(filterValue, minMap)) ? min : _.get(filterValue, minMap);

		return defaultValue;
	}
};
