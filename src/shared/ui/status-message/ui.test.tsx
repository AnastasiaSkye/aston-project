import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'

import { StatusMessage } from './ui';

describe('StatusMessage ui', () => {
	test('StatusMessage renders', () => {
		render(<StatusMessage />)
		const status = screen.getByText('Oops! Something went wrong :(');
		expect(status).toBeInTheDocument();
	});

	test('StatusMessage renders not found message', () => {
		render(<StatusMessage isNotFound={true}/>)
		const status = screen.getByText('The page you are looking for can\'t be found');
		expect(status).toBeInTheDocument();
	});

	test('StatusMessage renders missing message', () => {
		render(<StatusMessage isMissing={true}/>)
		const status = screen.getByText('The data can\'t be found because it is missing');
		expect(status).toBeInTheDocument();
	});

	test('StatusMessage renders children', () => {
		render(<StatusMessage>children</StatusMessage>)
		const status = screen.getByText('Maybe the links below can be helpful');
		expect(status).toBeInTheDocument();
		const children = screen.getByText('children');
		expect(children).toBeInTheDocument();
	});
});