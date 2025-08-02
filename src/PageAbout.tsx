import Navigator from './components/Navigation';
import { AboutList } from './components/AboutList';
import { Divider, Hidden } from '@mui/material';
import './style.css';
import './font.css';
import { Footer } from './components/Footer';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Dispatch, SetStateAction } from 'react';
import wavedivider from './image/wavedivider.png'
import circle from './image/circle.png';
import image1 from './image/@.png';
import image2 from './image/*.png';
import image3 from './image/shooting.png';
import './animation.css';
import { Wavedivider } from './components/Wavedivider';
import Typewriter from './components/Typewriter';

function About(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <div>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
        <div>
          <div className='aboutIntroSection fadeIn' 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flexFlow: "column"
                  }}>
            <div className='aboutIntro'>Product Designer <br/> Lyn Kim</div>
            <img src={circle} className='circle'/>
            <div style={{ position: "absolute", top:"120px", margin : "48px"}}>
              <img src={image1} className='moveCircle1'/>
              <img src={image2} className='tilt' />
              <img src={image2} className='twinkle'/>
              <img src={image3} className='shooting'/>
            </div>
            <div className='aboutIntroDescription'>
              <Typewriter 
                text={<div>
                  Recently, I wrapped up 3 years and 7 months of designing ad products at Karrot(Daangn) 
                  <br/> and transitioned to the Local Business team, where I’m now designing <b className='textGradient'> Karrot QR Order.</b> 
                  <br/> I enjoy survival reality shows 📺 and board games♟️, 
                  <br/> and I love planning fun experience-based programs 🤹🏻‍♀️. 
                  <br/> I’m still part of the ADBLOCK band 🎹, 
                  <br/> and these days, I’ve been getting into billiards 🎱 and frisbee 🪃. 
                  </div>}
                speed={25} />
              </div>
          </div>
        </div>
        <Wavedivider/>
      
      <div className='aboutContents'>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10} style={{gap: "28px", flexDirection: "column", display: "flex"}}>
          <div className='aboutTitle'>Experience</div>
          <div className='aboutDescription'>
            I have skills about UX/UI Design, Growth hacking, Product/Project Managing through various responsibilities and roles.
          </div>
        </AnimationOnScroll>
          
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = {<a target='_blank' href='https://business.daangn.com/'>Karrot</a>}
                experience = {<div>As a product designer in the advertisement team, I have responsibility of the UX design for lots of small-sized business owner to do marketing their business more easily. Also I designed and launched a new advertisements platform for mid- to large-scale Advertisers.</div>}
                perieod ={<div style={{display: 'flex', flexDirection:'row', textAlign:'right', right:'0'}}>
                  2021.10. - 
                    <div style={{textAlign:'right'}} className='textGradient'> &nbsp;Present</div>
                  </div>}
                location='Seoul, Republic of Korea'
              />
              <Divider className = 'divider1'/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = {<a target='_blank' href='https://bookcovery.com'>Bookcovery</a>}
                experience = 'As a founder, I planned the book-browsing service and managed project to release the service to the PC & mobile web environment. also I designed UXUI of the service so that it can be used on PC and mobile. I implemented marketing strategy so that it collected 20,000 active users per a month.'
                perieod ='2020.12 - 2021.08'
                location='Seoul, Republic of Korea'
              />
              <Divider className = 'divider1'/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = 'Styleshare'
                experience = 'As a product manager of growth team, I managed growth team to improve the activity and retention of the product. I improved the open rate of push messages and the retention of users by more than doubling the number of users who have agreed to receive marketing information.'
                perieod ='2020.06 - 2020.12'
                location='Seoul, Republic of Korea'
              />
              <Divider className = 'divider1'/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = 'Minding'
                experience = 'I joined the team as a UX/UI designer. We planned and launched a mind health care service named Minding.'
                perieod ='2018.07 - 2020.01'
                location='Seoul, Republic of Korea'
              />
              <Divider className = 'divider1'/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = 'Seoul Nat’l Univ. & Samsung AI-UX Study Project'
                experience = 'In cooperation with Samsung, we conducted a UX improvement project for Delight Shop using IoT. Based on user journey analysis and user interviews, we have developed an artificial intelligence guide system that allows to enjoy the store experience.'
                perieod ='2018.04 - 2018.06'
                location='Seoul, Republic of Korea'
              />
              <Divider className = 'divider1'/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
            <AboutList 
              companyTitle = 'Salone del Mobile Milano Exhibition'
              experience = 'The exhibition was held under the theme of “Seoul”. The lighting that expresses the light of Seoul is made of resin and the traditional Korean cloth, kagi cloth.'
              perieod ='2018.04'
              location='Milan, Italy'
            />
            </AnimationOnScroll>
          </div>
        </div>
        <Footer/>
        </div>
      </>
    )
}

export default About;