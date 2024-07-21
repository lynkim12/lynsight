import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work9MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';

//Eliminating Concerns of Creating Ads

function Work10(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'Eliminating Concerns of Creating Ads'} 
          description={'Introducing new vertical video ads in the home feed.'} 
          team={'Karrot(Daangn)'} 
          role={'Service Planning, UXUI Design, Experience'} 
          period={'2023.01. - 2023.03.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      </>
    )
}

export default Work10;
