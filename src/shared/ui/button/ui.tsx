import React, { ButtonHTMLAttributes, memo } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

export function ButtonMemo({ children, className, ...props }: Props) {
	return (
		<button {...props}
				className={'btn-accent-1 ' + className}>
			{children}
		</button>
	);
}

ButtonMemo.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string
};

export const Button = memo(ButtonMemo);
