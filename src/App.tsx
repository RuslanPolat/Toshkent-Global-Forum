import React from "react";
import { BrowserRouter } from "react-router-dom";
//
import "bootstrap/dist/css/bootstrap.css";

//
import { GlobalStyle } from "./assets/styles/GlobaStyle";

import Router from "./route/Router";
import Context from "./context/Context";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Context>
          <Router />
        </Context>
      </BrowserRouter>
    </>
  );
}
