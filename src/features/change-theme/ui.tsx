import {RiMoonLine} from "react-icons/ri";
import {GrSun} from "react-icons/gr";

import { useTheme } from 'entities/theme';

import './styles.css';
import { Theme } from '../../shared/config';


export function ThemeButton() {
	const { theme, changeTheme } = useTheme();

	return (
		<button className='theme-button' onClick={changeTheme}>
			{theme === Theme.Light ?
				<RiMoonLine size={25} />
				:
				<GrSun size={25} />
			}
		</button>
	);
}