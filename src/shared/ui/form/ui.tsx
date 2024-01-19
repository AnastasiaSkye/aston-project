import React, { FormHTMLAttributes, memo } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
	className?: string;
}

export function FormMemo({ children, className, ...props }: Props) {
	return (
		<form {...props}

			  className={'form ' + className}>
			{children}
		</form>
	);
}

FormMemo.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};

export const Form = memo(FormMemo);