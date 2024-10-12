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
            title={'The design of a top search ad'} 
            description={<div>The UX direction and specific design of Karrot's top search result ads.</div>} 
            team={'Karrot'} 
            role={'UX Strategic Planning, UXUI Design'} 
            period={'2024.06. - 2024.10.'}/>
        </div>
        <MainImage image={mainImage}/>
        <WorkTextSection title = ' '/>    
        <BackButton/>
        </>
      )
  }
  
  export default Work12;