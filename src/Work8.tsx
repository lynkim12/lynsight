import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work8MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';

//A Bidding System in Search Ads

function Work8(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn'>
        <WorkTitle 
          title={'A Bidding System in Search Ads'} 
          description={'Designing a search advertising bidding system that anyone can easily use on mobile.'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, UT, Service Planning, UXUI Design'} 
          period={'2024.04. - 2024.06.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      </>
    )
}

export default Work8;
