import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Real Estate Listings</h1>
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <p>&copy; 2024 Real Estate App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
