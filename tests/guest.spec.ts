import { expect, test } from '@playwright/test';

test.describe('Guest', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/');
	});

	test('searched cards in visible', async ({ page }) => {
		const search = page.getByTestId('search');
		await search.getByPlaceholder('Enter a search query').fill('cyr');

		const suggestionsList = search.getByRole('list');

		const card = suggestionsList.getByRole('listitem').filter({ hasText: 'Cyrtomium falcatum' });
		await expect(card).toBeVisible();
	});

	test('plant page display', async ({ page }) => {
		const search = page.getByTestId('search');
		await search.getByPlaceholder('Enter a search query').fill('cyr');

		const suggestionsList = search.getByRole('list');

		const card = suggestionsList.getByRole('listitem').filter({ hasText: 'Cyrtomium falcatum' });

		await card.click();
		const plantDetails = page.getByTestId('plant-details');
		await expect(plantDetails).toBeVisible();
		const img = plantDetails.getByAltText('Cyrtomium falcatum');
		await expect(img).toBeVisible();
		const name = plantDetails.getByRole('heading');
		await expect(name).toBeVisible();
		const description = plantDetails.getByTestId('description');
		await expect(description).toBeVisible()
		const infoCard = plantDetails.getByTestId('info-card');
		await expect(infoCard).toBeVisible();
	});
});