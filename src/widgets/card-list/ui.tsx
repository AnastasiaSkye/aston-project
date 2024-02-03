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
		<div className='card-list'>
			<div className='card-list__div'>
				<h1>{title}</h1>
				<div>
					Here everyone can find the ideal plant that matches your preferences
				</div>
			</div>
			<section className='card-list__section'>
				{plants.map((item: PlantType) =>
					<PlantCard key={item.id} plant={item} favoritesId={favoritesId} setFavoritePlants={setFavoritePlants} />
				)}
			</section>
			{plants?.length === 0 &&
				<h2>Nothing found</h2>
			}
		</div>
	);
}