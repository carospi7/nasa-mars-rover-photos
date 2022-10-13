import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SolDateFilter({ selectSolDate, sol }) {

	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<input type='number' placeholder={ '2890' } value={ sol || value } onChange={ handleChange } />
			<button onClick={(e) => selectSolDate(value)}>Search</button>
		</>
	);
}

SolDateFilter.propTypes = {
	selectSolDate: PropTypes.func
};