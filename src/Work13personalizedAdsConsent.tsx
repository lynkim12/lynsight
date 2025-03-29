import { Dispatch, SetStateAction } from "react";
import { WorkTitle } from "./workDetailPage/WorkTitle";
import NextItem from "./components/NextItem";
import BackButton from "./components/BackButton";
import { WorkTextSection } from "./workDetailPage/WorkTextSection";
import { MainImage } from "./workDetailPage/WorkMainImage";
import Navigator from './components/Navigation';
import { Waiting } from "./components/Waiting";
// import mainImage from './image/works/work13main';

//Personalized Ads consent


function Work13(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      return (
        <>
        <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
        <div className='fadeIn '>
          <WorkTitle 
            title={'Obtaining Consent for Personalized Advertising'} 
            description={<div>Obtain personalized advertising consent from new users to serve tailored ads.</div>} 
            team={'Karrot'} 
            role={'UX Strategic Planning, Research, UXUI Design'} 
            period={'2024.10. - 2024.12.'}/>
        </div>    
        <video style = {{ width:"100%", aspectRatio: "auto",  maxHeight:'1200px'}}  loop autoPlay muted>
            <source src="/work13MainImage.mov" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <WorkTextSection title = 'background' 
            description='Karrot has not request users consent for receiving personalized ads until now. However, to comply with regulations, we plan to request consent for personalized ads from new users upon signup.
                If a user declines consent for personalized ads, we will be unable to serve tailored advertisements, which could significantly decrease CTR and lead to a revenue drop of over 30%.
                To mitigate the impact, it is crucial to maximize the opt-in rate for personalized ads. Therefore, we aim to develop effective way to get users consent who initially opted out during signup.'/>    
        <WorkTextSection title = 'Goal' 
            description='Our goal is to get personalized advertising consent from users who newly sign up for the service. By obtaining personalized advertising consent from users, we can display tailored ads, which are likely to result in higher click-through rates compared to randomly served ads, helping to prevent a decline in revenue.'/>    
          <Waiting/>
        <BackButton/>
        </>
      )
  }
  
  export default Work13;
