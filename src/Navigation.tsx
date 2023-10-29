import React from 'react';
import './App.css';
import './style.css';
import logo from './logo.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Navigator() {
  return (
    <div className='nav'>
      <Link style={{textDecoration: 'none'}} to="/">
        <img className='logo' src={logo} />
      </Link>
      <div className='menu'>
        <Link to="/" style={{textDecoration: 'none'}}>
          <div className='slectedMenu'>
            Works 
          </div>
        </Link>
        <Link to="/Writing" style={{textDecoration: 'none'}}>
          <div className='defaultMenu'>
            Writing
          </div>
        </Link>
        <Link to="/About/" style={{textDecoration: 'none'}}>
          <div className='defaultMenu'>
            About
          </div>
        </Link>
      </div>
    </div>
  
  );
}

export default Navigator;
