import React from 'react';
import './style.css';
import "animate.css/animate.min.css";

export function Footer() {
    return(
    <div style={{backgroundColor: "#F4F5F8"}}>
    <div className='aboutContents' >
        <div className='aboutTitle'>Contact</div>
        <div className='aboutContactList'>
          <a href='mailto:lynkim12@gmail.com' target='_blank' className='aboutContactListItem'><div>lynkim12@gmail.com</div></a>
          <a href='https://www.linkedin.com/in/lynkim12' target='_blank' className='aboutContactListItem'><div>LinkedIn</div></a>
          <a href='https://brunch.co.kr/@lynkim' target='_blank' className='aboutContactListItem'><div>Brunch</div></a>
        </div>
        </div>
        </div>
        );
}
