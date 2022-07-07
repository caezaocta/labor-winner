import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react'
import Routes from '../src/routes'

const theme = createTheme({
  typography: {
    fontFamily: 'poppins',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#16609D',
    },
    secondary: {
      main: '#D11614',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes></Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
