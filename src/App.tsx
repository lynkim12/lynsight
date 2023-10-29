import React from 'react';
import './App.css';
import './style.css';
import logo from './logo.png';
import Navigator from './Navigator';


function App() {
  return (
    <>
    <Navigator />
      <div className='contentslist'>
        <div className='contents'>
            <div className='content'>
              <img className='thumbnail' />
              <div className='contentsText'>
                <div className='subtitle'>
                  Karrot  
                </div>
                <div className='title'>
                  New Ads Platform for Expert
                </div>
                <div className='description'>
                  Designing an entirely new advertising platform for Mid- to Large-scale Advertisers
                </div>
              </div>
              
            </div>
        </div>
        <div className='contents'>
            contents
        </div>  
      </div>
    </>
  );
}

export default App;
