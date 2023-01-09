/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Switch, Route, Redirect, useHistory} from 'react-router-dom';
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
import * as auth from '../../utils/Auth';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";


function App() {
  const [tokenAuth, setTokenAuth] = React.useState('');
  const mainApi = new MainApi('http://api.omaslovadiploma.nomoredomains.club', {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${tokenAuth}`,
});
  const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [serverError, setServerError ] = React.useState('');
  const [errorDisplay, setErrorDisplay] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [saveSate, setSaveState] = React.useState(false);
  const [searchMessage, setSearchMessage] = React.useState('Ничего не найдено');
 
  function getInitialMovies() {
    return moviesApi.getMovies()
    .then((res) => {
        setMovies(res);
    })
    .catch((err) => {
        console.log(err);
        setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз.')
    })
   
  }


  function handleSaveMovie(movie) {
       return mainApi.saveMovie(movie)
    .then((res)=>{
      setSaveState(true)
    })
    .catch((err) => {
      console.log(err)
    })
 
  }

  function handleDeleteMovie(movie){
   return mainApi.deleteMovie(movie)
    .then((res)=>{
      setSaveState(false)
      setSavedMovies((res) => res.filter((m) => m._id !== movie._id));
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleUpdateUserInfo(data) {
   return mainApi.updateUserInfo(data)
    .then((res) => {
      setCurrentUser(res);
      setSubmitSuccess(true);
      setErrorDisplay(false);
    })
    .catch((err) => {
      setServerError(err);
      setErrorDisplay(true);
      setSubmitSuccess(false);
    })
  }

  function onRegister(data) {
    return auth.register(data)
        .then((res) => {
          setErrorDisplay(false);
          return auth.authorize(data)
          .then(({token}) => {
            localStorage.setItem('token', token);
            setCurrentUser(data);
            setIsLoggedIn(true);
          })
        })
        .catch((err) => {
          setServerError(err);
          setErrorDisplay(true);
  })
  .finally(() => setErrorDisplay(false))
}

function onLogin(data) {
  return auth.authorize(data)
        .then(({token}) => {
          localStorage.setItem('token', token);
          setCurrentUser(data);
          setIsLoggedIn(true);
          setErrorDisplay(false);
        })
        .catch((err) => {
          setServerError(err);
          setErrorDisplay(true);
        })
}

function handleLogOut() {
  setIsLoggedIn(false);
  localStorage.clear();
  history.push('/');
}

function getTokenChecked() {
  const jwt = localStorage.getItem('token');
  setTokenAuth(jwt);

  if (!jwt) {
      return;
  }
  auth.checkToken(jwt)
      .then((data) => {
          setIsLoggedIn(true);
      })
      .catch((err) => {
          console.log(err);
      })

}
React.useEffect(() => {
  getTokenChecked();
},[]);

React.useEffect(() => {
  if(isLoggedIn) {
    history.push('/movies');
  }
}, [isLoggedIn, history]);

React.useEffect(() => {
  if(isLoggedIn) {
    getInitialMovies();
  }
},[isLoggedIn, currentUser]);

function getSavedMovies() {
  if(!isLoggedIn) {
    return
}
    mainApi.getSavedMovies() 
    .then((res) => {
      setSavedMovies(res)
  })
  .catch((err) => {
      console.log(err);
  })
 
}

React.useEffect(() => {

  getSavedMovies();
  return () => setSaveState(false);
},[isLoggedIn, currentUser, saveSate]);

React.useEffect(() => {
  if(!isLoggedIn) {
      return
  }
  mainApi.getUserInfo()
      .then((data) => {
          setCurrentUser(data);
      })
      .catch((err) => {
          console.log(`Ошибка: ${err}`);
      })
}, [isLoggedIn])

return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>

      <ProtectedRoute 
      exact path="/movies"
      isLoggedIn={isLoggedIn}
      component={Movies}
      onSave={handleSaveMovie}
      movies={movies}
      userMovies={savedMovies}
      onDelete={handleDeleteMovie}
      searchMessage={searchMessage}
        />
      <ProtectedRoute 
      exact path="/saved-movies"
      isLoggedIn={isLoggedIn}
      component={SavedMovies}
      movies={savedMovies}
      onDelete={handleDeleteMovie}
      />
   
   <ProtectedRoute 
      exact path="/profile"
      isLoggedIn={isLoggedIn}
      component={Profile}
      onSubmit={handleUpdateUserInfo}
      serverError={serverError}
      errorDisplay={errorDisplay}
      submitSuccess={submitSuccess}
      onLogout={handleLogOut}
      />

  
      <Route path="/signin">
        <Login onLogin={onLogin} serverError={serverError} errorDisplay={errorDisplay} />
      </Route>
      <Route path="/signup">
        <Register onRegister={onRegister} serverError={serverError} errorDisplay={errorDisplay}/>
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="*">
      <NotFoundPage />
      </Route>
      <Route>
        {isLoggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
