import { Fragment } from "react";
import Layout from "./components/Layout";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    media: {
      smobile: "420px",
      mobile: "768px",
      tablet: "960px",
      desktop: "1440px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Layout />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
