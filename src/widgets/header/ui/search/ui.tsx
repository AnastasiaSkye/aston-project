import { useSearchParams } from 'react-router-dom';

import { SearchForm } from 'features/search';

import './styles.css';

export function Search() {
	const [searchParams] = useSearchParams();
	return (
		<div className='header__search' data-testid='search'>
			<SearchForm queryParam={searchParams.get('query') || ''}
						key={searchParams.get('query') || ''} />
		</div>
	);
}
