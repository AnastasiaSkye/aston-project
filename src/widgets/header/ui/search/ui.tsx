import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import { RouteName } from 'shared/config';

import './styles.css';

export function Search() {
	const [value, setValue] = useState('');
	const [isOpen, setIsOpen] = useState(true);
	// TODO: заменить на данные с api
	const suggestionsList = [{id: 1, name: 'Цветок'}];

	return (
		<div className='header__search'>
			<form>
				<NavLink to={RouteName.SEARCH_PAGE + '?query=' + value}>
					<IoSearch size={20} className='header__search-icon' />
				</NavLink>
				<input placeholder='Enter a search query'
					   onChange={e => setValue(e.target.value)}
					   onClick={() => setIsOpen(true)}
				/>
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