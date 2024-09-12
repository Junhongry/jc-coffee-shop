import React, { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  console.log('open?',open)
  return (
    <header className="absolute left-0 top-0 bg-bisque w-full z-100  ">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          <img src alt="header" className="nav-logo-image" />
        </a>
        <div className="DESKTOP nav-menu hidden sm:flex">
          <ul className="nav-list">
            <li>
              <a href="/menu" className="nav-link">
                Menu
              </a>
            </li>
            <li>
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div className="MOBILE sm:hidden HAMBURGER-ICON" onClick={() => setOpen((prev) => !prev)}>
          <div>
           <MenuIcon></MenuIcon>
          </div>
          <div className={open ? "showMenu" : "hideMenu"}>
          <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              {/* for the x button svg */}
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/menu">Menu</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/gallery">gallery</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">placeholder</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">placeholder</a>
              </li>
            </ul>
          </div>
          
        </div>
        <style>{`
      .hideMenu {
        display: none;
      }
      .showMenu {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </nav>
    </header>
  );
};

export default Header;
