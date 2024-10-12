import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work10MainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';
import NextItem from './components/NextItem';
import thumbnail1 from './image/thumbnails/thumbnail1.png';
import { WorkImage } from './workDetailPage/WorkImage';
import background from './image/works/work10background.png';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
import problem1 from './image/works/work10problem1.png';
import problem2 from './image/works/work10problem2.png';
import problem3 from './image/works/work10problem3.png';
import problem4 from './image/works/work10problem4.png';
import solution1 from './image/works/work10solution1.png';
import solution2 from './image/works/work10solution2.png';
import solution3 from './image/works/work10solution3.png';
import revise from './image/works/work10 Revised structure.png';
import past from './image/works/work10 Past structure.png';
import solution11 from './image/works/work10solution1-1.png';
import solution22 from './image/works/work10solution2-2.png';
import solution33 from './image/works/work10solution33.png';
import { Divider } from '@mui/material';
import result1 from './image/works/work10result1.png';
import result2 from './image/works/work10result2.png';

//EliminatingConcernsofCreatingAds

function Work10(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'Eliminating Concerns of Creating Ads'} 
          description={'Encouraging ad creation to increase the activation rate.'} 
          team={'Karrot(Daangn)'} 
          role={'Service Planning, UXUI Design, Data Experiment'} 
          period={'2023.01. - 2023.03.'}/>
      </div>
      <MainImage image={mainImage}/>
      <Divider/>
      <WorkTextSection title='Background' description='Among the advertisers who have created an ad account, 36% have never created an ad. To encourage them to create ads, we analyzed the issues with the current design and proposed various ideas.'/>
      <WorkFullImage image={background}  isMargin={true} isBottomMargin={true}/>
      <div style={{backgroundColor:'#F4F5F8'}}>
        <WorkTextSection title='Problem 1.' description={'The rate of clicking on "Create Ad" was very low at 29%, and the completion rate for those who attempted to create an ad was also very low at 34%.'}/>
        <div className={'margin48'} style={{margin:"auto", maxWidth:"1600px", alignContent: "center", display: "flex", flexDirection: "row", gap:"40px", marginBottom:'60px'}}>
            <WorkFullImage image={problem1} />     
            <WorkFullImage image={problem2} />        
        </div>
        <WorkTextSection title='Problem 2.' description={"After drafting ad posts, most advertisers have launched their ads within 1 to 2 days. This indicates that advertisers decide on whether to run an ad within 2 days of creating the post. It's important to reflect this behavior pattern when selecting ad creatives."}/>
        <div className={'margin48'} style={{margin:"auto", maxWidth:"1600px", alignContent: "center", display: "flex", flexDirection: "row", gap:"40px", marginBottom:'120px'}}>
            <WorkFullImage image={problem3} />     
            <WorkFullImage image={problem4} />        
        </div>
      <Divider/>
      </div>
      <WorkTextSection title='Solution 1.' description={"Encouraging ad creation on empty page"}/>
      <WorkFullImage image={solution1} />   
      <WorkFullImage image={solution11} /> 
      <Divider/>
      <WorkTextSection title='Solution 2.' description={"Recommend ad creatives during the selection phase"}/>
      <WorkFullImage image={solution2} isBottomMargin={true} />   
      <div className={'margin48'} style={{margin:"auto", maxWidth:"1600px", alignContent: "center", display: "flex", flexDirection: "row", gap:"40px", marginBottom:'60px'}}>
            <WorkFullImage image={past} isBorder={true} isRoundedCorner={true} isShadow={true} />     
            <WorkFullImage image={revise} isBorder={true} isRoundedCorner={true} isShadow={true}/>        
        </div>
        <WorkFullImage image={solution22} isBottomMargin={true} /> 
        <Divider/>
      <WorkTextSection title='Solution 3.' description={"Guide proper actions on the ad manager"}/>
      <WorkFullImage image={solution3} isBottomMargin={false} />
      <WorkFullImage image={solution33} isBottomMargin={true} /> 
      <Divider/>
      <WorkTextSection 
          title='Result' />
      <div className='image-center margin48 horizontal-layout'>
        <WorkFullImage image={result1} isMargin={false} isBottomMargin={true} />   
        <WorkFullImage image={result2} isMargin={false} isBottomMargin={true} />   
      </div>  
      <WorkTextSection title = ' '/>    
      <BackButton/>
      <NextItem to='/Work1' thumbnail={thumbnail1} nextProjectTitle='New Ads Platform for Experts'/>
      </>
    )
}

export default Work10;
