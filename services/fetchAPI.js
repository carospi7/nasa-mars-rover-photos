export const fetchNasaAPI = async ({parameters, rover}) => {
	let urlParameters = '';
	for (let key in parameters) {
		if (urlParameters !== '') { urlParameters += '&'; }
		urlParameters += key + '=' + encodeURIComponent(parameters[key]);
	}

	const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${urlParameters}&api_key=azXF0EepYoUJYH5toGrubQZJjHyJcvCsAmAlT8Cq`);

	let recommendedResponse = '';
	if (response.status === 200) {
		recommendedResponse = {code: response.status, content: await response.json()};
	} else {
		recommendedResponse = {code: response.status, content: response.statusText};
	}

	return recommendedResponse;
};