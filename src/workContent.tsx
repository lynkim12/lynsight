import React from 'react';
import './App.css';
import './style.css';

export function Content() {
  return (
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
  
  );
}

export default Content;