import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobaStyle } from './assets/styles/GlobaStyle';

//
import Navbar from './components/navbar/Navbar';
import ModalCard from './components/modalcard/ModalCard';


function App() {
  return (
    <>
    <GlobaStyle>
    <Navbar/>
    <ModalCard/>
    </GlobaStyle> 
    </>
  );
}

export default App;
