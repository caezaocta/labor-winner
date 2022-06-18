import './App.css';
import SearchPage from '../src/pages/SearchPage'
import ProfilePage from '../src/pages/ProfilePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchPage />
        <ProfilePage />
      </header>
    </div>
  );
}

export default App;
