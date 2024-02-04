import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';

import { favorite } from 'entities/favorite';
import { useAuth } from 'entities/user';
import { AuthStatus, PlantType, RouteName } from 'shared/config';

import './styles.css';

interface Props {
	id: number;
	isFavorite: boolean;
	setFavoritePlants?: React.Dispatch<React.SetStateAction<PlantType[]>>;
}

function HeartButtonMemo({ id, isFavorite, setFavoritePlants }: Props) {
	const { authStatus } = useAuth();
	const [isAdded, setIsAdded] = useState<boolean>(isFavorite);
	const navigate = useNavigate();

	const handleClick = async (): Promise<void> => {
		if (authStatus === AuthStatus.SignedIn) {
			if (isAdded) {
				void await favorite.removeFavorite(id);
				setIsAdded(false);
				if (setFavoritePlants) {
					setFavoritePlants(p => p.filter(el => el.id !== id));
				}
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
}

export const HeartButton = memo(HeartButtonMemo);