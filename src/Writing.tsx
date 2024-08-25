import React, { Dispatch, SetStateAction } from 'react';
import Navigator from './Navigation';
import { Waiting } from './Waiting';
import './font.css';
import './style.css';
import { Footer } from './Footer';

function Writing(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='pageTitle'>Writing</div>
      <Waiting/>
      <Footer/>
      </>
    )
}

export default Writing;

