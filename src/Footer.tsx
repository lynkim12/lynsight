import React from 'react';
import './style.css';
import "animate.css/animate.min.css";

export function Footer() {
    return(
    <div className='aboutContents' style={{backgroundColor: "#F4F5F8"}}>
        <div className='aboutTitle'>Contact</div>
        <div className='aboutContactList'>
          <a href='mailto:lynkim12@gmail.com' target='_blank' className='aboutContactListItem headShake'><div>lynkim12@gmail.com</div></a>
          <a href='https://www.linkedin.com/in/lynkim12' target='_blank' className='aboutContactListItem headShake:hover'><div className='aboutContactListItem'>LinkedIn</div></a>
          <a href='https://brunch.co.kr/@lynkim' target='_blank' className='aboutContactListItem headShake:hover'><div>Brunch</div></a>
        </div>
        </div>
        );
}
