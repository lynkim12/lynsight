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
import NextItem from './components/NextItem';
import thumbnail11 from './image/thumbnails/thumbnail11.png';
import OpenButton from './components/OpenButton';

//StoreUXUIDesign

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
          period={'2020.10 - 2020.12.'}
          showButton={true}
          buttonLabel="View Project"
          buttonHref="https://www.figma.com/proto/iQ9Tgs7kQgjO6waM0oealt/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9B%B9?page-id=318%3A17733&node-id=318-19164&viewport=301%2C471%2C0.05&t=zsUXHmmBb8vAF2kP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=318%3A19164"/>
      </div>
      <MainImage image={mainImage}/>
      <NextItem to='/Work11' thumbnail={thumbnail11} nextProjectTitle='Improvement the mission contents UX'/>
      {/* <Waiting/> */}
      {/* <WorkTextSection description={<div>Please click <b>"View Project"</b> button to read contents</div>}/> */}
      <WorkTextSection title=''/>
      <BackButton/>
      
      </>
    )
}

export default Work3;
