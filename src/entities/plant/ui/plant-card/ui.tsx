import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { HeartButton } from 'features/add-to-favorites';
import { PlantType, RouteName } from 'shared/config';
import { getPlantShortInfo } from 'shared/lib';

import { PlantImage } from '../plant-image';

import './styles.css';

interface Props {
	plant: PlantType;
}

export const PlantCard = memo(({ plant }: Props) =>
	(
		<div className='plant-card' data-testid='plant-card'>
			<NavLink to={RouteName.PlANT_PAGE + '/' + plant.id}>
				<PlantImage src={plant.image} alt={plant.name} />
			</NavLink>
			<div className='plant-card__div'>
				<NavLink to={RouteName.PlANT_PAGE + '/' + plant.id}>
					<h3>{plant.name}</h3>
				</NavLink>
				<div className='plant-card__info'>
					<div>
						{getPlantShortInfo(plant).map((el: string) =>
							<div key={el}>{el}</div>
						)}
					</div>
					<HeartButton id={plant.id} />
				</div>
			</div>
		</div>
	)
);