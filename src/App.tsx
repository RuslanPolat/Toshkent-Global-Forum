import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
          <ToastContainer/>
          <Router />
        </Context>
      </BrowserRouter>
    </>
  );
}
