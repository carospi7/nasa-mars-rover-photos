export const menuFilter = [
	{ title: 'Curiosity', 
		cameras: [ 
			{ name: 'FHAZ' }, 
			{ name: 'RHAZ' }, 
			{ name: 'MAST' }, 
			{ name: 'CHEMCAM' }, 
			{ name: 'MAHLI' }, 
			{ name: 'MARDI' }, 
			{ name: 'NAVCAM' } ]},
	{ title: 'Opportunity', 
		cameras: [ 
			{ name: 'FHAZ' }, 
			{ name: 'RHAZ' }, 
			{ name: 'NAVCAM' }, 
			{ name: 'PANCAM' }, 
			{ name: 'MINITES' } 
		]},
	{ title: 'Spirit', 
		cameras: [ 
			{ name: 'FHAZ' }, 
			{ name: 'RHAZ' }, 
			{ name: 'NAVCAM' }, 
			{ name: 'PANCAM' }, 
			{ name: 'MINITES' } 
		]}
];

const date = new Date();
export const currentEarthDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`.toString();