import Image from 'next/image';
import logoNasa from 'public/nasa.svg';

export default function Header() {

	return (
		<>
			<Image alt={ 'Nasa' } src={ logoNasa }/>
			<h1>Mars Rover Photos</h1>
			<h2>Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers</h2>
		</>
	);
}