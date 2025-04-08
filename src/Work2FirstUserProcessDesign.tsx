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
//FirstUserProcessDesign

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
          period={'2020.05 - 2020.11.'}
          showButton={true}
          buttonLabel="View Project"
          buttonHref="https://www.figma.com/proto/iQ9Tgs7kQgjO6waM0oealt/Portfolio_lynkim?page-id=4%3A44&node-id=318-18560&viewport=710%2C971%2C0.16&t=3pOCsjuWLsdn124f-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=318%3A18560"/>
      </div>
      <MainImage image={mainImage}/>
      {/* <Waiting/> */}
      <BackButton/>
      
      <NextItem to='/Work3' thumbnail={thumbnail3} nextProjectTitle='Store UX/UI Design'/>
      </>
    )
}

export default Work2;
