import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import GamingConsole from './components/GamingConsole/GamingConsole';
import VRGlasses from './components/VRGlasses/VRGlasses';
import AboutXBOX from './components/AboutXBOX/AboutXBOX';
import OurPricing from './components/OurPricing/OurPricing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <GamingConsole />
      <VRGlasses />
      <AboutXBOX />
      <OurPricing />
      <Footer />
    </>
  );
}

export default App;
