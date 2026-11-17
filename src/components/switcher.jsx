import { useId } from "react";
import { useTheme } from "next-themes";

const motion =
	"transition-[transform,opacity,r] duration-[600ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] motion-reduce:transition-none";

const RAYS = [
	[12, 1, 12, 3],
	[12, 21, 12, 23],
	[4.22, 4.22, 5.64, 5.64],
	[18.36, 18.36, 19.78, 19.78],
	[1, 12, 3, 12],
	[21, 12, 23, 12],
	[4.22, 19.78, 5.64, 18.36],
	[18.36, 5.64, 19.78, 4.22],
];

const DarkModeSwitch = ({ checked, onChange, size = 24 }) => {
	const maskId = `theme-toggle-mask-${useId().replace(/[^\w-]/g, "")}`;
	const color = checked ? "white" : "black";
	const radius = checked ? 9 : 5;

	return (
		<button
			type="button"
			onClick={() => onChange(!checked)}
			aria-label={checked ? "Switch to light mode" : "Switch to dark mode"}
			className="inline-flex"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
				className={motion}
				style={{ transform: `rotate(${checked ? 40 : 90}deg)` }}
			>
				<mask id={maskId}>
					<rect x="0" y="0" width="24" height="24" fill="white" />
					<circle
						cx="12"
						cy="5.52"
						r="9"
						fill="black"
						className={motion}
						style={{ transform: checked ? "none" : "translate(12px, -5.52px)" }}
					/>
				</mask>
				<circle
					cx="12"
					cy="12"
					r={radius}
					fill={color}
					mask={`url(#${maskId})`}
					className={motion}
					style={{ r: radius }}
				/>
				<g className={motion} style={{ opacity: checked ? 0 : 1 }}>
					{RAYS.map(([x1, y1, x2, y2]) => (
						<line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
					))}
				</g>
			</svg>
		</button>
	);
};

export const Switcher = () => {
	const { theme, setTheme, systemTheme } = useTheme();

	const toggleDarkMode = (checked) => {
		setTheme(checked ? "dark" : "light");
	};

	return (
		<DarkModeSwitch
			checked={theme === "dark" || (theme === "system" && systemTheme === "dark")}
			onChange={toggleDarkMode}
			size={20}
		/>
	);
};
