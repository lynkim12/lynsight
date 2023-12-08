import Navigator from './Navigation';
import { AboutList } from './AboutList';
import { Divider, Hidden } from '@mui/material';
import './style.css';
import './font.css';
import { Footer } from './Footer';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Dispatch, SetStateAction } from 'react';
import wavedivider from './image/wavedivider.png'
import circle from './image/circle.png';
import image1 from './image/@.png';
import image2 from './image/*.png';
import image3 from './image/shooting.png';
import './animation.css';

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
                  flexFlow: "column"}}>
            <div className='aboutIntro'>Prod uct Designer <br/> Lyn Kim</div>
            <img src={circle} style={{position: "absolute", top:"140px",  maxWidth: "913px", margin : "48px",  justifyContent : "center", }}/>
            <div style={{ position: "absolute", top:"120px", margin : "48px",  }}>
              <img src={image1} className='moveCircle1' style={{ width:"30px", left:"-410px", top: "44px", position: "absolute", justifyContent : "center",}}/>
              <img src={image2} className='tilt' style={{ width:"24px", left:"-236px", top: "24px", position: "absolute", justifyContent : "center",}}/>
              <img src={image2} className='twinkle' style={{ width:"30px", left:"236px", top: "220px", position: "absolute", justifyContent : "center",}}/>
              <img src={image3} className='shooting' style={{ width:"34px", left:"426px", top: "0px", position: "absolute", justifyContent : "center",}}/>
            </div>
            <div className='aboutIntroDescription'>
              Currently, I joined Karrot(Daangn) as a product designer contributing to the development of an advertising platform for small-sized business. I am responsible for advertiser's experience of creating ads and analyzing performance. We also have a goal to help for small-sized businesses to achieve the success through Karrot advertising.
            </div>
            
          {/* <img src={ waiting } className={"flow"} style={{width: "480px", aspectRatio: "auto",  marginTop:"40px"}}/> */}
        </div>
        <div className='dividerWave'></div>
          <div  style={{maxWidth: "1400px", display: 'flex', overflow: "hidden", height: "9px",  justifyContent : "center",  margin:"auto",padding: " 0px 48px"}}><img src={wavedivider} className={"wave"} style={{height: "9px", display : "flex", alignSelf: "stretch", textAlign:"center"}}/></div>
        </div>
      <div className='aboutContents'>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10} style={{gap: "28px", flexDirection: "column", display: "flex"}}>
          <div className='aboutTitle'>Experience</div>
          <div className='aboutDescription' style={{marginBottom : "100px"}}>
            I have skills about UX/UI Design, Growth hacking, Product/Project Managing through various responsibilities and roles.
          </div>
        </AnimationOnScroll>
          <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = 'Karrot'
                experience = 'As a product designer in the advertisement team, I have responsibility of the UX design for lots of small-sized business owner to do marketing their business more easily. Also I designed and launched a new advertisements platform for mid- to large-scale Advertisers. '
                perieod ='2021.10. - Present'
                location='Seoul, Republic of Korea'
              />
              <Divider className = 'divider1'/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
              <AboutList 
                companyTitle = 'Bookcovery'
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