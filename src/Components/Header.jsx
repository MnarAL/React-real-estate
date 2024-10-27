// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Real Estate App</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add-property">Add Property</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
