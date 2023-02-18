import { useEffect, useState } from "react";

export const CategoryCountdown = ({ remaining, episode, containerClass, labelClass }) => {
	const [time, setTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		remaining: remaining ?? 0,
	});

	useEffect(() => {
		if (time?.remaining < 0) return;

		let interval;
		setTimeout(() => {
			setTime((prev) => secondsToDhms(prev.remaining));

			interval = setInterval(() => setTime((prev) => secondsToDhms(prev.remaining)), 5000);
		}, 0);

		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className="flex gap-1 sm:gap-1 md:gap-2 w-full text-center items-center 
		justify-center tracking-tighter md:tracking-normal"
		>
			<div className={containerClass}>
				<span>
					Ep. <b>{episode ?? 0}</b> in
				</span>
			</div>
			{time.days > 0 && (
				<div className={containerClass}>
					<span className={labelClass}>
						<span style={{ "--value": time.days }}></span>
					</span>
					<span>d</span>
				</div>
			)}
			{time.hours > 0 && (
				<div className={containerClass}>
					<span className={labelClass}>
						<span style={{ "--value": time.hours }}></span>
					</span>
					<span>h</span>
				</div>
			)}
			<div className={containerClass}>
				<span className={labelClass}>
					<span style={{ "--value": time.minutes }}></span>
				</span>
				<span>m</span>
			</div>
			<div className={containerClass}>
				<span className={labelClass}>
					<span style={{ "--value": time.seconds }}></span>
				</span>
				<span>s</span>
			</div>
		</div>
	);
};

function secondsToDhms(seconds) {
	seconds = Number(seconds);
	const d = Math.floor(seconds / (3600 * 24));
	const h = Math.floor((seconds % (3600 * 24)) / 3600);
	const m = Math.floor((seconds % 3600) / 60);
	const s = Math.floor(seconds % 60);

	return { days: d, hours: h, minutes: m, seconds: s, remaining: seconds - 5 };
}
