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
            <BlogContent blogPage={"/Article1"} title={'첫 번째 글 작성 중'} description={'7월 일기 작성 중'} category={'essay'} date={'2025.08.01.'}/>
        </div>
      <Divider className = 'divider2'/>
    </div>
    <Footer/>
  </div>
  )
}

export default Activities;

