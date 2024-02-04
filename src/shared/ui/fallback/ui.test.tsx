import { render, screen } from '@testing-library/react';

import { Fallback } from './ui';

describe('Fallback ui', () => {
	test('fallback renders', () => {
		render(<Fallback/>);
		const fallback = screen.getByText('Try reloading the page');
		expect(fallback).toBeInTheDocument();
		const img = screen.getByAltText('Gif');
		expect(img).toBeInTheDocument();
	});
});