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
            period={'2019.01. - 2019.06.'}
            showButton={true}
            buttonLabel="View Project"
            buttonHref="https://www.figma.com/proto/iQ9Tgs7kQgjO6waM0oealt/Portfolio_lynkim?page-id=559%3A204&node-id=559-205&p=f&viewport=383%2C1421%2C0.31&t=4huYVHl4a2DTxKcO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=559%3A205"/>
        </div>
        <MainImage image={mainImage}/>
        <WorkTextSection title = ' '/>    
        <BackButton/>
        </>
      )
  }
  
  export default Work11;