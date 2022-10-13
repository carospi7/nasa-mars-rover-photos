import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  padding: 0;
  margin: 0;
  font-family: 'IBM Plex Mono', monospace;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

main {
  width: 80vw;
  margin: 0 auto;
  margin-top: 60px;
}

h1 {
    font-size: 60px;
    line-height: 70px;
    margin: 0;
    @media (max-width: 425px) {
      font-size: 50px;
      line-height: 55px;
    }
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  margin: 10px 0;
}

li {
  list-style: none;
}

.colorSwitcher {
  font-family: 'IBM Plex Mono', monospace;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  top: 15px;
  padding: 8px 12px;
  box-shadow: none;
  border-radius: 4px 0 0 4px;
  text-transform: uppercase;
}
`;

export const lightTheme = {
	color: '#000',
	background: '#FFF',
};

export const darkTheme = {
	color: '#FFF',
	background: '#000',
};