import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 1.6rem;
    background: linear-gradient(to right, #343337, #222222);
    color: #eaeaea;
    font-family: 'Poppins', sans-serif;
    }
    
    
    
 html {
   font-size: 62.5%;
   scroll-behavior: smooth;
   
  }


a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

`;
