import Navigator from './Navigation';
import './style.css';
import './font.css';
import { Waiting } from './Waiting';
import {WorkTitle} from './WorkTitle';
import work1image1 from './image/work1image1.jpg';
import { WorkTextSection } from './WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/work1chart1.png';
import { Dispatch, SetStateAction } from 'react';
import wavedivider from './image/wavedivider.png'

function Work1(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn'>
        <WorkTitle 
          title={'New Ads Platform for Expert '} 
          description={'Designing an entirely new advertising platform for Mid- to Large-scale Advertisers'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design - Contribution 80%'} 
          period={'2022.01. - 2022.08.'}/>
      </div>
      <img style = {{ width:"100%", aspectRatio: "auto" }} src={work1image1}/>
      < WorkTextSection 
        title={'Overview'} 
        description={'As our product grew, various advertisers began to use it. As a result, the need to develop a platform suited to a variety of advertisers.'} />
      <div style={{backgroundColor: "#000", display: "flex" }}>
        <div style={{ backgroundColor: "#000", margin:"auto", maxWidth:"1400px", alignContent: "center", padding: "100px 48px", display: "flex", flexDirection: "column", gap:"150px" }}>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>    
            <div style={{ display: "flex", flexDirection: "row", gap:"40px"}}>
                <div style={{ display: "flex", flexDirection: "column", gap:"18px" }}>
                    <div className='nurmericIndex'>1</div>
                    <div style={{
                        color: "#F4F5F8",
                        fontFamily: "Pretendard",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "139%",
                        }}>We have continuously developed the platform to reflect the diverse needs of users, which has increased the difficulty and complexity of the platform for SMB to use.
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap:"18px" }}>
                    <div className='nurmericIndex'>2</div>
                    <div style={{
                        color: "#F4F5F8",
                        fontFamily: "Pretendard",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "139%",
                        }}>There is a need to launch an advanced advertising platform that meets the needs of professional advertisers who advertise over 1 million won per a month.
                    </div>
                </div>
            </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} offset={10}>
            <div style={{textAlign:"center", alignItems:"center", display:'flex', justifyContent:"center"}}>
                <img src={work1chart1}/>
            </div>
            </AnimationOnScroll>
        </div>
        </div>
        <AnimationOnScroll animateIn="animate__fadeInUp"  animateOnce={true} offset={10}>
        < WorkTextSection title={'Goal'} description={'As our product grew, various advertisers began to use it. As a result, the need to develop a platform suited to a variety of advertisers.'} />
        </AnimationOnScroll>
          <AnimationOnScroll animateIn="zoomIn" offset={200}>
            <div style={{fontFamily: "Handlee", fontSize: "52px", color: "#131517", display:"flex", margin:"auto", padding: "0px 48px", maxWidth:"1400px", justifyContent:"center", textAlign:"center", alignContent:"center"}}>
              Powerful MVP with essential features for expert
            </div>
          </AnimationOnScroll> 

          <div  style={{maxWidth: "1400px", display: 'flex', overflow: "hidden", height: "9px",  justifyContent : "center",  margin:"auto",padding: " 0px 48px"}}><img src={wavedivider} className={"wave"} style={{height: "9px", display : "flex", alignSelf: "stretch", textAlign:"center"}}/></div>
      <Waiting/>
      </>
    )
}

export default Work1;
