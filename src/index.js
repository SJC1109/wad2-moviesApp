import AddMovieReviewPage from './pages/addMovieReviewPage'
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

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider> 
          <GenresContextProvider>
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={upcomingMoviePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider> 
        </MoviesContextProvider> 
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));