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
    background-color: #090909;
    color: #bdbaba;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; 
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
