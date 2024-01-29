import { useState } from 'react';

import { PiHeartFill, PiHeartLight } from 'react-icons/pi';

import './styles.css';

//interface Props {
//isAdded?: boolean;
//}

export function Heart() {
	// TODO: remake, add favoritesApi
	const [isAdded, setIsAdded] = useState<boolean>(false);
	const handleClick = () => {
		setIsAdded(!isAdded);
	};

	return (
		<button className='heart' onClick={handleClick}>
			{isAdded ?
				<PiHeartFill size={25} />
				:
				<PiHeartLight size={25} />
			}
		</button>
	);
}