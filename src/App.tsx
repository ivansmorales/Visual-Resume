import React, { useState } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavbarXs from './components/NavbarXs/NavbarXs';
import Resume from './components/Resume/Resume';
import News from './components/News/News';
import './theme/styles.scss';

import { createMuiTheme, Paper, ThemeProvider } from '@material-ui/core';
import { AboutContent } from './content/About/AboutContent';
import { HomeContent } from './content/Home/HomeContent';
import { ContactContent } from './content/Contact/ContactContent';

function App() {
  const [showSection, setShowSection] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: '100vh' }}>
          <NavbarXs
            setSelectedView={setShowSection}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
          {showSection === 'Home' && <Home data={HomeContent} />}
          {showSection === 'About' && <About data={AboutContent} />}
          {showSection === 'Resume' && <Resume />}
          {showSection === 'News' && <News />}
          {showSection === 'Contact' && <Contact data={ContactContent} />}
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
