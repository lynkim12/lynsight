import React, { Dispatch, SetStateAction } from 'react';
import Navigator from './components/Navigation';
import { Waiting } from './components/Waiting';
import './font.css';
import './style.css';
import { Footer } from './components/Footer';
import NextItem from './components/NextItem';
import ActivitiyCard from './components/ActivitiesCard';
import thumbnail9 from './image/thumbnails/thumbnail9.png';
import BlogContent from './components/BlogContent';
import { Divider } from '@mui/material';

function Activities(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
  return (
    <div>
    <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
    <div className='pageTitle'>Activities</div>  
    <div className='blogContentslist'>
        <div className='contents zoomIn' >
            <BlogContent blogPage={"/Article1"} title={'우연함과 생각과 태도의 변화'} description={'7월 한 달에 대한 회고'} category={'essay'} date={'2025.08.01.'} locked={true}/>
        </div>
      <Divider className = 'divider2'/>
    </div>
    <Footer/>
  </div>
  )
}

export default Activities;

