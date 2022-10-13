import { useState } from 'react';
import PropTypes from 'prop-types';
import { currentEarthDate } from 'utilities';

export default function EarthDateFilter({earthDateSelector, earth_date}) {

	const [value, setValue] = useState(currentEarthDate);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<input type="date" value={ value || currentEarthDate } onChange={handleChange} />
			<button onClick={(e) => earthDateSelector(value)}>Search</button>
		</>
	);
}

EarthDateFilter.propTypes = {
	earthDateSelector: PropTypes.func
};