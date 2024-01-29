import React, { InputHTMLAttributes, memo } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
	error?: string;
	handleChange?: (value: string) => void;
}

export function InputMemo({ label, type = 'text', handleChange, className, error, ...props }: Props) {
	return (
		<div className='input__div'>
			{type !== 'text' && <div className='input__label'>{label}</div>}
			<input {...props}
				   onChange={e => handleChange && handleChange(e.target.value)}
				   className={'input ' + className}
				   type={type}
			/>
			{error &&
				<div className='input__error'>
					<RiErrorWarningFill size={16} />
					<span>{error}</span>
				</div>
			}
		</div>
	);
}

InputMemo.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
	onClick: PropTypes.func,
	onBlur: PropTypes.func,
	error: PropTypes.string
};

export const Input = memo(InputMemo);
