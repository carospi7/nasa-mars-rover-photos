import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from 'context/dataContext';
import SolDateFilter from './solDateFilter';
import EarthDateFilter from './earthDateFilter';
import NavMenuFilter from './navMenuFilter';
import { menuFilter } from 'utilities';
import { NavigationMenu, Switcher, DateFilters, FiltersContainer, InputContainer } from './Filters.styles';

export default function Filters() {

	const router = useRouter();
	const { rover, earth_date, camera, sol } = router.query || {};
	const { selectRoverName, selectCamera, earthDateSelector, selectSolDate } = useContext(DataContext);
	const [isEarthDate, setIsEarthDate] = useState(true);
	
	useEffect(() => {
		if(sol) setIsEarthDate(false);
	}, [sol]);
	
	return (
		<FiltersContainer>
			<NavigationMenu>
				<ul>
					{ menuFilter.map((menu) =>  (
						<NavMenuFilter 
							key={ menu.title } 
							menuTitle={ menu.title } 
							menuContent={ menu.cameras } 
							selectRoverName={ selectRoverName } 
							selectCamera={ selectCamera } 
							roverName={ rover || 'curiosity' }
							camera={ camera }
						/>
					))}
				</ul>
			</NavigationMenu>
			<DateFilters>
				<Switcher>
            		Date
					<ul>
						<li className={ isEarthDate ? 'active' : 'inactive' } onClick={ () => setIsEarthDate(true) }>EARTH</li>
						<li className={ !isEarthDate ? 'active' : 'inactive' } onClick={ () => setIsEarthDate(false) }>SOL</li>
					</ul>
				</Switcher>
				<InputContainer>
					{ isEarthDate ?
						<EarthDateFilter earthDateSelector={ earthDateSelector } earth_date={ earth_date }/> :
						<SolDateFilter selectSolDate={ selectSolDate } sol={ sol } />
					}
				</InputContainer>
			</DateFilters>
		</FiltersContainer>
	);
}