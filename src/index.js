import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch,} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";
import PeoplesContextProvider from "./contexts/peoplesContext";
import AuthProvider from "./contexts/authContext"
import "bootstrap/dist/css/bootstrap.min.css"

const HomePage = lazy(() =>import("./pages/homePage"));
const SiteHeader = lazy(() =>import('./components/siteHeader'));
const MovieReviewPage = lazy(() =>import("./pages/movieReviewPage"));
const MoviePage = lazy(() =>import('./pages/movieDetailsPage'));
const FavoriteMoviesPage = lazy(() =>import('./pages/favoritesMoviesPage'));
const upcomingMoviePage = lazy(() =>import("./pages/upcomingMoviePage"));
const topRatedPage = lazy(() =>import("./pages/topRatedPage"));
const now_playingPage = lazy(() =>import("./pages/now_playingMoviePage"));
const watchListPage = lazy(() =>import("./pages/watchListPage"));
const CreditPage = lazy(() =>import("./pages/creditPage"));
const PeoplePage = lazy(() =>import('./pages/peoplePage'));
const PeopleDetailsPage = lazy(() =>import('./pages/peopleDetailsPage'));
const signUpPage = lazy(() =>import("./pages/signUpPage"));
const loginPage = lazy(() =>import("./pages/loginPage"));
const ProfilePage = lazy(() =>import("./pages/profilePage"));
const AddMovieReviewPage = lazy(() =>import('./pages/addMovieReviewPage'));
const AddLeaveWordPage = lazy(() =>import('./pages/addLeaveWordPage'));
const PrivateRoute = lazy(() =>import("./components/privateRoute"));


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
          <PrivateRoute exact path="/upcoming/watchlist" component={watchListPage} />
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

ReactDOM.render(
  <Suspense fallback={<h3>Loading...</h3>}>
<App />,
  </Suspense>,
document.getElementById("root")); 
