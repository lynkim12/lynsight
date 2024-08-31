import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work3MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';

//Store UX/UI Design

function Work3(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'Store UX/UI Design'} 
          description={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} 
          team={'Styleshare'} 
          role={'Service Planning, UXUI Design'} 
          period={'2020.10 - 2020.12.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      <BackButton/>
      </>
    )
}

export default Work3;
