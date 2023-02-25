import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

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
