import { Dispatch, SetStateAction } from "react";
import { WorkTitle } from "./workDetailPage/WorkTitle";
import NextItem from "./components/NextItem";
import BackButton from "./components/BackButton";
import { WorkTextSection } from "./workDetailPage/WorkTextSection";
import { MainImage } from "./workDetailPage/WorkMainImage";
import Navigator from './components/Navigation';

import mainImage from './image/works/work11MainImage.png';

//search ads

function Work12(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      return (
        <>
        <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
        <div className='fadeIn '>
          <WorkTitle 
            title={'Improving UI/UX of Top Search Ad Placement'} 
            description={<div>Improving the design of top-position search ads to increase user engagement and click-through rate</div>} 
            team={'Karrot'} 
            role={'UXUI Design, Managing the Experiment'} 
            period={'2024.10. - 2025.03.'}/>
        </div>
        <MainImage image={mainImage}/>
        <WorkTextSection title = ' '/>    
        <BackButton/>
        </>
      )
  }
  
  export default Work12;