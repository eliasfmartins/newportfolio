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
		z-index: 0;
  }
	/* Estilização da barra de rolagem */
::-webkit-scrollbar {
  width: 5px; /* Largura da barra de rolagem */
}

::-webkit-scrollbar-track {
  background: transparent; /* Cor de fundo da barra de rolagem */
}

::-webkit-scrollbar-thumb {
  background: gray; /* Cor da barra de rolagem */
  border-radius: 3px; /* Arredonda a barra de rolagem */
}

/* Estilização do símbolo do scroll (setas) */
::-webkit-scrollbar-button {
  display: none; /* Oculta o símbolo do scroll */
}
 
`;
