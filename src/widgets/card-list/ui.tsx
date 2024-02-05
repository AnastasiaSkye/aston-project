import React from 'react';

import './styles.css';

interface Props {
	title: string;
	isEmpty: boolean;
	children: React.ReactNode;
}

export function CardList({ title, children, isEmpty }: Props) {
	return (
		<div className='card-list' data-testid='card-list'>
			<div className='card-list__div'>
				<h1 data-testid='title'>{title}</h1>
				<div>
					Here everyone can find the ideal plant that matches your preferences
				</div>
			</div>
			<section className='card-list__section'>
				{children}
			</section>
			{isEmpty &&
				<h2>Nothing found</h2>
			}
		</div>
	);
}