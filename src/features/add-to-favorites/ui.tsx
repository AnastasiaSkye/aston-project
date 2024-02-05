import React, { memo, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';

import { FavoritesContext } from 'app/contexts';
import { favorite } from 'entities/favorite';
import { useAuth } from 'entities/user';
import { AuthStatus, RouteName } from 'shared/config';

import './styles.css';

interface Props {
	id: number;
	isFavorite: boolean;
}

export const HeartButton = memo(({ id, isFavorite}: Props) => {
	const { authStatus } = useAuth();
	const [isAdded, setIsAdded] = useState<boolean>(isFavorite);
	const { setFavoritesId } = useContext(FavoritesContext);
	const navigate = useNavigate();

	const removeFavoriteId = useCallback((id: number): void => {
		setFavoritesId(favorite => favorite.filter(f => f !== id));
	}, [setFavoritesId]);

	const handleClick = async (): Promise<void> => {
		if (authStatus === AuthStatus.SignedIn) {
			if (isAdded) {
				void await favorite.removeFavorite(id);
				setIsAdded(false);
				removeFavoriteId(id)
			} else {
				void await favorite.addFavorite(id);
				setIsAdded(true);
			}
		} else {
			navigate(RouteName.REGISTRATION_PAGE);
		}
	};

	return (
		<button className='heart' onClick={handleClick} data-testid='heart'>
			{isAdded ?
				<PiHeartFill size={25} data-testid='heart-add'/>
				:
				<PiHeartLight size={25} data-testid='heart-remove'/>
			}
		</button>
	);
})