import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Image } from './ui';

describe('Image ui', () => {
	test('image renders', () => {
		render(<Image src='/' alt='Alt Text'/>);
		const image = screen.getByAltText('Alt Text');
		expect(image).toBeInTheDocument();
	});
});