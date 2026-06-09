// src/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext"; // Import the context

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/login" style={{ marginRight: "10px" }}>
        Login
      </Link>

      {/* This button triggers the theme change */}
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
}
