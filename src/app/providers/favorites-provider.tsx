import React, { useMemo, useState } from 'react';

import { FavoritesContext } from 'app/contexts';

interface Props {
	children: React.ReactNode;
}

export function FavoritesProvider({ children }: Props) {
	const [favoritesId, setFavoritesId] = useState<number[]>([]);

	const defaultValue = useMemo(() => ({
		favoritesId,
		setFavoritesId
	}), [favoritesId]);

	return (
		<FavoritesContext.Provider value={defaultValue}>
			{children}
		</FavoritesContext.Provider>
	);
}