import React, { Dispatch, SetStateAction } from 'react';
import Navigator from './components/Navigation';
import { Waiting } from './components/Waiting';
import './font.css';
import './style.css';
import { Footer } from './components/Footer';
import NextItem from './components/NextItem';
import ActivitiyCard from './components/ActivitiesCard';
import thumbnail9 from './image/thumbnails/thumbnail9.png';

function Activities(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
  return (
    <div>
    <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
    <div className='pageTitle'>Activities</div>  
  {/* <div className='workContentslist'> */}
      {/* <div className='contents zoomIn' > */}
        {/* <ActivitiyCard thumbnail={thumbnail9} projectTitle={'title'} projectDescription={'description'} projectSubtitle={'subtitle'} period={'2024'} activityPage={''} /> */}
      {/* </div> */}
    {/* </div> */}
    <Waiting/>
    <Footer/>
  </div>
  )
}

export default Activities;

