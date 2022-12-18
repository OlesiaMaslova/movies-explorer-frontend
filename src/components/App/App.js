import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../vendor/normalize.css';
import './App.css';
import '../../index.css';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import NotFoundPage from '../NotFoundPage/NotFounPage';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/profile">
      <Profile/>
      </Route>
      <Route path="*">
      <NotFoundPage />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
