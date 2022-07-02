import * as React from 'react';
import Landing from './pages/Landing'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins'
  },
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
        <Landing
        />
      </div>
    </ThemeProvider>
  );
}

export default App;