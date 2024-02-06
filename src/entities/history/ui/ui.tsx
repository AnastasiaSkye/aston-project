import React from 'react';

import { SearchHistory } from 'shared/config';

import { HistoryRow } from './history-row';

import './styles.css';

interface Props {
	searchHistory: SearchHistory;
	setSearchHistory: React.Dispatch<React.SetStateAction<SearchHistory>>;
}

export function HistoryTable({ searchHistory, setSearchHistory }: Props) {
	return (
		<>
			{searchHistory.length !== 0 ?
				<div className='history-table'>
					<div className='history-table__head-row'>
						<div>Delete</div>
						<div>Date</div>
						<div>Search query</div>
					</div>
					{searchHistory.map(item => (
						<HistoryRow key={item.id} id={item.id} query={item.query} data={item.data}
									setSearchHistory={setSearchHistory} />
					))}
				</div>
				:
				<h2 className='history-not-found'>Nothing found</h2>
			}
		</>
	);
}

