
import './App.css';
import MovieList from './components/MovieList';
import SearchForm from "./components/SearchForm"
import Favorites from './components/Favorites';
import {Switch, Route, BrowserRouter as Router, NavLink} from "react-router-dom";
// const [movies, setMovies] = useState<Movie[]>([]);

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink exact to="/search">Search</NavLink></li>
              <li><NavLink exact to="/favorites">Favorites</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/search">
            <SearchForm />
          </Route>
          <Route path="/">
            <h1>Home Page</h1>
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
