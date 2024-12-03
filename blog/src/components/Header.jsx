import React from 'react'
import {  Link, useLocation } from "react-router-dom";
import './header.css'


export default function Header() {
  const location = useLocation();
  
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={`link ${location.pathname ==='/'?'active':{}}`}>Home</Link>
          </li>
          <li>
            <Link to="/snippets/JavaScript" className={`link ${location.pathname ==='/snippets/JavaScript'?'active':{}}`}>JavaScript</Link>
          </li>

          <li>
            <Link to="/snippets/es6" className={`link ${location.pathname ==='/snippets/es6'?'active':{}}`}>ES 6</Link>
          </li>
          <li>
            <Link to="/snippets/reactjs" className={`link ${location.pathname ==='/snippets/reactjs'?'active':{}}`}>React JS</Link>
          </li>
          <li>
            <Link to="/snippets/nodejs" className={`link ${location.pathname ==='/snippets/nodejs'?'active':{}}`}>Node JS</Link>
          </li>
          <li>
            <Link to="/snippets/sql" className={`link ${location.pathname ==='/snippets/sql'?'active':{}}`}>SQL</Link>
          </li>
          {/* <li>
            <Link to="/list" className={`link ${location.pathname ==='/list'?'active':''}`} >Blogs</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
