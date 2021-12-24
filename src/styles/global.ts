import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased !important;

		&::-webkit-scrollbar-track
    {
      border: 1px solid ${({ theme }) => theme.main.dark};
      background-color: ${({ theme }) => theme.main.default};
    }

    &::-webkit-scrollbar
    {
      width: 10px;
      background-color: ${({ theme }) => theme.main.default};
    }

    &::-webkit-scrollbar-thumb
    {
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.main.dark};
    }
  }

  input {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  button {
    margin: 0;
    border: 0;
    font: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;