import React from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavbarXs from './components/NavbarXs/NavbarXs';
import './theme/styles.scss';

function App() {
  return (
    <>
      <NavbarXs />
      <Home />
      <About />
    </>
  );
}

export default App;
