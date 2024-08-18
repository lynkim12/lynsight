import Navigator from './Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/outlinkMainImage.png';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { MainImage } from './workDetailPage/WorkMainImage';
import expert from './image/works/work6_img_expert.png';
import { WorkImage } from './workDetailPage/WorkImage';
import chart1 from './image/works/work6chart1.png';
import goalimage from './image/works/work6Goal.png';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
import survey from './image/works/work6survey.png';
import ecosystem  from './image/works/work6ecosystem.png';
import direction  from './image/works/work6direction.png';
import BackButton from './components/BackButton';
import userflow from './image/works/work6userflow.png';
import research1 from './image/works/work6research1.png';
import research2 from './image/works/work6research2.png';
import research3 from './image/works/work6research3.png';

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
        <WorkImage image={expert} description={'Creating “Outlink Ads” on an Expert Mode'} isMaxheight={false} isbottomPadding={false} />
        <WorkTextSection 
          description={<div>
              In the expert mode platform for professional advertisers, the "Outlink Ads" product is exclusively offered. We observed that many small advertisers are migrating to the expert mode to use "Outlink Ads." Recognizing the strong demand for a simple and easy-to-use outlink ad product on mobile, we decided to add the outlink ad product to the easy mode for advertising.
          </div>}/>
        <WorkImage image={chart1} isMaxheight={true} isbottomPadding={true} />
        <WorkFullImage image={survey} isRoundedCorner={false} isBackgroundColor={false} isMargin={true} isBottomMargin={true} />
        
        <WorkTextSection 
          title={'User Research'} 
          description={<div>
              On Karrot, there are small advertisers who spend less than 1 million KRW per month on ads and professional advertisers who spend more than 1 million KRW. <br/> The expert mode has a campaign &gt; ad group &gt; ad structure, which is challenging for small business owners who are not familiar with advertising to understand and use effectively. 
            </div>} 
        />
        <div className='image-center' style={{display:'flex', flexDirection:'row', gap:'24px', margin:'auto', maxWidth:'1400px'}}>
        <WorkFullImage image={research1} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Example of a Post'/>   
        <WorkFullImage image={research2} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Share by Outlink Type'/>   
        <WorkFullImage image={research3} isMargin={false} isBackgroundColor={true} isRoundedCorner={true} isBottomMargin={true} description='Outlink by Usecase'/>   
        </div>

        <WorkTextSection 
          title={'Goal'} 
          description={<div>
              Karrot's vision is to connect local residents with neighborhood businesses, allowing users to obtain useful local shop information and establish relationships as regular customers.
              We had the mission of launching Outlink-ads for small businesses while ensuring that the number of business owners using Karrot's "Biz Profile" does not decrease.
              <br/>Accordingly, Outlink-ads were targeted primarily at <b>business owners who provide services nationwide</b>, rather than local businesses.
              </div>}/>
        <WorkImage image={goalimage} isMaxheight={false} isbottomPadding={true}/>
        <div style={{backgroundColor:'#000'}}>
        <WorkTextSection 
              title={<div>Karrot's Ads Ecosystem</div>} isWhiteText={true} />
          <WorkImage image={ecosystem} isMaxheight={false} isbottomPadding={true}/>
        </div>
        <WorkTextSection 
          title={'Design Direction'} 
          description={<div>
              Unlike outlink ads provided to professional advertisers, the UX direction for outlink ads aimed at small advertisers has been set to ensure that anyone can use them easily.</div>}/>
        <WorkFullImage image={direction} isRoundedCorner={false} isBackgroundColor={false} isBottomMargin={true} isMargin={true}/>
      <WorkTextSection title='UXUI Design'/>
      <WorkFullImage image={userflow}/>
      
      </AnimationOnScroll>
      <Waiting/>
      <BackButton/>
      </>
    )
}

export default Work6;
