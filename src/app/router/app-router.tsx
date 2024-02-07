import React, { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth } from 'entities/user';
import { AuthStatus, RouteDescription, RouteName } from 'shared/config';
import { Loader } from 'shared/ui';

const BaseLayout = lazy(() => import('widgets/layouts'));
const Main = lazy(() => import('pages/main'));
const Registration = lazy(() => import('pages/registration'));
const Login = lazy(() => import('pages/login'));
const Search = lazy(() => import('pages/search'));
const Plant = lazy(() => import('pages/plant'));
const NotFound = lazy(() => import('pages/not-found'));
const Favorites = lazy(() => import('pages/favorites'));
const History = lazy(() => import('pages/history'));

const {
	MAIN_PAGE,
	REGISTRATION_PAGE,
	LOGIN_PAGE,
	SEARCH_PAGE,
	PlANT_PAGE,
	NOT_FOUND_PAGE,
	FAVORITES_PAGE,
	HISTORY_PAGE
} = RouteName;

const publicRoutes: RouteDescription[] = [
	{
		path: MAIN_PAGE,
		component: Main
	},
	{
		path: REGISTRATION_PAGE,
		component: Registration
	},
	{
		path: LOGIN_PAGE,
		component: Login
	},
	{
		path: SEARCH_PAGE,
		component: Search
	},
	{
		path: PlANT_PAGE + '/:id',
		component: Plant
	}
];

const authRoutes: RouteDescription[] = [
	{
		path: FAVORITES_PAGE,
		component: Favorites
	},
	{
		path: HISTORY_PAGE,
		component: History
	}
];

interface Props {
	children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
	const { authStatus } = useAuth();
	return authStatus === AuthStatus.SignedIn ?
		<>{children}</>
		:
		<Navigate to={REGISTRATION_PAGE} replace />;
}

export function AppRouter() {
	const { authChecked, authStatus } = useAuth();

	useEffect(() => {
		void authChecked();
	}, [authChecked]);

	return (
		<>
			{authStatus === AuthStatus.Loading ?
				<Loader />
				:
				<Routes>
					<Route path='/' element={<BaseLayout />}>
						{publicRoutes.map(({ path, component: Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}
						{authRoutes.map(({ path, component: Component }) => (
							<Route key={path} path={path}
								   element={
									   <ProtectedRoute>
										   <Component />
									   </ProtectedRoute>
								   } />
						))}
						<Route path={NOT_FOUND_PAGE} element={<NotFound />} />
					</Route>
				</Routes>
			}
		</>
	);
}