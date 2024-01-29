import React, { FormHTMLAttributes, memo } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

import './styles.css';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
	error?: string;
	className?: string;
}

export function FormMemo({ children, className, error, ...props }: Props) {
	return (
		<>
			<form {...props}
				  className={className}>
				{children}
			</form>
			{error &&
				<div className='form__error'>
					<RiErrorWarningFill size={16} />
					<span>{error}</span>
				</div>
			}
		</>
	);
}

FormMemo.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onSubmit: PropTypes.func,
	error: PropTypes.string
};

export const Form = memo(FormMemo);