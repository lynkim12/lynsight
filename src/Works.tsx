import React from 'react';
import Navigator from './Navigation';
import Content from './workContent';
import thumbnail1 from './image/thumbnail1.png';
import thumbnail2 from './image/thumbnail2.png';
import thumbnail3 from './image/thumbnail3.png';

function Works() {
    return (
      <div >
      <Navigator/>
      <div className='workContentslist'>
        <div className='contents'>
            <Content projectPage={"Work1"} thumbnail={thumbnail1} projectTitle={'New Ads Platform for Expert'} projectDescription={'Designing an entirely new advertising platform for Mid- to Large-scale Advertisers'} projectSubtitle={'Karrot'} period={'2022.01. - 2022.08.'}/>
            <Content projectPage={"Work1"} thumbnail={thumbnail2} projectTitle={'First User Process Design'} projectDescription={'Onboarding process design on bookcovery to make activation.'} projectSubtitle={'Bookcovery'} period={'2020.05 - 2020.11'}/>
            <Content projectPage={"Work1"} thumbnail={thumbnail3} projectTitle={'Store UX/UI Design'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Styleshare'} period={'2020.10 - 2020.12'}/>
        </div>
        <div className='contents'>
           <Content projectPage={"Work1"} thumbnail={thumbnail1} projectTitle={'New Ads Platform for Expert'} projectDescription={'Designing an entirely new advertising platform for Mid- to Large-scale Advertisers'} projectSubtitle={'Karrot'} period={'2022.01. - 2022.08.'}/>
            <Content projectPage={"Work1"} thumbnail={thumbnail2} projectTitle={'First User Process Design'} projectDescription={'Onboarding process design on bookcovery to make activation.'} projectSubtitle={'Bookcovery'} period={'2020.05 - 2020.11'}/>
            <Content projectPage={"Work1"} thumbnail={thumbnail3} projectTitle={'Store UX/UI Design'} projectDescription={'Mobile store tap UX/UI design on Styleshare to maximize store tap using rates and purchase amout.'} projectSubtitle={'Styleshare'} period={'2020.10 - 2020.12'}/>
         </div>
      </div>
      </div>
    )
}

export default Works;
