/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			display: ["group-hover", "hover"],
			animation: {
				marquee: "marquee 10s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(10%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		base: false,
	},
};
