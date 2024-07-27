import Navigator from '../Navigation';
import Content from '../workContent';
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
import { Footer } from '../Footer';

function Works4(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <div>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
      <div className='pageTitle'>Works</div>  
      <ChipFilter activeFilter={4} setActiveFilter={function (value: SetStateAction<number>): void {
          throw new Error('Function not implemented.');
        } }/>
      <div className='workContentslist'>
        <div className='contents zoomIn' >
            <Content badge={"Updated"} projectPage={"Work9"} thumbnail={thumbnail9} projectTitle={'New Video Ads'} projectDescription={'Introducing new vertical video ads in the home feed.'} projectSubtitle={'Karrot'} period={'2024.01. - 2024.06.'}/>
        </div>
        <div className='contents zoomIn' >
            <Content badge={"Updated"} projectPage={"Work8"} thumbnail={thumbnail8} projectTitle={'A Bidding System in Search Ads'} projectDescription={'Designing a search advertising bidding system that anyone can easily use on mobile'} projectSubtitle={'Karrot'} period={'2024.04 - 2024.06'}/>
            <Content badge={"Updated"} projectPage={"Work7"} thumbnail={thumbnail7} projectTitle={'New Catalog Manager for Ads'} projectDescription={'Creating a catalog manager service that can handle over one million products.'} projectSubtitle={'Karrot'} period={'2024.01 - 2024.06'}/>
            <Content projectPage={"Work6"} thumbnail={thumbnail6} projectTitle={'New Outlink-Type Ads'} projectDescription={'Introducing a new outlink-type advertisement for small businesses.'} projectSubtitle={'Karrot'} period={'2023.04 - 2023.07'}/>
        </div>
        <div className='contents zoomIn'>
            <Content projectPage={"Work10"} thumbnail={thumbnail6} projectTitle={'Eliminating Concerns of Creating Ads'} projectDescription={'Encouraging ad creation to increase the activation rate.'} projectSubtitle={'Karrot'} period={'2023.01 - 2023.03'}/>
            <Content projectPage={"Work1"} thumbnail={thumbnail1} projectTitle={'New Ads Platform for Experts'} projectDescription={'An entirely new advertising platform for mid- to large-scale advertisers.'} projectSubtitle={'Karrot'} period={'2022.01. - 2022.08.'}/>
            <Content projectPage={"Work4"} thumbnail={thumbnail4} projectTitle={'Leading More Business Users to Advertising'} projectDescription={'An experiment of UX to induce users to start advertising.'} projectSubtitle={'Karrot'} period={'2022.10 - 2022.12'}/>
         </div>
         <div className='contents zoomIn'>
            <Content projectPage={"Work2"} thumbnail={thumbnail2} projectTitle={'First User Process Design'} projectDescription={'Onboarding process design on bookcovery to make activation.'} projectSubtitle={'Bookcovery'} period={'2020.05 - 2020.11'}/>
            <Content projectPage={"Work5"} thumbnail={thumbnail5} projectTitle={'New Service Design'} projectDescription={'Designing an entirely new book-share platform for working people who want to develop compentency.'} projectSubtitle={'Karrot'} period={'2020.01. - 2020.08.'}/>
            <Content projectPage={"Work3"} thumbnail={thumbnail3} projectTitle={'Store UX/UI Design'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Styleshare'} period={'2020.10 - 2020.12'}/>
          {/* <div style={{flex:'1'}}/> */}
         </div>
      </div>
      <Footer/>
    </div>
    )
}


export default Works4;
