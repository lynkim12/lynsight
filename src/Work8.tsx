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
import work8image1 from './image/works/work8Image.png';
import { WorkImage } from './workDetailPage/WorkImage';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
import usecaseTable from './image/works/work8table.png';
import goalimage from './image/works/work8goalimage.png';
import keyfeatures from './image/works/work8keyfeaturesimage.png';
import planningImage from './image/works/work8Planningimage.png';
import { Wavedivider } from './Wavedivider';
import work8usecaseimage1 from './image/works/work8usecaseimage1.png';
import work8usecaseimage2 from './image/works/work8usecaseimage2.png';

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
      <WorkTextSection 
        title = 'Background'
        description = {<div>Karrot's search ads display two ads at the top of search results randomly (as of July 2024). 
          <br/> Without price competition, all ads are shown randomly at a fixed CPC, which limits advertisers from selectively showing their ads more frequently for desired keywords. From a business perspective, this also means Karrot cannot sell high-competition keywords at higher prices, hindering revenue growth.
          <br/><br/>To address this, we have decided to implement a "keyword bidding system" that will allow advertisers to compete freely by setting their own CPCs, thereby increasing search ad revenue.</div>}
      />
      <WorkFullImage image={work8image1} isMargin={true} isBackgroundColor={true} isRoundedCorner={true}/>     
      
      <WorkTextSection
        title = 'Goal'
        description = {<div>To add a biding system that allows small business owners in the neighborhood to advertise as much as they want to.</div>}
      />
      <WorkFullImage image={goalimage} isMargin={true} isBackgroundColor={false} isRoundedCorner={false}/> 
      
      <WorkTextSection 
        title = 'Design Process'
        description = {<div>Before I started designing, first of all, I analyzed the most purchased keywords by advertisers who used search advertisements so far, and defined the main target that required a keyword planner.
          <br/><br/>I also organized the service policy for that user, the requirements of the users, and the scenarios that should be considered.</div>}
      />
      <div className='image-center' style={{display:'flex', flexDirection:'row', gap:'24px', margin:'auto', maxWidth:'1400px'}}>
        <WorkFullImage image={work8usecaseimage2} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} description='Keyword Purchase Count Status'/>   
        <WorkFullImage image={work8usecaseimage1} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} description='Policy and Experience Design'/>   
        </div>

    
      <WorkTextSection 
        title = 'Usecase Analysis'
        description = {<div>The main users of search advertisements are more companies that provide services in close proximity than those that provide services nationwide.</div>}
      />
      <WorkFullImage image={usecaseTable} isMargin={true} isBackgroundColor={false} isRoundedCorner={false}/>
      
      <WorkTextSection
        title = 'Key Features'/>
      <WorkFullImage image={keyfeatures} isMargin={true} isBackgroundColor={false} isRoundedCorner={false}/> 
        <Wavedivider/>
        <WorkTextSection title = 'UXUI Design'/>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
            <div className='contentsalign gap20'>
                <div style={{fontSize: "32px", fontWeight: "700"}}>
                   To select a recommended keyword
                </div>
                <div style={{fontSize: "22px", fontWeight: "400", color:'#51575E'}}>
                  Choose related keywords with good advertising effects
                </div>
            </div>
        </AnimationOnScroll>
      <Waiting/>
      </>
    )
}

export default Work8;
