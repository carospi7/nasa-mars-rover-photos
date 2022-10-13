import { useState, createContext } from 'react';
import { useRouter } from 'next/router';

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {

	const router = useRouter();
	const query = router.query;

	const selectRoverName = (value) => {
		delete query.camera;
		router.push({ query: {
			...query,
			rover: value,
		} });
	};

	const selectCamera = (value) => {
		router.push({ query: { 
			...router.query,
			camera: value, 
		} });
	};

	const earthDateSelector = (value) => {
		delete query.sol;
		router.push({ query: {
			...query,
			earth_date: value
		} });
	};

	const selectSolDate = (value) => {
		delete query.earth_date;
		router.push({ query: {
			...query,
			sol: value
		} });
	};

	return (
		<DataContext.Provider value={{ selectRoverName, selectCamera, earthDateSelector, selectSolDate } }>
			{ children }
		</DataContext.Provider>
	);
};