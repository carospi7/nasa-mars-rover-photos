import { useState } from 'react';
import { DataContextProvider } from 'context/dataContext';
import { lightTheme, darkTheme, GlobalStyles } from 'globalStyles/global.styles';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {

	const [theme, setTheme] = useState('dark'); 

	const toggleTheme = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles/>
			<button className='colorSwitcher' onClick={toggleTheme}>{ theme === 'light' ? 'Dark side' : 'Light side' }</button>
			<DataContextProvider>
				<Component {...pageProps} />
			</DataContextProvider>
		</ThemeProvider>
	);
}

export default MyApp;
