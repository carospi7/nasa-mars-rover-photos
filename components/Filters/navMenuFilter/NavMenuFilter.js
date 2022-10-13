import PropTypes from 'prop-types';
import { PrimaryNav, SecondaryNav } from './NavMenuFilter.styles';

export default function NavMenuFilter({ selectRoverName, selectCamera, menuTitle, menuContent, roverName, camera }) {

	const handleClickPrimaryNav = (title) => {
		selectRoverName(title);
	};

	return (
		<PrimaryNav className={ roverName === menuTitle.toLowerCase() && 'active' }>
			<button onClick={ () => handleClickPrimaryNav(menuTitle.toLowerCase()) }>{ menuTitle }</button>
			{ roverName === menuTitle.toLowerCase() && 
				<SecondaryNav>
					{ menuContent.map((menu) => {
						return (
							<li key={ menu.name }>
								<button onClick={ () => selectCamera(menu.name) } className={ camera === menu.name ? 'active' : 'inactive' }>{ menu.name }</button>
							</li>
						);
					})

					}
				</SecondaryNav>
			}
		</PrimaryNav>
	);
}

NavMenuFilter.propTypes = {
	selectRoverName: PropTypes.func,
	selectCamera: PropTypes.func,
	menuTitle: PropTypes.string,
	menuContent: PropTypes.array
};