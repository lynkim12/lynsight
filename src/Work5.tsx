import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work5MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
import research1 from './image/works/work5research1.png';
import research2 from './image/works/work5research2.png';
import { Divider } from '@mui/material';
import { Wavedivider } from './Wavedivider';
import strategy from './image/works/work5strategy.png';
import { WorkImage } from './workDetailPage/WorkImage';
import wireframe from './image/works/work5wireframe.png';
import system from './image/works/work5system.png';
import system2 from './image/works/work5system2.png';
import NextItem from './components/NextItem';
import thumbnail3 from './image/thumbnails/thumbnail3.png';
//New Service Design

function Work5(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'New Service Design'} 
          description={'Designing an entirely new book-share platform for working people who want to develop compentency.'} 
          team={'Bookcovery'} 
          role={'Service Planning, UXUI Design'} 
          period={'2020.01. - 2020.08.'}/>
      </div>
      <MainImage image={mainImage}/>

      <WorkTextSection
        title='Overview'
        description={<div>“Bookcovery” is an online book-sharing platform designed to help people seeking growth find the books they need. This service is planned to address the challenges faced by the younger knowledge-driven demographic in finding essential books and informational resources, while also promoting book consumption.</div>}/>
      <div style={{padding:'24px'}}/>
      <Wavedivider/>
      {/* <Divider/> */}
      <WorkTextSection
        title='User research'
        description={<div>We recruited approximately 40 beta testers in their 20s to 40s. These beta testers are professionals who study specialized knowledge through books, work in specialized fields, and write about their expertise. <br/> They expressed key needs for a sense of <b>"intellectual belonging" and the "continuous discovery of learning materials."</b></div>}/>
      <WorkFullImage image={research1}/>
      <WorkFullImage image={research2}/>
      <WorkTextSection
        title='Hooks Habituation Strategy'
        description='Based on user interviews, we categorized users by their key needs and developed core service features as well as strategies for activation and retention.'/>
      <WorkImage image={strategy} isMaxheight={false} isbottomPadding={true}/>
      <div style={{background: 'linear-gradient(180deg, #F4F5F8 0%, #F1F2F7 100%)', paddingBottom:'40px'}}>
        <WorkTextSection title='Wireframe'/>
        <WorkFullImage image={wireframe} isBottomMargin={true} /> 
      </div>
      <WorkTextSection title='Design System'/>
      <WorkFullImage image={system}/>
      <WorkFullImage image={system2}/>
      <Waiting/>
      <BackButton/>
      <NextItem to='/Work3' thumbnail={thumbnail3} nextProjectTitle='Store UX/UI Design'/>
      </>
    )
}

export default Work5;
