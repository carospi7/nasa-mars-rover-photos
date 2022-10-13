import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MainContainer, ListContainer, Text } from './PhotosList.styles';
import { fetchNasaAPI } from 'services/fetchAPI';
import { DataContext } from 'context/dataContext';
import { currentEarthDate } from 'utilities';
import Loader from 'components/loader';

export default function PhotosList() {

	const router = useRouter();
	const { rover, earth_date, camera, sol } = router.query || {};

	const [photos, setPhotos] = useState(null);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		getPhotos();
		setLoading(true);
	}, [page, rover, camera, earth_date, sol]);

	useEffect(() => {
		setPage(1);
		setPhotos([]);
	}, [rover, camera, earth_date, sol]);

	const getPhotos = async () => {

		let parameters = {
			page,
			...(sol && {sol: sol}),
			...(!sol && {earth_date: earth_date || currentEarthDate}),
			...(camera && {camera: camera})
		};
		try {
			const response = await fetchNasaAPI({parameters, rover: rover || 'curiosity'});
			if (response.code === 200) {
				setPhotos((prevPhotos) => prevPhotos.concat(response.content.photos));
				setHasMore(response.content.photos.length > 0 && response.content.photos.length === 25);
				setLoading(false);
			} else {
				setError(response.code);
				setLoading(false);
			}	
		} catch (error) {
			setError(true);
		}
	};
	return (
		<MainContainer>
			{ error && <Text> Something went wrong. Error</Text> }
			{ isLoading ? <Loader/> : photos?.length === 0 && !error && <Text> Not found images. Please, try another date. </Text> }
			{ photos?.length > 0 &&
				<InfiniteScroll
					dataLength={photos.length}
					next={() => setPage((prevPage) => prevPage + 1)}
					hasMore={hasMore}
					loader={ <Loader/> }
				>
					<ListContainer>
						{ photos.length > 0 && photos.map((photo, index) => (
							<li key={ index }>
								<span>{ photo.camera.full_name }</span>
								<span className='tags'>{ photo.rover.name } / { photo.camera.name }</span>
								<Image
									alt={ photo.camera.full_name }
									src={ photo.img_src }
									width={500}
									height={500}
									quality={ 50 }
									layout='responsive'
								/>
							</li>
						))
						}
					</ListContainer>
				</InfiniteScroll>
			}
		</MainContainer>
	);
}