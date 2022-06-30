import Login from '../src/pages/Login'
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;