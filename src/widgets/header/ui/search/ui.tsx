import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';

import { RouteName } from 'shared/config';
import { Input } from 'shared/ui';

import type { FormEvent } from 'react';

import './styles.css';

export function Search() {
	const [value, setValue] = useState('');
	const [isOpen, setIsOpen] = useState(true);
	const navigate = useNavigate()
	// TODO: заменить на данные с api
	const suggestionsList = [{id: 1, name: 'Цветок'}];

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		navigate(RouteName.SEARCH_PAGE + '?query=' + value)
	}

	// TODO: переместить form на features/search
	return (
		<div className='header__search'>
			<form onSubmit={handleSubmit}>
				<Input placeholder='Enter a search query'
					   onChange={e => setValue(e.target.value)}
					   onClick={() => setIsOpen(true)}
				/>
				<NavLink to={RouteName.SEARCH_PAGE + '?query=' + value}>
					<IoSearch size={20} className='header__search-icon' />
				</NavLink>
				{value && isOpen &&
					<ul>
						{
							suggestionsList.map(el =>
								<li key={el.id}>
									<NavLink to={RouteName.CARD_PAGE + '/' + el.id}
											 className='link'
											 onClick={() => setIsOpen(!isOpen)}>
										{el.name}
									</NavLink>
								</li>
							)
						}
					</ul>
				}
			</form>
		</div>
	);
}