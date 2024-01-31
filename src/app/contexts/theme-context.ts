import { createContext } from 'react';
import { Theme } from 'shared/config';


interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: Theme.Light,
	setTheme: () => {
	}
});