import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { useGetPlantsQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';

export function Main() {
	const { data: plantsList = [], isLoading } = useGetPlantsQuery();

	return isLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Indoor plants' data={plantsList} />
		</ErrorBoundary>
	);
}