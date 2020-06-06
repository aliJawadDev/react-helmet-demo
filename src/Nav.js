import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Nav() {
  return (
      <div style={{backgroundColor: "royalBlue", padding:10}}>
      <Link to="/" className="Link"> Home </Link>
      <Link to="/about" className="Link"> About </Link>
      <Link to="/contact" className="Link"> Contact </Link>
      </div>
  );
}

export default Nav;
