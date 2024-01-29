import { ComponentType } from 'react';

export const RouteName = {
	MAIN_PAGE: '/',
	REGISTRATION_PAGE: '/signup',
	LOGIN_PAGE: '/signin',
	SEARCH_PAGE: '/search',
	PlANT_PAGE: '/plant',
	FAVORITES_PAGE: '/favorites',
	HISTORY_PAGE: '/history',
	NOT_FOUND_PAGE: '*'
};

export interface RouteDescription {
	path: string;
	component: ComponentType;
}