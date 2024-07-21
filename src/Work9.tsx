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
import { MainImage } from './workDetailPage/WorkMainImage';

//New Video Ads

function Work9(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'New Video Ads'} 
          description={'Introducing new vertical video ads in the home feed.'} 
          team={'Karrot(Daangn)'} 
          role={'Service Planning, UXUI Design, Experience'} 
          period={'2024.01. - 2024.06.'}/>
      </div>
      <MainImage image={work1image1}/>
      <Waiting/>
      </>
    )
}

export default Work9;
