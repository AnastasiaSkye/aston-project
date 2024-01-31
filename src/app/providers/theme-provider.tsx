import React, { useMemo, useState } from 'react';
import { ThemeContext } from 'app/contexts';
import { Theme } from 'shared/config'

interface Props {
	children: React.ReactNode
}

export function ThemeProvider({ children } : Props)  {
	const [theme, setTheme] = useState<Theme>(() => {
		document.querySelector('html')?.classList.add(Theme.Light);
		return Theme.Light;
	});

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