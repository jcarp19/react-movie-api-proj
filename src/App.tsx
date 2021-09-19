import React from "react";
import './App.css';
import MovieList from './components/MovieList';
import SearchForm from "./components/SearchForm"
import Favorites from './components/Favorites';
import Logo from "./movieNite.jpg";
import {Switch, Route, BrowserRouter as Router, NavLink} from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Router>
          <header>
            <div className="logo-box">
              <img src={Logo} alt="logo" className="logo" />
            </div>
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
    </div>
  );
}

export default App;
