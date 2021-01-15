import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * { 
    margin: 0; 
    padding: 0; 
    color: rgb(71, 71, 71);
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 767.98px) {
    p {
        text-align: center;
    }
  }

  .jYfqde, .irIqTD {
    font-size: 15px;
    color: rgba(71,71,71,0.6);
    font-family: 'Didact Gothic', sans-serif;
  }

  .irIqTD {
    min-height: 120px;
  }

  input:-webkit-autofill, input:focus:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px white inset;
  }

  .ReactModal__Body--open {
    overflow: auto;
  }
  
  .swiper-button-next, .swiper-button-prev {
    color: rgb(60,179,113) !important;
  }

  .swiper-pagination {
    position: relative !important;
    padding-top: 1rem !important;
  }

  .swiper-pagination-bullet-active {
    background: rgb(60,179,113) !important;
  }
`;
