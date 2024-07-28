import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work9MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { MainImage } from './workDetailPage/WorkMainImage';
import expert from './image/works/work6_img_expert.png';
import { WorkImage } from './workDetailPage/WorkImage';
import chart1 from './image/works/work6chart1.png'


//New Outlink-Type Ads

function Work6(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'New Outlink-Type Ads'} 
          description={'Introducing a new outlink-type advertisement for small businesses.'} 
          team={'Karrot(Daangn)'} 
          role={'Service Planning, UXUI Design'} 
          period={'2023.04 - 2023.07'}/>
      </div>
      <MainImage image={mainImage}/>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}> 
        <WorkTextSection 
          title={'Background'} 
          description={<div>
              On Karrot, there are small advertisers who spend less than 1 million KRW per month on ads and professional advertisers who spend more than 1 million KRW. <br/> The expert mode has a campaign &gt; ad group &gt; ad structure, which is challenging for small business owners who are not familiar with advertising to understand and use effectively. 
            </div>} 
        />
        <WorkImage image={expert} description={'Creating “Outlink Ads” on an Expert Mode'}/>
        <WorkTextSection 
          description={<div>
              In the expert mode platform for professional advertisers, the "Outlink Ads" product is exclusively offered. We observed that many small advertisers are migrating to the expert mode to use "Outlink Ads." Recognizing the strong demand for a simple and easy-to-use outlink ad product on mobile, we decided to add the outlink ad product to the easy mode for advertising.
          </div>}/>
        <WorkImage image={chart1} />
       
      </AnimationOnScroll>
      <Waiting/>
      </>
    )
}

export default Work6;
