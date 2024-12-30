import React from 'react'
import {  Link, useLocation } from "react-router-dom";
import './header.css'


export default function Header() {
  const location = useLocation();
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img 
            src="./AK.png" 
            alt="Home" 
            height="30"  // Adjust the height as needed
            className="d-inline-block align-text-top" // Bootstrap class to align the image
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link text-center     ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/JavaScript" ? "active" : ""
                }`}
                to="/snippets/JavaScript"
              >
                JavaScript
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/typescript" ? "active" : ""
                }`}
                to="/snippets/typescript"
              >
              TypeScript
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/es6" ? "active" : ""
                }`}
                to="/snippets/es6"
              >
                ES 6
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/reactjs" ? "active" : ""
                }`}
                to="/snippets/reactjs"
              >
                React JS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/reactsnippets" ? "active" : ""
                }`}
                to="/snippets/reactsnippets"
              >
                React JS Advance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/components" ? "active" : ""
                }`}
                to="/snippets/components"
              >
                Tailwind Components
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/nodejs" ? "active" : ""
                }`}
                to="/snippets/nodejs"
              >
                Node JS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/nodesnippets" ? "active" : ""
                }`}
                to="/snippets/nodesnippets"
              >
                Node JS Advance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-center   ${
                  location.pathname === "/snippets/sql" ? "active" : ""
                }`}
                to="/snippets/sql"
              >
                SQL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
