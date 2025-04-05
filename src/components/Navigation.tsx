import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import '../App.css';
import '../style.css';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import { NavMenuItem } from './navMenuItem';
import React from 'react';
import LanguageToggle from './LanguageToggle';

const nav = document.querySelector('.nav') as HTMLElement | null;
let lastScrollY: number = window.scrollY;

if (nav) {
  window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY && window.scrollY > 250) {
          nav.style.transform = 'translateY(-100%)';
      } else {
          nav.style.transform = 'translateY(0)';
      }
      lastScrollY = window.scrollY;
  });
}

function Navigator(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {

  
  return (
    <div className='nav'>
      <Link to="/" onClick={() => props.setActiveNav(1)}>
            <img className='logo' src={logo} />
      </Link>
      <div className='menu'>
        <Link to="/" onClick={() => props.setActiveNav(1)} style={{textDecoration: 'none'}}>
          <NavMenuItem isSelected={props.activeNav === 1 } name='Works' />
        </Link>  
        <Link to="/Activities" onClick={() => props.setActiveNav(2)} style={{textDecoration: 'none'}}>
          <NavMenuItem isSelected={props.activeNav === 2 } name='Activities' />
        </Link>
        <Link to="/About" onClick={() => props.setActiveNav(3)} style={{textDecoration: 'none'}}>
          <NavMenuItem isSelected={props.activeNav === 3 } name='About' />
        </Link> 
        <LanguageToggle/>
      </div>
      
    </div>
  );
}

export default Navigator;

