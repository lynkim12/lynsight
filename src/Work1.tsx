import Navigator from './Navigation';
import './style.css'
import { Waiting } from './Waiting';
import {WorkTitle} from './WorkTitle';
import work1image1 from './image/work1image1.jpg';
import { WorkTextSection } from './WorkTextSection';

function Work1() {
    return (
      <>
      <Navigator/>
      <div className='fadeIn'>
        <WorkTitle 
          title={'New Ads Platform for Expert '} 
          description={'Designing an entirely new advertising platform for Mid- to Large-scale Advertisers'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design - Contribution 80%'} 
          period={'2022.01. - 2022.08.'}/>
      </div>
      <img style = {{ width:"100%", aspectRatio: "auto" }} src={work1image1}/>
      < WorkTextSection 
        title={'Overview'} 
        description={'As our product grew, various advertisers began to use it. As a result, the need to develop a platform suited to a variety of advertisers.'} />
      <Waiting/>
      </>
    )
}

export default Work1;
