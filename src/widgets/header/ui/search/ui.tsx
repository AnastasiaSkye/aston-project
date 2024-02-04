import { SearchForm } from 'features/search';

import './styles.css';

export function Search() {
	return (
		<div className='header__search' data-testid='search'>
			<SearchForm />
		</div>
	);
}
