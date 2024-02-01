import { Theme } from 'shared/config';

export const getCurrentTheme = (): Theme =>
	localStorage.getItem('current-theme') as Theme || Theme.Light;

export const saveCurrentTheme = (theme: Theme): void => {
	localStorage.setItem('current-theme', theme);
};

export const addThemeToHTML = (theme: Theme): void => {
	document.querySelector('html')?.classList.add(theme);
};

export const removeThemeToHTML = (theme: Theme): void => {
	document.querySelector('html')?.classList.remove(theme);
};