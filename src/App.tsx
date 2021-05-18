import React, { useState } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavbarXs from './components/NavbarXs/NavbarXs';
import Resume from './components/Resume/Resume';
import News from './components/News/News';
import './theme/styles.scss';
import { createMuiTheme, Paper, ThemeProvider } from '@material-ui/core';

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
          {showSection === 'Home' && <Home />}
          {showSection === 'About' && <About />}
          {showSection === 'Resume' && <Resume />}
          {showSection === 'News' && <News />}
          {showSection === 'Contact' && <Contact />}
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
