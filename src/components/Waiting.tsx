import React from 'react';
import '../style.css'
import waiting from '../image/waiting.png';

export function Waiting() {
    return (
      <>
      <div className='center-screen fadeIn' style={{marginTop: "-80px"}} >
      <img src={waiting} className={"flow"}/>
      <div style ={{fontFamily: "Handlee", fontSize: "28px", color: "#131517"}}>
        I'm lazy. If you can wait, keep waiting for updates.
      </div>
      </div>
      </>
    )
};