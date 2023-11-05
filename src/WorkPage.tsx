import { Dispatch, SetStateAction } from 'react';
import Navigator from './Navigation';
import './style.css'
import { Waiting } from './Waiting';

function WorkPage(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
      <Waiting/>
      </>
    )
}

export default WorkPage;
