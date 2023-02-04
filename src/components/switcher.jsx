import { useEffect, useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "@/hooks/useDarkMode";

export default function Switcher({ isDarkMode, setIsDarkMode }) {
	const [colorTheme, setTheme] = useDarkMode();

	useEffect(() => {
		setIsDarkMode(colorTheme === "light" ? true : false);
	}, [colorTheme, setIsDarkMode]);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setIsDarkMode(checked);
	};

	return <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={20} />;
}
