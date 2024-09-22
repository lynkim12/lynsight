import Navigator from '../components/Navigation';
import Content from '../components/workContent';
import ChipFilter from '../components/ChipFilter';
import thumbnail1 from '../image/thumbnails/thumbnail1.png';
import thumbnail2 from '../image/thumbnails/thumbnail2.png';
import thumbnail3 from '../image/thumbnails/thumbnail3.png';
import thumbnail4 from '../image/thumbnails/thumbnail4.png';
import thumbnail5 from '../image/thumbnails/thumbnail5.png';
import thumbnail6 from '../image/thumbnails/thumbnail6.png';
import thumbnail7 from '../image/thumbnails/thumbnail7.png';
import thumbnail8 from '../image/thumbnails/thumbnail8.png';
import thumbnail9 from '../image/thumbnails/thumbnail9.png';
import wavedivider from './image/wavedivider.png'
import "animate.css/animate.min.css";
import { Dispatch, SetStateAction } from 'react';
import { Footer } from '../components/Footer';

//2024 

function Filter2024(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <div>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
      <div className='pageTitle'>Works</div>  
        <ChipFilter activeFilter={4} setActiveFilter={function (value: SetStateAction<number>): void {
        } }/>
      <div className='workContentslist'>
        <div className='contents zoomIn' >
            <Content badge={"Updated"} projectPage={"/Work9"} thumbnail={thumbnail9} projectTitle={'New Video Ads'} projectDescription={'Introducing new vertical video ads in the home feed.'} projectSubtitle={'Karrot'} period={'2024.01. - 2024.06.'}/>
            <Content badge={"Updated"} projectPage={"/Work8"} thumbnail={thumbnail8} projectTitle={'A Bidding System in Search Ads'} projectDescription={'Designing a search advertising bidding system that anyone can easily use on mobile'} projectSubtitle={'Karrot'} period={'2024.04 - 2024.06'}/>
            <Content badge={"Updated"} projectPage={"/Work7"} thumbnail={thumbnail7} projectTitle={'New Catalog Manager for Ads'} projectDescription={'Creating a catalog manager service that can handle over one million products.'} projectSubtitle={'Karrot'} period={'2024.01 - 2024.06'}/>
        </div>
      </div>
      <Footer/>
    </div>
    )
}


export default Filter2024;
