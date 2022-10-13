import Head from 'next/head';
import PhotosList from 'components/PhotosList';
import Filters from 'components/Filters';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Home() {

	return (
		<div>
			<Head>
				<title>NASA | Mars Rover Photos</title>
				<meta name="description" content="Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header/>
				<Filters/>
				<PhotosList/>
				<Footer/>
			</main>
		</div>
	);
}

