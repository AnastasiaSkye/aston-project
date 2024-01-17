import { ComponentType } from 'react';

export const RouteName = {
	MAIN_PAGE: '/',
	REGISTRATION_PAGE: '/signup',
	LOGIN_PAGE: '/signin',
	SEARCH_PAGE: '/search',
	CARD_PAGE: '/card',
	FAVORITES_PAGE: '/favorites',
	HISTORY_PAGE: '/history',
	NOT_FOUND_PAGE: '*'
};

export interface RouteDescription {
	path: string;
	component: ComponentType;
}