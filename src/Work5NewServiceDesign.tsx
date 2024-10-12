import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
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
import { Wavedivider } from './components/Wavedivider';
import strategy from './image/works/work5strategy.png';
import { WorkImage } from './workDetailPage/WorkImage';
import wireframe from './image/works/work5wireframe.png';
import system from './image/works/work5system.png';
import system2 from './image/works/work5system2.png';
import NextItem from './components/NextItem';
import thumbnail2 from './image/thumbnails/thumbnail2.png';
import design1 from './image/works/work5design1.png';
import design2 from './image/works/work5design2.png';
import design3 from './image/works/work5design3.png';
import design4 from './image/works/work5design4.png';
import cover from './image/works/work5coverimage.png';

//NewServiceDesign

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
      <div style={{background: 'linear-gradient(180deg, #F4F5F8 0%, #F1F2F7 100%)'}}>
        <WorkTextSection title='UXUI Design' description='Since the experience of discovering books through browsing is most important, I designed a UX that encourages repetitive behavior.'/>      
        <WorkFullImage image={design1}/>
      </div>
      <WorkFullImage image={design2}/>
      <WorkFullImage image={design3}/>
      <div style={{backgroundColor:'#333443'}}><WorkFullImage image={design4}/></div>
      <div style={{marginTop:'60px'}}><WorkFullImage image={cover} isMargin={true} isRoundedCorner={true} isBottomMargin={true}/></div>
      <BackButton/>
      <NextItem to='/Work2' thumbnail={thumbnail2} nextProjectTitle='First User Process Design'/>
      </>
    )
}

export default Work5;
