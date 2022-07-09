import React from "react";
import "./Navbar.css";
import useNavbar from "./useNavbar";

import logo from "../../assets/images/logo.svg";
import home from "../../assets/images/home-icon.svg";
import search from "../../assets/images/search-icon.svg";
import watchlist from "../../assets/images/watchlist-icon.svg";
import orignals from "../../assets/images/original-icon.svg";
import movies from "../../assets/images/movie-icon.svg";
import series from "../../assets/images/series-icon.svg";

const Navbar = () => {
  const { handleAuth, userName, userPhoto } = useNavbar();

  return (
    <div className="navbar-body">
      <div className="navbar-logo">
        <img src={logo} alt="Disney+" />
      </div>

      {!userName ? 
        <div className="navbar-login-button" onClick={handleAuth}> Login </div>
        : 
        <>
          <div>
            <ul className="navigation">
              <div className="navigation-link-wrapper">
                <img src={home} alt="home" className="icon-image" />
                <li className="navigation-link">Home</li>
              </div>
              <div className="navigation-link-wrapper">
                <img src={search} alt="search" className="icon-image" />
                <li className="navigation-link">Search</li>
              </div>
              <div className="navigation-link-wrapper">
                <img src={watchlist} alt="watchlist" className="icon-image" />
                <li className="navigation-link">Watchlist</li>
              </div>
              <div className="navigation-link-wrapper">
                <img src={orignals} alt="orignals" className="icon-image" />
                <li className="navigation-link">Orignals</li>
              </div>
              <div className="navigation-link-wrapper">
                <img src={movies} alt="movies" className="icon-image" />
                <li className="navigation-link">Movies</li>
              </div>
              <div className="navigation-link-wrapper">
                <img src={series} alt="series" className="icon-image" />
                <li className="navigaion-link">Series</li>
              </div>
            </ul>
          </div>

          <div >
            <img src={userPhoto} alt="Profile"  className="profile-pic" />
          </div>
        </>
      }
    </div>
  );
};

export default Navbar;
