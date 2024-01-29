import { memo } from 'react';

import './styles.css';

export function LoaderMemo() {
	return (
		<div className='loader' />
	);
}

export const Loader = memo(LoaderMemo);
