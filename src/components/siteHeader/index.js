import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/upcoming/watchlist">
              Watchlist
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link text-white" to="/people">
              People
            </Link>
          </li>

          <div class="dropdown">
            <button class="dropbtn">movies</button>
            <div class="dropdown-content">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/movies/now_playing">
                Nowplaying
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/movies/top_rated">
                Top
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/movies/upcoming">
                Upcoming
                </Link>
              </li>
           
            </div>
          </div>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;