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
    color: #00102e;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; 
    }
    background-color: #090909;
    
    
 html {
   font-size: 62.5%;
   scroll-behavior: smooth;
   
  }

@media only screen and (max-width: 96em) {
  html {
    font-size: 60%;
  }
}
@media only screen and (max-width: 75em) {
  html {
    font-size: 58%;
  }
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}



`;
