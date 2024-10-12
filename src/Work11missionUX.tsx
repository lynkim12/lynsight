import { Dispatch, SetStateAction } from "react";
import { WorkTitle } from "./workDetailPage/WorkTitle";
import NextItem from "./components/NextItem";
import BackButton from "./components/BackButton";
import { WorkTextSection } from "./workDetailPage/WorkTextSection";
import { MainImage } from "./workDetailPage/WorkMainImage";
import Navigator from './components/Navigation';

import mainImage from './image/works/work11MainImage.png';

//missionUX

function Work11(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      return (
        <>
        <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
        <div className='fadeIn '>
          <WorkTitle 
            title={'Improvement the mission contents UX'} 
            description={'Improving content UX to increase mission completion rate.'} 
            team={'Minding'} 
            role={'Service Planning, UXUI Design'} 
            period={'2019.01. - 2019.06.'}/>
        </div>
        <MainImage image={mainImage}/>
        <WorkTextSection title = ' '/>    
        <BackButton/>
        </>
      )
  }
  
  export default Work11;