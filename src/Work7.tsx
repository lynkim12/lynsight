import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work7MainImage.jpg';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';

//New Catalog Manager for Ads

function Work7(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'New Catalog Manager for Ads'} 
          description={'Creating a catalog manager service that can handle over one million products.'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design'} 
          period={'2024.01. - 2022.06.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      </>
    )
}

export default Work7;
