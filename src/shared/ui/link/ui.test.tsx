import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Link } from './ui';

describe('Link ui', () => {
	test('link renders', () => {
		render(
			<MemoryRouter>
				<Link text='link' href='/' />
			</MemoryRouter>
		);
		const link = screen.getByText('link');
		expect(link).toBeInTheDocument();
	});
});