import * as React from 'react';
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#16609D',
    },
    secondary: {
      main: '#D11614'
    },
  },
  button: {
    typography: {
      textTransform: 'none'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Register />
        {/* <Login /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;