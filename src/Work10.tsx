import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work10MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';

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
          description={'Encouraging ad creation to increase the activation rate.'} 
          team={'Karrot(Daangn)'} 
          role={'Service Planning, UXUI Design, Data Experiment'} 
          period={'2023.01. - 2023.03.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      <BackButton/>
      </>
    )
}

export default Work10;
