import React from 'react';

import { PlantCard } from 'entities/plant';
import { PlantType } from 'shared/config';

import './styles.css';

interface Props {
	title: string;
	data: PlantType[];
	favorites: number[];
	setFavoritePlants?: React.Dispatch<React.SetStateAction<PlantType[]>>;
}

export function CardList({ title, data, favorites, setFavoritePlants }: Props) {
	return (
		<div className='card-list'>
			<div className='card-list__div'>
				<h1>{title}</h1>
				<div>
					Here everyone can find the ideal plant that matches your preferences
				</div>
			</div>
			<section className='card-list__section'>
				{data.map((item: PlantType) =>
					<PlantCard key={item.id} plant={item} favorites={favorites} setFavoritePlants={setFavoritePlants} />
				)}
			</section>
			{data?.length === 0 &&
				<h2>Nothing found</h2>
			}
		</div>
	);
}