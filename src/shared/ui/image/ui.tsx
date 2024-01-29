import { ImgHTMLAttributes, memo } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
}

function ImageMemo({ src, alt, className }: Props) {
	return (
		<img className={'image ' + className} src={src} alt={alt} />
	);
}

ImageMemo.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string
};

export const Image = memo(ImageMemo);