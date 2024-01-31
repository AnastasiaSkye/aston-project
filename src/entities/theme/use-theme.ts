import { useContext } from 'react';
import { ThemeContext } from 'app/contexts';
import { Theme } from 'shared/config';

export function useTheme() {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = (): void => {
		const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
		document.querySelector('html')?.classList.remove(theme);
		document.querySelector('html')?.classList.add(newTheme);
		setTheme(newTheme);
	};

	return { theme, changeTheme };
}