import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work2MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';
import NextItem from './components/NextItem';
import thumbnail3 from './image/thumbnails/thumbnail3.png';
//First User Process Design

function Work2(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'First User Process Design'} 
          description={'Onboarding process design on bookcovery to make activation.'} 
          team={'Bookcovery'} 
          role={'Service Planning, UXUI Design'} 
          period={'2020.05 - 2020.11.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      <BackButton/>
      <NextItem to='/Work3' thumbnail={thumbnail3} nextProjectTitle='Store UX/UI Design'/>
      </>
    )
}

export default Work2;
