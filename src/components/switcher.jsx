import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export const Switcher = () => {
	const { theme, setTheme } = useTheme();

	const toggleDarkMode = (checked) => {
		setTheme(checked ? "dark" : "light");
	};

	return (
		<DarkModeSwitch
			checked={theme === "dark" || theme === "system"}
			onChange={toggleDarkMode}
			size={20}
		/>
	);
};
