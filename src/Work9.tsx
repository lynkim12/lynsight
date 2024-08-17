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
import YouTubeEmbed from './YouTubeEmbed';
import BackButton from './components/BackButton';

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
          role={'UXUI Design, Data Experiment'} 
          period={'2024.01. - 2024.06.'}/>
      </div>
      <MainImage image={mainImage}/>
      <YouTubeEmbed videoId="182NS2pHE2o" />
      <Waiting/>
      <BackButton/>
      </>
    )
}

export default Work9;
