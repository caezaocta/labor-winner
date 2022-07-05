import Detail from './pages/DetailPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from './pages/SearchPage';


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
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/search-page"  component={Search}/>
            <Route path="/search-page/:name" component={Detail}/>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;