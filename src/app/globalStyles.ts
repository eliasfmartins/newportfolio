import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	body {
	  background-image: url('./bkground.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* Adicione as propriedades abaixo para ocupar toda a altura da tela */
    min-height: 100vh;
    color: white;
  }
 
`;
