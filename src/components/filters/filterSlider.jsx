import Slider from "rc-slider";
import _ from "lodash";
import { useTheme } from "next-themes";
import "rc-slider/assets/index.css";

export const FilterSlider = ({
	min,
	max,
	interval,
	label,
	range = false,
	sliderMap,
	filterValue,
	setFilterValue,
}) => {
	const { theme } = useTheme();
	const isDarkMode = theme === "dark" || theme === "system";

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
				trackStyle={{ backgroundColor: isDarkMode ? "black" : "white" }}
				handleStyle={{
					backgroundColor: isDarkMode ? "black" : "white",
					borderColor: isDarkMode ? "darkgrey" : "lightgrey",
				}}
				railStyle={{ backgroundColor: isDarkMode ? "darkgrey" : "lightgrey" }}
				dotStyle={{
					backgroundColor: isDarkMode ? "white" : "black",
					borderColor: isDarkMode ? "black" : "white",
				}}
				activeDotStyle={{ borderColor: isDarkMode ? "black" : "white" }}
				marks={getSliderMarks(min, max, interval)}
				handleRender={({ props }) => (
					<div className="flex w-full h-full ">
						<div
							{...props}
							data-tip={props["aria-valuenow"]}
							className="tooltip tooltip-white before:bg-white dark:before:bg-black before:text-black dark:before:text-white"
						>
							<div {...props}></div>
						</div>
					</div>
				)}
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

		const defaultMinValue = _.isNil(_.get(filterValue, minMap))
			? min
			: _.get(filterValue, minMap);

		const defaultMaxValue = _.isNil(_.get(filterValue, maxMap))
			? max
			: _.get(filterValue, maxMap);

		return [defaultMinValue, defaultMaxValue];
	} else {
		const { minMap } = sliderMap;

		const defaultValue = _.isNil(_.get(filterValue, minMap)) ? min : _.get(filterValue, minMap);

		return defaultValue;
	}
};
