import Navigator from '../components/Navigation';
import Content from '../components/workContent';
import ChipFilter from '../components/ChipFilter';
import thumbnail1 from '../image/workThumbnails/thumbnail1.png';
import thumbnail2 from '../image/workThumbnails/thumbnail2.png';
import thumbnail3 from '../image/workThumbnails/thumbnail3.png';
import thumbnail4 from '../image/workThumbnails/thumbnail4.png';
import thumbnail5 from '../image/workThumbnails/thumbnail5.png';
import thumbnail6 from '../image/workThumbnails/thumbnail6.png';
import thumbnail7 from '../image/workThumbnails/thumbnail7.png';
import thumbnail8 from '../image/workThumbnails/thumbnail8.png';
import thumbnail9 from '../image/workThumbnails/thumbnail9.png';
import thumbnail11 from '../image/workThumbnails/thumbnail11.png';
import wavedivider from '../image/wavedivider.png'
import "animate.css/animate.min.css";
import { Dispatch, SetStateAction } from 'react';
import { Footer } from '../components/Footer';

//2021 

function Filter2021(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <div>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
      <div className='pageTitle'>Works</div>  
      <ChipFilter activeFilter={6} setActiveFilter={function (value: SetStateAction<number>): void {
        } }/>
      <div className='workContentslist'>
         <div className='contents zoomIn'>
            <Content projectPage={"/Work2"} thumbnail={thumbnail2} projectTitle={'First User Process Design'} projectDescription={'Onboarding process design on bookcovery to make activation.'} projectSubtitle={'Bookcovery'} period={'2020.05 - 2020.11'}/>
            <Content projectPage={"/Work5"} thumbnail={thumbnail5} projectTitle={'New Service Design'} projectDescription={'Designing an entirely new book-share platform for working people who want to develop compentency.'} projectSubtitle={'Bookcovery'} period={'2020.01. - 2020.08.'}/>
            <Content projectPage={"/Work3"} thumbnail={thumbnail3} projectTitle={'Store UX/UI Design'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Styleshare'} period={'2020.10 - 2020.12'}/>
          {/* <div style={{flex:'1'}}/> */}
         </div>
         <div className='contents zoomIn'>
            <Content projectPage={"/Work11"} thumbnail={thumbnail11} projectTitle={'Improvement the mission contents UX'} projectDescription={'Improving content UX to increase mission completion rate.'} projectSubtitle={'Minding'} period={'2019.01. - 2019.06.'}/>
            <div style={{flex:'1'}}/>
            <div style={{flex:'1'}}/>
          </div>
      </div>
      <Footer/>
    </div>
    )
}


export default Filter2021;
