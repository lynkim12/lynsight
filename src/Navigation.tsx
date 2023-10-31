import { useState, useEffect } from 'react';
import './App.css';
import './style.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { NavMenuItem } from './navMenuItem';


function Navigator() {
  const [activeNav, setActiveNav] = useState(1);
  
  return (
    <div className='nav'>
      <Link to="/" onClick={() => setActiveNav(1)}>
            <img className='logo' src={logo} />
      </Link>
      <div className='menu'>
        <Link to="/" onClick={() => setActiveNav(1)}  style={{textDecoration: 'none'}}>
          <NavMenuItem isSelected={activeNav === 1 } name='Works'/>
        </Link>
        <Link to="/Writing" onClick={() => setActiveNav(2)} style={{textDecoration: 'none'}}>
          <NavMenuItem isSelected={activeNav === 2 } name='Writing' />
        </Link>
        <Link to="/About/" onClick={() => setActiveNav(3)} style={{textDecoration: 'none'}}>
          <NavMenuItem isSelected={activeNav === 3 } name='About' />
        </Link> 
       
      </div>
    </div>
  );
}

export default Navigator;

