import { HeartButton } from 'features/add-to-favorites';
import { PlantDetailsType } from 'shared/config';
import { getPlantInfo } from 'shared/lib';

import { PlantImage } from '../plant-image';

import './styles.css';

interface Props {
	plant: PlantDetailsType;
	favorites: number[];
}

export function PlantDetails({ plant, favorites }: Props) {
	return (
		<div className='plant'>
			<PlantImage src={plant.image} alt={plant.image} />
			<div>
				<h1>{plant.name}</h1>
				<div className='plant__description'>{plant.description}</div>
				<div className='plant__info-card'>
					{getPlantInfo(plant).map((el: string) =>
						<div key={el}>{el}</div>
					)}
					<HeartButton id={plant.id} isFavorite={favorites.includes(plant.id)} />
				</div>
			</div>
		</div>
	);
}