import { useContext } from 'react';

import { ThemeContext } from 'app/contexts';
import { Theme } from 'shared/config';
import { addThemeToHTML, removeThemeToHTML, saveCurrentTheme } from 'shared/lib';

export function useTheme() {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = (): void => {
		const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
		removeThemeToHTML(theme);
		addThemeToHTML(newTheme);
		saveCurrentTheme(newTheme);
		setTheme(newTheme);
	};

	return { theme, changeTheme };
}