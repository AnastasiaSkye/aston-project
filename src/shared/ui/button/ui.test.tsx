import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Button } from './ui';

describe('Button ui', () => {
	test('button renders', () => {
		render(<Button>Text</Button>);
		const button = screen.getByText('Text');
		expect(button).toBeInTheDocument();
	});

	test('button clicked', () => {
		const onClickMock = jest.fn();
		render(<Button onClick={onClickMock}>Text</Button>);
		const button = screen.getByText('Text');
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});