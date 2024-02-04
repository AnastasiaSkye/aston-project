import { expect, test } from '@playwright/test';

test.describe('User', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/');
	});

	test('navigation display', async ({ page }) => {
		const header = page.getByTestId('header');
		const nav = header.getByRole('navigation');
		await expect(nav).toBeVisible();
		const login = nav.getByRole('listitem').filter({ hasText: 'Login' });
		await expect(login).toBeVisible();
	});

	test('navigate to sign in page', async ({ page }) => {
		const header = page.getByTestId('header');
		const login = header.getByRole('listitem').filter({ hasText: 'Login' });

		await login.click();
		const authCard = page.getByTestId('auth-card');
		await expect(authCard).toBeVisible();
		const heading = authCard.getByRole('heading');
		await expect(heading).toContainText('Login');
		const authForm = authCard.getByTestId('auth-form');
		await expect(authForm).toBeVisible();
	});

	test('singed in', async ({ page }) => {
		await page.goto('http://localhost:3000/signin');
		const authForm = page.getByTestId('auth-form');
		const username = authForm.getByPlaceholder('Email');
		await expect(username).toBeVisible();
		await username.fill('user@mail.ru');
		const password = authForm.getByPlaceholder('Password');
		await expect(password).toBeVisible();
		await password.fill('12345678');
		const button = authForm.getByRole('button');
		await button.click();
		const header = page.getByTestId('header');
		const nav = header.getByRole('navigation');
		const favorites = nav.getByRole('listitem').filter({ hasText: 'Favorites' });
		await expect(favorites).toBeVisible();
	});

	test('add to favorites', async ({ page }) => {
		await page.goto('http://localhost:3000/signin');
		const authForm = page.getByTestId('auth-form');
		await authForm.getByPlaceholder('Email').fill('user@mail.ru');
		await authForm.getByPlaceholder('Password').fill('12345678');
		await authForm.getByRole('button').click();

		const cardList = page.getByTestId('card-list');
		await expect(cardList).toBeVisible();
		const heading = cardList.getByTestId('title');
		await expect(heading).toContainText('Indoor plants');
		const plantCard = cardList.getByTestId('plant-card').filter({ hasText: 'Cyrtomium falcatum' });
		await expect(plantCard).toBeVisible();
		const heart = plantCard.getByTestId('heart');
		await expect(heart).toBeVisible();
		const heartRemove = heart.getByTestId('heart-remove');
		await expect(heartRemove).toBeVisible();
		await heart.click();
		const heartAdd = heart.getByTestId('heart-add');
		await expect(heartAdd).toBeVisible();
	});

	test('remove from favorites', async ({ page }) => {
		await page.goto('http://localhost:3000/signin');
		const authForm = page.getByTestId('auth-form');
		await authForm.getByPlaceholder('Email').fill('user@mail.ru');
		await authForm.getByPlaceholder('Password').fill('12345678');
		await authForm.getByRole('button').click();

		const header = page.getByTestId('header');
		const favorites = header.getByRole('listitem').filter({ hasText: 'Favorites' });
		await favorites.click();

		const cardList = page.getByTestId('card-list');
		const heading = cardList.getByTestId('title');
		await expect(heading).toContainText('Favorite plants');
		const plantCard = cardList.getByTestId('plant-card').filter({ hasText: 'Cyrtomium falcatum' });
		await expect(plantCard).toBeVisible();
		const heart = plantCard.getByTestId('heart');
		const heartAdd = heart.getByTestId('heart-add');
		await expect(heartAdd).toBeVisible();
		await heart.click();
		await expect(plantCard).toBeHidden();
	});
});