import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
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
import { Wavedivider } from './components/Wavedivider';
import work8usecaseimage1 from './image/works/work8usecaseimage1.png';
import work8usecaseimage2 from './image/works/work8usecaseimage2.png';
import asis from './image/works/work8asis.png';
import tobe from './image/works/work8tobe.png';
import { Divider } from '@mui/material';
import design1 from './image/works/work8design1.png';
import design2 from './image/works/work8design2.png';
import design3 from './image/works/work8design3.png';
import design4 from './image/works/work8design4.png';
import result1 from './image/works/work8result1.png';
import result2 from './image/works/work8result2.png';
import BackButton from './components/BackButton';
import NextItem from './components/NextItem';
import thumbnail7 from './image/workThumbnails/thumbnail7.png';



//BiddingSystem

function Work8(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <div className='work-page-bottom-padding'>
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
      <WorkFullImage image={work8image1} isMargin={true} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true}/>     
      
      <WorkTextSection
        title = 'Goal'
        description = {<div>To add a biding system that allows small business owners in the neighborhood to advertise as much as they want to.</div>}
      />
      <WorkFullImage image={goalimage} isMargin={true} isBackgroundColor={false} isRoundedCorner={false} isBottomMargin={true}/> 
      
      <WorkTextSection 
        title = 'Design Process'
        description = {<div>Before I started designing, first of all, I analyzed the most purchased keywords by advertisers who used search advertisements so far, and defined the main target that required a keyword planner.
          <br/><br/>I also organized the service policy for that user, the requirements of the users, and the scenarios that should be considered.</div>}
      />
      <div className='image-center margin48 horizontal-layout'>
        <WorkFullImage image={work8usecaseimage2} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Keyword Purchase Count Status'/>   
        <WorkFullImage image={work8usecaseimage1} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Policy and Experience Design'/>   
        </div>

    
      <WorkTextSection 
        title = 'Usecase Analysis'
        description = {<div>The main users of search advertisements are more companies that provide services in close proximity than those that provide services nationwide.</div>}
      />
      <WorkFullImage image={usecaseTable} isMargin={true} isBackgroundColor={false} isRoundedCorner={false} isBottomMargin={true}/>
      
      <WorkTextSection
        title = 'Key Features'/>
      <WorkFullImage image={keyfeatures} isMargin={true} isBackgroundColor={false} isRoundedCorner={false} isBottomMargin={true}/> 
      
      <WorkTextSection title = 'UXUI Design'/>
      <WorkFullImage image={asis} isMargin={false} isBottomMargin={false}/>
      <Divider/>
      <WorkFullImage image={tobe} isMargin={false}/>
      <WorkTextSection bigTitle={true}
        title = { <div>Key Design 1. <br/> To select a recommended keyword</div>}
        description = {
          <div>
            The bidding competition rate and bid price for each keyword have been removed, leaving only the search volume for advertisers to consider when selecting keywords, reducing the complexity of their decision-making. 
            <br/><br/>
            The prominence of the keyword search feature has been lowered, and recommended keywords have been emphasized to prevent the selection of ineffective keywords.
          </div>}/>
      <WorkFullImage image={design1} isBottomMargin={true} />
      <Divider/>
      <div style={{background: 'linear-gradient(0deg, rgba(250, 250, 251, 0.00) 0%, #F6F7F9 30%)'}}>
        <WorkTextSection bigTitle={true}
          title =  { <div>Key Design 2. <br/> The easiest bidding competition</div>}
          description = {
            <div>
              We conducted multiple rounds of usability testing to ensure that everyone could enter an appropriate bid amount. We adjusted the messaging to help users better understand the concept of ad bidding, and added a control button to allow them to set a suitable amount.
            </div>}/>
        <WorkFullImage image={design2} />
        <WorkTextSection bigTitle={true}
          description = {
            <div>
              On the bidding page, advertisers were able to easily grasp the information presented, such as “how much other advertisers are paying on average,” and in an effort to stay competitive, they decided to add an extra 10 won to their bid.</div>}/>
        <WorkFullImage image={design3} />
      </div>
      <Divider/>
      <WorkTextSection bigTitle={true}
          title =  { <div>Key Design 3. <br/> To select an appropriate budget</div>}
          description = {
            <div>
              Finally, we used the UI to help advertisers set an appropriate ad budget based on their chosen bid amount.</div>}/>
      <WorkFullImage image={design4} isBottomMargin={true} />    
      <Wavedivider/>  
      <WorkTextSection 
        title = 'Result'
        description = {<div>Two months after the launch of Search Ads V2, search advertising revenue increased more than <b className='textGradient'>4 times</b>, and bid amounts per keyword also grew rapidly. This significant growth is still ongoing.</div>}
      />
      <div className='image-center horizontal-layout margin48'>
        <WorkFullImage image={result1} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Search advertising revenue'/>   
        <WorkFullImage image={result2} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Bid amount per keyword'/>   
        </div>  
      <WorkTextSection
        title = ' '/>
      <BackButton/>
      <NextItem to='/Work7' thumbnail={thumbnail7} nextProjectTitle='New Catalog Manager for Ads'/>
      </div>
      </>
    )
}

export default Work8;
