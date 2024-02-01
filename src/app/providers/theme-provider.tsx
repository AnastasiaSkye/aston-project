import React, { useEffect, useMemo, useState } from 'react';

import { ThemeContext } from 'app/contexts';
import { Theme } from 'shared/config';
import { addThemeToHTML, getCurrentTheme } from 'shared/lib';

interface Props {
	children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
	const [theme, setTheme] = useState<Theme>(Theme.Light);

	useEffect(() => {
		const currentTheme = getCurrentTheme();
		addThemeToHTML(currentTheme);
	}, []);

	const defaultValue = useMemo(() => ({
		theme,
		setTheme
	}), [theme]);

	return (
		<ThemeContext.Provider value={defaultValue}>
			{children}
		</ThemeContext.Provider>
	);
}