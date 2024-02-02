import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';

import { favorite } from 'entities/favorite';
import { useAuth } from 'entities/user';
import { AuthStatus, PlantType, RouteName } from 'shared/config';
import { usePlant } from 'shared/lib';

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
	const { getPlantsById } = usePlant();

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
				if (setFavoritePlants) {
					const favoritePlant = await getPlantsById(id);
					favoritePlant && setFavoritePlants(p => [
						...p,
						favoritePlant
					]);
				}
			}
		} else {
			navigate(RouteName.REGISTRATION_PAGE);
		}
	};

	return (
		<button className='heart' onClick={handleClick}>
			{isAdded ?
				<PiHeartFill size={25} />
				:
				<PiHeartLight size={25} />
			}
		</button>
	);
}

export const HeartButton = memo(HeartButtonMemo);