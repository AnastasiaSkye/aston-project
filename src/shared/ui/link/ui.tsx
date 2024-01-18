import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

function LinkMemo({ ...props }) {
	return (
		<NavLink to={props.href} className='link'>
			{props.text}
		</NavLink>
	);
}

LinkMemo.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export const Link = React.memo(LinkMemo)