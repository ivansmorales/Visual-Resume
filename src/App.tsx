import React, { useState } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavbarXs from './components/NavbarXs/NavbarXs';
import Resume from './components/Resume/Resume';
import './theme/styles.scss';

function App() {
  const [showSection, setShowSection] = useState('Home');

  return (
    <>
      <NavbarXs setSelectedView={setShowSection} />
      {showSection === 'Home' && <Home />}
      {showSection === 'About' && <About />}
      {showSection === 'Resume' && <Resume />}
      {showSection === 'Contact' && <Contact />}
    </>
  );
}

export default App;
