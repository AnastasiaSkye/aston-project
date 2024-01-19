import React, { memo, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import './styles.css';


interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export function InputMemo({ type = 'text', className, ...props }: Props) {
	return (
		<input {...props}
			   className={'input ' + className}
			   type={type}
		/>
	);
}

InputMemo.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func
};

export const Input = memo(InputMemo)
