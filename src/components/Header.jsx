import React from "react";
import logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          <img src={logo} alt="header" className="nav-logo-image" />
        </a>
        <div className="nav-menu">
          <ul className="nav-list">
            <li>
              <a href="/menu" className="nav-link"> Menu</a>
            </li>
            <li>
              <a href="/gallery" className="nav-link"> Gallery</a>
            </li>
          </ul>
        </div>
        <div className="nav-toggle"> 
            <MenuIcon/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
