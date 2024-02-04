import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './ui';

describe('Input ui', () => {
	test('label renders', () => {
		render(<Input label='Email' type='email' />);
		const label = screen.getByText('Email');
		expect(label).toBeInTheDocument();
	});

	test('label dont renders', () => {
		render(<Input label='Email' />);
		const label = screen.queryByText('Email');
		expect(label).not.toBeInTheDocument();
	});

	test('onClick have been called', () => {
		const onClickMock = jest.fn();
		render(<Input onClick={onClickMock} placeholder='Email' />);
		const input = screen.getByPlaceholderText('Email');
		expect(input).toBeInTheDocument();
		fireEvent.click(input);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});

	test('onBlur have been called', () => {
		const onBlurMock = jest.fn();
		render(<Input onBlur={onBlurMock} placeholder='Email' />);
		const input = screen.getByPlaceholderText('Email');
		expect(input).toBeInTheDocument();
		fireEvent.blur(input);
		expect(onBlurMock).toHaveBeenCalledTimes(1);
	});
});