import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';

import { useSearchedHistory } from 'entities/history';
import { RouteName, SearchHistory } from 'shared/config';

import './styles.css';

interface Props {
	id: string;
	query: string;
	data: string;
	setSearchHistory: React.Dispatch<React.SetStateAction<SearchHistory>>;
}

export function HistoryRow({ id, query, data, setSearchHistory }: Props) {
	const { historyRemoveStarted } = useSearchedHistory(id, setSearchHistory)

	return (
		<div className='history-row'>
			<div>
				<button onClick={historyRemoveStarted}>
					<MdOutlineClose size={25} />
				</button>
			</div>
			<div>
				<Link to={RouteName.SEARCH_PAGE + '?query=' + query}>
					{data}
				</Link>
			</div>
			<div>
				<Link to={RouteName.SEARCH_PAGE + '?query=' + query}>
					{query}
				</Link>
			</div>
		</div>
	);
}