import { Image } from 'shared/ui';

import './styles.css';

interface Props {
	src: string;
	alt: string;
	className?: string;
}

export function PlantImage({ src, alt, className }: Props) {
	return (
		<div className={`plant-img ${className} ${!src && 'plant-filter'}`}>
			{src ?
				<Image src={src} alt={alt} />
				:
				<Image className='filter' src='https://perenual.com/storage/image/missing_image.jpg' alt='Missing' />
			}
		</div>
	);
}