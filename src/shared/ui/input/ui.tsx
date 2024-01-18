import React from 'react';

import type { InputHTMLAttributes } from 'react';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

export function Input({ type = 'text', className, ...props }: Props) {
	return (
		<input {...props}
			   className={'input ' + className}
			   type={type}
		/>
	);
}
