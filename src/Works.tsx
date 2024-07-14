import Navigator from './Navigation';
import Content from './workContent';
import thumbnail1 from './image/thumbnail1.png';
import thumbnail2 from './image/thumbnail2.png';
import thumbnail3 from './image/thumbnail3.png';
import thumbnail4 from './image/thumbnail4.png';
import thumbnail5 from './image/thumbnail5.png';
import "animate.css/animate.min.css";
import { Dispatch, SetStateAction } from 'react';
import { Footer } from './Footer';

function Works(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <div>
      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
      <div className='workContentslist'>
        <div className='contents zoomIn' >
            <Content projectPage={"WorkPage"} thumbnail={thumbnail1} projectTitle={'New Video Ads'} projectDescription={'Designing an entirely new advertising platform for Mid- to Large-scale Advertisers.'} projectSubtitle={'Karrot'} period={'2024.01. - 2024.06.'}/>
            <Content projectPage={"WorkPage"} thumbnail={thumbnail4} projectTitle={'A Bidding System for Search Ads'} projectDescription={'Creating the easiest bidding system for small business owners to use.'} projectSubtitle={'Karrot'} period={'2024.04 - 2024.06'}/>
            <Content projectPage={"WorkPage"} thumbnail={thumbnail3} projectTitle={'New Catalog Managing Service for Ads'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Karrot'} period={'2024.01 - 2024.06'}/>
        </div>
        <div className='contents zoomIn' >
            <Content projectPage={"Work1"} thumbnail={thumbnail1} projectTitle={'New Ads Platform for Experts'} projectDescription={'Designing an entirely new advertising platform for Mid- to Large-scale Advertisers.'} projectSubtitle={'Karrot'} period={'2022.01. - 2022.08.'}/>
            <Content projectPage={"WorkPage"} thumbnail={thumbnail4} projectTitle={'Leading More Business Users to Advertising'} projectDescription={'An experiment of UX to induce users to start advertising.'} projectSubtitle={'Karrot'} period={'2022.10 - 2022.12'}/>
            <Content projectPage={"WorkPage"} thumbnail={thumbnail3} projectTitle={'Store UX/UI Design'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Styleshare'} period={'2020.10 - 2020.12'}/>
        </div>
        <div className='contents zoomIn'>
           <Content projectPage={"WorkPage"} thumbnail={thumbnail5} projectTitle={'New Service Design'} projectDescription={'Designing an entirely new book-share platform for working people who want to develop compentency.'} projectSubtitle={'Karrot'} period={'2022.01. - 2022.08.'}/>
            <Content projectPage={"WorkPage"} thumbnail={thumbnail2} projectTitle={'First User Process Design'} projectDescription={'Onboarding process design on bookcovery to make activation.'} projectSubtitle={'Bookcovery'} period={'2020.05 - 2020.11'}/>
            <Content projectPage={"WorkPage"} thumbnail={thumbnail3} projectTitle={'Store UX/UI Design'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Styleshare'} period={'2020.10 - 2020.12'}/>
         </div>
      </div>
      <Footer/>
    </div>
    )
}


export default Works;
