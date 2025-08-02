import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work9MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import YouTubeEmbed from './components/YouTubeEmbed';
import BackButton from './components/BackButton';
import NextItem from './components/NextItem';
import thumbnail8 from './image/thumbnails/thumbnail8.png';
import { Hidden } from '@mui/material';
//NewVideoAds

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
          description={'Introducing new vertical video ads on Karrot.'} 
          team={'Karrot(Daangn)'} 
          role={'UXUI Design, Data Experiment'} 
          period={'2024.01. - 2024.06.'}/>
      </div>
      <div style = {{ overflow:'Hidden', maxHeight:'1000px', background:'linear-gradient(180deg, #F4F5F8 0%, #F1F2F7 100%)'}} >
      <video style = {{ width:"100%", aspectRatio: "auto", maxHeight:'800px'}}  loop autoPlay muted>
            <source src="/thumbnail9.mov" type="video/mp4" />
                Your browser does not support the video tag.
      </video>
      </div>
      <MainImage image={mainImage}/>
      <Waiting/>
      <BackButton/>
      <NextItem to='/Work8' thumbnail={thumbnail8} nextProjectTitle='A Bidding System in Search Ads'/>
      </>
    )
}

export default Work9;
