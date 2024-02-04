import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Fallback } from './ui';

describe('Fallback ui', () => {
	test('fallback renders', () => {
		render(<Fallback/>);
		const fallback = screen.getByText('Try reloading the page');
		expect(fallback).toBeInTheDocument();
	});

	test('fallback img renders', () => {
		render(<Fallback/>);
		const img = screen.getByAltText('Gif');
		expect(img).toBeInTheDocument();
	});
});