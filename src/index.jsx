import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }
  button{
    border : none;
    cursor : pointer;
  }
  *{
  box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);
