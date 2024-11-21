import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import GamingConsole from './components/GamingConsole/GamingConsole';
import VRGlasses from './components/VRGlasses/VRGlasses';
import AboutXBOX from './components/AboutXBOX/AboutXBOX';

function App() {
  return (
    <>
      <Header />
      <GamingConsole />
      <VRGlasses />
      <AboutXBOX />
    </>
  );
}

export default App;
