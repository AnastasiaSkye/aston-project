import React, { memo } from 'react';
import { PiHeartFill, PiHeartLight } from 'react-icons/pi';

import { useFavorite } from 'entities/favorite';

import './styles.css';

interface Props {
	id: number;
}

export const HeartButton = memo(({ id }: Props) => {
	const { isFavorite, changeFavorite } = useFavorite(id);

	return (
		<button className='heart' onClick={changeFavorite} data-testid='heart'>
			{isFavorite ?
				<PiHeartFill size={25} data-testid='heart-add' />
				:
				<PiHeartLight size={25} data-testid='heart-remove' />
			}
		</button>
	);
});