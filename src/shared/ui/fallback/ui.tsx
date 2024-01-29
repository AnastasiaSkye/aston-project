import React, { memo } from 'react';

import './styles.css';

export function FallbackMemo() {
	return (
		<div className='fallback'>
			<img src='https://mega-orel.ru/img/2.gif' alt='Gif' />
			<h1>Oops! Something went wrong :(</h1>
			<div>
				<div>Try reloading the page</div>
				<div>If the error happens again, please wait a few minutes and try again</div>
			</div>
		</div>
	);
}

export const Fallback = memo(FallbackMemo);
