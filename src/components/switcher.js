import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(null);

	useEffect(() => {
		setDarkSide(colorTheme === "light" ? true : false);
	}, [colorTheme]);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={50} />
		</>
	);
}
