import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="brand-name-logo">
          <img
            src="/images/logo.webp"
            alt="logo"
            width={50}
            height={50}
            style={{ border: "none" }}
            className="logo"
          ></img>
          <h2 className="brand-name">Tafseer Mehndi Artist</h2>
        </div>
        <div
          className={`hamburger-menu ${isToggle ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span className={`bar ${isToggle ? "line1" : ""}`}></span>
          <span className={`bar ${isToggle ? "line2" : ""}`}></span>
          <span className={`bar ${isToggle ? "line3" : ""}`}></span>
        </div>
        <div className={`navbar-links ${isToggle ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "crimson" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "crimson" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "crimson" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "crimson" : "")}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "crimson" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
