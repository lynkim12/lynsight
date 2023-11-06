import React, { Dispatch, SetStateAction } from 'react';
import Navigator from './Navigation';
import { Waiting } from './Waiting';
import './font.css';
import './style.css';

function Writing(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <Waiting/>
      </>
    )
}

export default Writing;

