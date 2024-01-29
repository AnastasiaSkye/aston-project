import React from 'react';
import { NavLink } from 'react-router-dom';

import { PlantImage } from 'entities/plant';
import { RouteName } from 'shared/config';
import { useGetPlantsByNameQuery } from 'shared/api';

import './styles.css';

interface Props {
	query: string;
}

export function SuggestionsList({ query }: Props) {
	const { data: suggestionsList = [], isLoading } = useGetPlantsByNameQuery(query);

	return (
		<>
			{((isLoading) || (!isLoading && suggestionsList.length !== 0)) &&
				<ul className='suggestions-list'>
					{isLoading ?
						<li>Loading...</li>
						:
						<>
							{suggestionsList.map(el =>
								<li key={el.id}>
									<NavLink to={RouteName.PlANT_PAGE + '/' + el.id}>
										<PlantImage src={el.image} alt={el.name} className='height-50px' />
										<div className='suggestions-list__text'>{el.name}</div>
									</NavLink>
								</li>
							)}
						</>
					}
				</ul>
			}
		</>
	);
}