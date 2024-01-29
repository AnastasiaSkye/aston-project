import { NavLink } from 'react-router-dom';

import { Heart } from 'features/add-to-favorites';
import { PlantType, RouteName } from 'shared/config';
import { getPlantShortInfo } from 'shared/lib';

import { PlantImage } from '../plant-image';

import './styles.css';

interface Props {
	plant: PlantType;
}

export function PlantCard({ plant }: Props) {
	return (
		<div className='plant-card'>
			<NavLink to={RouteName.PlANT_PAGE + '/' + plant.id}>
				<PlantImage src={plant.image} alt={plant.image} />
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
					<Heart />
				</div>
			</div>
		</div>
	);
}