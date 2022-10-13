import Image from 'next/image';
import LoaderGIF from 'public/loader.gif';
import { LoaderContainer } from './loader.styles';

export default function Loader () {
	return (
		<LoaderContainer>
			<Image src={ LoaderGIF } alt='Loading...' />
		</LoaderContainer>
	);
}