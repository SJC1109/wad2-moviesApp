import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddLeaveWordPage from './pages/addLeaveWordPage';
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch,} from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import upcomingMoviePage from "./pages/upcomingMoviePage";
import topRatedPage from "./pages/topRatedPage";
import now_playingPage from "./pages/now_playingMoviePage";
import watchListPage from "./pages/watchListPage";
import CreditPage from "./pages/creditPage";
import PeoplePage from './pages/peoplePage'
import PeopleDetailsPage from './pages/peopleDetailsPage'
import PeoplesContextProvider from "./contexts/peoplesContext";
import AuthProvider from "./contexts/authContext"
import signUpPage from "./pages/signUpPage";
import loginPage from "./pages/loginPage";
import PrivateRoute from "./components/privateRoute"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfilePage from "./pages/profilePage";

const App = () => {
  return (
   <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <PeoplesContextProvider>{/* NEW  */}

          <GenresContextProvider>    {/* NEW */}
          <AuthProvider>
            <Switch> 
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path="/people/:id" component={PeopleDetailsPage} />
            
          <Route exact path="/movies/signup" component={signUpPage} />
          <Route exact path="/movies/login" component={loginPage} />
          <PrivateRoute path="/movies/profile" component={ProfilePage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/words/form" component={AddLeaveWordPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/upcoming/watchlist" component={watchListPage} />
          <Route exact path="/movies/upcoming" component={upcomingMoviePage} />
          <Route exact path="/movies/now_playing" component={now_playingPage} />
          <Route exact path="/movies/top_rated" component={topRatedPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/credit/:id" component={CreditPage}/>
          <Route path="/" component={HomePage} />
          
          <Redirect from="*" to="/" />
          </Switch>
         
          </AuthProvider> 
         </GenresContextProvider>    {/* NEW */}
         </PeoplesContextProvider>
         </MoviesContextProvider>     {/* NEW */}
       </div>
     </div>
   </BrowserRouter>
   );
};

ReactDOM.render(<App />, document.getElementById("root")); 
