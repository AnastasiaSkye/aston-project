import { fireEvent, render, screen } from '@testing-library/react';

import { Form } from './ui';

describe('Form ui', () => {
	test('form renders', () => {
		render(<Form>Text</Form>);
		const form = screen.getByText('Text');
		expect(form).toBeInTheDocument();
	});

	test('error renders', () => {
		render(<Form error='Error'>Text</Form>);
		const error = screen.getByText('Error');
		expect(error).toBeInTheDocument();
	});

	test('form submit', () => {
		const onSubmitMock = jest.fn();
		render(<Form onSubmit={onSubmitMock}>Text</Form>);
		const form = screen.getByText('Text');
		expect(form).toBeInTheDocument();
		fireEvent.submit(form);
		expect(onSubmitMock).toHaveBeenCalledTimes(1);
	});
});