import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import GamingConsole from './components/GamingConsole/GamingConsole';
import VRGlasses from './components/VRGlasses/VRGlasses';

function App() {
  return (
    <>
      <Header />
      <GamingConsole />
      <VRGlasses />
    </>
  );
}

export default App;
