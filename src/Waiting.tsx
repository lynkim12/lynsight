import React from 'react';
import './style.css'
import waiting from './image/waiting.png';

export function Waiting() {
    return (
      <>
      <div className='center-screen fadeIn' >
      <img src={waiting} className={"flow"} style={{width: "480px", aspectRatio: "auto", marginBottom: "28px"}}/>
      <div style ={{fontFamily: "Handlee", fontSize: "28px", color: "#131517"}}>
        Waiting for update
      </div>
      </div>
      </>
    )
};