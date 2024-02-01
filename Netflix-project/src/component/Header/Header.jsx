import React, { useState } from "react";
import "./header.css";
import logo from "../../image/-11621687998ytrgnduxoh.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";

function Header() {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="hi">
          <img src={logo} alt="Netflix" width="100" />
        </div>
        <div className="header_left">
          <button id="toggle-button" onClick={toggleList}>
            ☰
          </button>

          <ul id="toggle-list" className={isListOpen ? "show" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TvShows">TvShows</Link>
            </li>
            <li>
              <Link to="/Movie">Movie</Link>
            </li>
            <li>
              <Link to="/Latest">Latest</Link>
            </li>
            <li>
              <Link to="/My List">My List</Link>
            </li>
            <li>
              <Link to="/Browse By Languages">Browse By Languages</Link>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
