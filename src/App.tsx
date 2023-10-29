import React from 'react';
import './App.css';
import './style.css';
import logo from './logo.png';


function App() {
  return (
    <div className='nav'>
      <img className='logo' src={logo} />

    <div className='menu'>
      <div className='slectedMenu'>
        Works
      </div>
      <div className='defaultMenu'>
        Writing
      </div>
      <div className='defaultMenu'>
        About
      </div>
    </div>
      
    </div>

  );
}

export default App;
