import React from 'react';

import { PlantCard } from 'entities/plant';
import { PlantType } from 'shared/config';

import './styles.css';

interface Props {
	title: string;
	plants: PlantType[];
	favoritesId: number[];
	setFavoritePlants?: React.Dispatch<React.SetStateAction<PlantType[]>>;
}

export function CardList({ title, plants, favoritesId, setFavoritePlants }: Props) {
	return (
		<div className='card-list' data-testid='card-list'>
			<div className='card-list__div'>
				<h1 data-testid='title'>{title}</h1>
				<div>
					Here everyone can find the ideal plant that matches your preferences
				</div>
			</div>
			<section className='card-list__section'>
				{plants.map((item: PlantType) =>
					<PlantCard key={item.id} plant={item} isFavorite={favoritesId.includes(item.id)} setFavoritePlants={setFavoritePlants} />
				)}
			</section>
			{plants?.length === 0 &&
				<h2>Nothing found</h2>
			}
		</div>
	);
}