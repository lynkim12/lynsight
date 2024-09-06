import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import work1MainImage from './image/works/work1MainImage.jpg';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import {MainImage} from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';
import { WorkImage } from './workDetailPage/WorkImage';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
import goal from './image/works/work1goal.png';
import needs from './image/works/work1needs.png';
import IA from './image/works/work1IA.png';
import wireframe from './image/works/work1wireframe.png';
import { Divider } from '@mui/material';
import liteIA from './image/works/work1liteIA.png';
import ExpertIA from './image/works/work1exportIA.png';
import NextItem from './components/NextItem';
import thumbnail4 from './image/thumbnails/thumbnail4.png';
import feature1 from './image/works/work1feature1.png';
import feature2 from './image/works/work1feature2.png';
import feature3 from './image/works/work1feature3.png';
import feature4 from './image/works/work1feature4.png';
import feature5 from './image/works/work1feature5.png';
import feature6 from './image/works/work1feature6.png';
import direction1 from './image/works/work1direction1.png';
import direction2 from './image/works/work1direction2.png';
//New Ads Platform for Experts

function Work1(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'New Ads Platform for Experts'} 
          description={'An entirely new advertising platform for mid- to large-scale advertisers.'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design'} 
          period={'2022.01. - 2022.08.'}/>
      </div>
      <MainImage image={work1MainImage}/>
      <div style={{backgroundColor: "#000", display: "flex", flexDirection:'column' }}>
        < WorkTextSection 
          title='Overview'
          description='As the karrot advertisement platform grews continuously, various advertisers began to use it. As a result, the need to develop the platform suited to a variety of advertisers.'
          isWhiteText={true} />
        <div style={{ margin:"auto", maxWidth:"1600px", alignContent: "center", padding: "100px 48px", display: "flex", flexDirection: "column", gap:"150px" }}>   
            <div style={{ display: "flex", flexDirection: "row", gap:"40px"}}>
                <div style={{ display: "flex", flexDirection: "column", gap:"18px" }}>
                    <div className='nurmericIndex'>1</div>
                    <div style={{
                        color: "#F4F5F8",
                        fontSize: "18px",
                        lineHeight: "140%"
                        }}>We have continuously developed the platform to reflect the diverse needs of users, which has increased the difficulty and complexity of the platform for SMB to use.
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap:"18px" }}>
                    <div className='nurmericIndex'>2</div>
                    <div style={{
                        color: "#F4F5F8",
                        fontSize: "18px",
                        lineHeight: "140%"
                        }}>There is a need to launch an advanced advertising platform that meets the needs of professional advertisers who advertise over 1 million won per a month.
                    </div>
                </div>
            </div>     
            <WorkImage image={work1chart1} isMaxheight={true} isbottomPadding={false}/>
          </div>
        </div>
        < WorkTextSection title={'Goal'} description={'As our product grew, various advertisers began to use it. As a result, the need to develop a platform suited to a variety of advertisers.'} />
        <WorkFullImage image={goal} isBottomMargin={true}/>
        
                        
        < WorkTextSection title={'User Needs'} description={'In order to create an MVP that reflects the needs of advertisers, we find out the needs of target users throungh In-depth interviews.'} />
       <WorkFullImage image={needs} isMargin={true} isBottomMargin={true} isRoundedCorner={true} isShadow={true} isBorder={true}/>
       
       <WorkTextSection title='Design Direction' description='Marketer-friendly UX with detailed performance analysis features for advertising professionals'/>
       <div className={'margin48'} style={{ display: "flex", flexDirection: "row", gap:"24px"}}>
       <WorkFullImage image={direction1} isRoundedCorner={true} isShadow={true} isBorder={true}/>
       <WorkFullImage image={direction2} isRoundedCorner={true} isShadow={true} isBorder={true}/>
       </div>
       
      <WorkTextSection 
        title='Information Architecture'
        description='We designed a Information Architecture that users can understand and use key features easily.'
        />
       
      <Divider/>
      <WorkFullImage isMargin={false} image={liteIA}/> 
      <Divider/>
      <WorkFullImage isMargin={false} image={ExpertIA}/>              
      <Divider/>
      <div style={{backgroundColor:'#F4F5F8', paddingBottom:'60px'}}>
        <WorkTextSection 
            title='Wireframe'
            description='Based on the information Architecture, We carefully planned the actual usage environment such as a creating and managing ads.'
            />
          <WorkFullImage isMargin={true} image={wireframe} isRoundedCorner={true} isBottomMargin={true}/>
      </div>
      <WorkTextSection title='Key features'/>
      <div className={'margin48'} style={{ display: "flex", flexDirection: "column", gap:"12px"}}>
        <div style={{ display: "flex", flexDirection: "row", gap:"12px"}}>
          <WorkFullImage image={feature1} isRoundedCorner={true} isShadow={true} isBorder={true}/>     
          <WorkFullImage image={feature2} isRoundedCorner={true} isShadow={true} isBorder={true}/>   
          <WorkFullImage image={feature3} isRoundedCorner={true} isShadow={true} isBorder={true}/>       
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap:"12px"}}>
          <WorkFullImage image={feature4} isRoundedCorner={true} isShadow={true} isBorder={true}/>     
          <WorkFullImage image={feature5} isRoundedCorner={true} isShadow={true} isBorder={true}/>   
          <WorkFullImage image={feature6} />                              
        </div>
      </div>
      
      <Waiting/>
      <BackButton/>
      <NextItem to='/Work4' thumbnail={thumbnail4} nextProjectTitle='Leading More Business Users to Advertising'/>
      </>
    )
}

export default Work1;
