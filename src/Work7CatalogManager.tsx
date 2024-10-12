import Navigator from './components/Navigation';
import './style.css';
import './workDetailPage/style_works.css';
import './font.css';
import { Waiting } from './components/Waiting';
import {WorkTitle} from './workDetailPage/WorkTitle';
import mainImage from './image/works/work7MainImage.jpg';
import { WorkTextSection } from './workDetailPage/WorkTextSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import work1chart1 from './image/works/work1chart1.png';
import { Dispatch, SetStateAction, useEffect } from 'react';
import wavedivider from './image/wavedivider.png'
import { MainImage } from './workDetailPage/WorkMainImage';
import BackButton from './components/BackButton';
import NextItem from './components/NextItem';
import thumbnail6 from './image/thumbnails/thumbnail6.png';
import goal from './image/works/work7goal.png';
import background from './image/works/work7background.png';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
//CatalogManager

function Work7(props: {
  activeNav: number, 
  setActiveNav: Dispatch<SetStateAction<number>>,
}) {
    return (
      <>

      <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
      <div className='fadeIn '>
        <WorkTitle 
          title={'New Catalog Manager for Ads'} 
          description={'Design a catalog management platform that can manage and advertise millions of products for Karrot.'} 
          team={'Karrot(Daangn)'} 
          role={'User Research, Service Planning, UXUI Design'} 
          period={'2024.01. - 2024.06.'}/>
      </div>
      <MainImage image={mainImage}/>
      <WorkTextSection 
          title={'Background'} 
          description={<div>
              Karrot’s catalog management platform was newly launched in the 1H of 2023. However, due to the limitation of managing and advertising only up to 300 products per catalog, it was challenging to achieve the desired ROAS as it restricted large-scale product advertising. 
              <br/>As a result, we decide to develop the catalog management platform that can handle millions of products.
            </div>} 
        />
      <WorkFullImage image={background} isBackgroundColor={true} isRoundedCorner={true} isMargin={true} description='Product ads that are not relevant enough to the context and thus fail to entice users to click.'/>
      <WorkTextSection 
          title={'Goal'} 
          description={<div>
              The goal was to develop Karrot's catalog management platform, capable of managing and advertising millions of products, in order to attract advertisers with a broader and more diverse range of offerings.
            </div>} 
        />
      <WorkFullImage image={goal} />
      <Waiting/>
      <BackButton/>
      <NextItem to='/Work6' thumbnail={thumbnail6} nextProjectTitle='New Outlink-Type Ads'/>
      </>
    )
}

export default Work7;
