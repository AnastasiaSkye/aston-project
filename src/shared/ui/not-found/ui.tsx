import React, { memo } from 'react';

import './styles.css';

interface Props {
	isNotFound?: boolean;
	isMissing?: boolean;
	children?: React.ReactNode;
}

export function NotFoundMemo({ isNotFound, isMissing, children }: Props) {
	return (
		<div className='not-found'>
			<img src='https://mega-orel.ru/img/2.gif' alt='Gif' />
			<h1>Oops! Something went wrong :(</h1>
			<div>
				{isNotFound && <div>The page you are looking for can't be found</div>}
				{isMissing && <div>The data can't be found because it is missing</div>}
				{children && <div>Maybe the links below can be helpful</div>}
			</div>
			{children}
		</div>
	);
}

export const NotFound = memo(NotFoundMemo);
