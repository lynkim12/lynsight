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
import thumbnail10 from '../image/workThumbnails/thumbnail10.png';
import wavedivider from '../image/wavedivider.png'
import "animate.css/animate.min.css";
import { Dispatch, SetStateAction } from 'react';
import { Footer } from '../components/Footer';

//2023 - 2022 

function Filter2023(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <div>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
      <div className='pageTitle'>Works</div>  
      <ChipFilter activeFilter={5} setActiveFilter={function (value: SetStateAction<number>): void {
        } }/>
      <div className='workContentslist'>
        <div className='contents zoomIn' >
            <Content projectPage={"/Work6"} thumbnail={thumbnail6} projectTitle={'New Outlink-Type Ads'} projectDescription={'Introducing a new outlink-type advertisement for small businesses.'} projectSubtitle={'Karrot'} period={'2023.04 - 2023.07'}/>
            <Content projectPage={"/Work10"} thumbnail={thumbnail10} projectTitle={'Eliminating Concerns of Creating Ads'} projectDescription={'Encouraging ad creation to increase the activation rate.'} projectSubtitle={'Karrot'} period={'2023.01 - 2023.03'}/>
            <Content projectPage={"/Work1"} thumbnail={thumbnail1} projectTitle={'New Ads Platform for Experts'} projectDescription={'An entirely new advertising platform for mid- to large-scale advertisers.'} projectSubtitle={'Karrot'} period={'2022.01. - 2022.08.'}/>
        </div>
        <div className='contents zoomIn'>
            <Content projectPage={"/Work4"} thumbnail={thumbnail4} projectTitle={'Leading More Business Users to Advertising'} projectDescription={'An experiment of UX to induce users to start advertising.'} projectSubtitle={'Karrot'} period={'2022.10 - 2022.12'}/>
            <div style={{flex:'1'}}/>
            <div style={{flex:'1'}}/>
         </div>
      </div>
      <Footer/>
    </div>
    )
}


export default Filter2023;
