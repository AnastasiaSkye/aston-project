import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

interface Props {
	text: string;
	href: string;
}

function LinkMemo({ text, href }: Props) {
	return (
		<NavLink to={href} className='link'>
			{text}
		</NavLink>
	);
}

LinkMemo.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

export const Link = memo(LinkMemo);