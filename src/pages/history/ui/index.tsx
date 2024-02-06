import { ErrorBoundary } from 'react-error-boundary';

import { HistoryTable, useHistory } from 'entities/history';
import { Fallback, Loader } from 'shared/ui';

import './styles.css';

export function History() {
	const { searchHistory, setSearchHistory, isHistoryLoading } = useHistory();

	return isHistoryLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<div className='history'>
				<div className='history__div'>
					<h1>History</h1>
				</div>
				<HistoryTable searchHistory={searchHistory} setSearchHistory={setSearchHistory} />
			</div>
		</ErrorBoundary>
	);
}