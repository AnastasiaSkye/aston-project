import { NavLink } from 'react-router-dom';

import { StatusMessage } from 'shared/ui';
import { RouteName } from 'shared/config';

export function NotFound() {
	return (
		<StatusMessage isNotFound={true}>
			<NavLink to={RouteName.MAIN_PAGE}>Go back to the homepage</NavLink>
		</StatusMessage>
	);
}