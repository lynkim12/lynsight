import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import work1image1 from './image/works/work1MainImage.jpg';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import {MainImage} from './workDetailPage/WorkMainImage';

//Leading More Business Users to Advertising

function Work2(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn'>
        <WorkTitle 
          title={'Leading More Business Users to Advertising'} 
          description={'An experiment of UX to induce users to start advertising.'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design'} 
          period={'2022.01. - 2022.08.'}/>
      </div>
      <MainImage image={work1image1}/>
      <Waiting/>
      </>
    )
}

export default Work2;
