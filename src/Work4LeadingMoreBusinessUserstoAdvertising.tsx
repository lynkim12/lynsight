import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import work1image1 from './image/works/work4MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import {MainImage} from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';
import thumbnail5 from './image/thumbnails/thumbnail5.png';
import NextItem from './components/NextItem';

//LeadingMoreBusinessUserstoAdvertising

function Work2(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn'>
        <WorkTitle 
          title={'Leading More Business Users to Advertising'} 
          description={'An experiment of UX to induce users to start advertising.'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design'} 
          period={'2022.01. - 2022.08.'}
          showButton={true}
            buttonLabel="View Project"
            buttonHref="https://www.figma.com/proto/iQ9Tgs7kQgjO6waM0oealt/Portfolio_lynkim?page-id=318%3A17734&node-id=318-20269&viewport=429%2C606%2C0.2&t=FH0n1cixdg4JTkII-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=318%3A20269"/>
      </div>
      <MainImage image={work1image1}/>
      {/* <Waiting/> */}
      <BackButton/>
      <NextItem to='/Work5' thumbnail={thumbnail5} nextProjectTitle='New Service Design'/>
      </>
    )
}

export default Work2;
