import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Header } from 'widgets/header';
import { useTheme } from 'entities/theme';
import { Theme, toastOptionsDark, toastOptionsLight } from 'shared/config';

export function BaseLayout() {
	const { theme } = useTheme();
	return (
		<>
			<Header />
			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
			{theme === Theme.Light ?
				<Toaster toastOptions={toastOptionsLight}/>
				:
				<Toaster toastOptions={toastOptionsDark}/>
			}
		</>
	);
}

