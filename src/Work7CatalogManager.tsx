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
import needs from './image/works/work7needs.png';
import feature1 from './image/works/work7feature1.png';
import feature2 from './image/works/work7feature2.png';
import feature3 from './image/works/work7feature3.png';
import feature4 from './image/works/work7feature4.png';
import structure from './image/works/work7structure.png';
import design1 from './image/works/work7design1.png';
import design2 from './image/works/work7design2.png';
import design3 from './image/works/work7design3.png';
import FeedURLUpload1 from './image/works/work7FeedURLUpload1.png';
import FeedURLUpload2 from './image/works/work7FeedURLUpload2.png';
import firstUserScenario from './image/works/work7firstUserScenario.png';
import UploadHistory1 from './image/works/work7UploadHistory1.png';
import UploadHistory2 from './image/works/work7UploadHistory2.png';
import UploadHistory3 from './image/works/work7UploadHistory3.png';
import productset1 from './image/works/work7productset1.png';
import productset2 from './image/works/work7productset2.png';
import productset3 from './image/works/work7productset3.png';
import productset4 from './image/works/work7productset4.png';
import { WorkFullImage } from './workDetailPage/WorkFullImage';
import { Divider } from '@mui/material';
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
      <WorkTextSection 
          title={'User Needs'} 
          description={<div>
              We conducted research on the essential features a catalog management platform must have when dealing with shopping malls that sell millions of products.
            </div>}   
        />
      <WorkFullImage image={needs} />
      <WorkTextSection 
          title={'Key Features'} 
          description={'To meet the requirements of shopping malls that sell a large volume of products, we planned to develop an MVP with the minimum must-have features.'}
          />
      <div style={{ display: "flex", flexDirection: "row", gap:"12px", margin:"auto", paddingLeft:"48px", paddingRight:"48px", maxWidth:"1600px", alignContent: "center", marginBottom:'60px'}}>
          <WorkFullImage image={feature1} isRoundedCorner={true} isShadow={true} isBorder={true}/>     
          <WorkFullImage image={feature2} isRoundedCorner={true} isShadow={true} isBorder={true}/>   
          <WorkFullImage image={feature3} isRoundedCorner={true} isShadow={true} isBorder={true}/>     
          <WorkFullImage image={feature4} isRoundedCorner={true} isShadow={true} isBorder={true}/>      
        </div>
      <WorkTextSection title={'Structure'} description={'First, we restructured the catalog manager to allow users to create product sets. To facilitate managing large volumes of products, we added product filters, enabling users to easily identify items that match specific criteria.'}/>
      <WorkFullImage image={structure} isMargin={true} isBottomMargin={true}/>
      <Divider/>
      <WorkTextSection title={'Overview of the New Catalog Platform'}/>
      <WorkFullImage image={design1}/>
      <WorkFullImage image={design2}/>
      <WorkFullImage image={design3}/>
      <Divider/>
      <WorkTextSection title={'First User Scenario'}
        description={
          <div>
            From small advertisers to large-scale shopping malls, we’ve designed the onboarding flow so that first-time users can easily understand the catalog and select the most suitable upload method.
          </div>
        }/>
      <WorkFullImage image={firstUserScenario}/>
      <WorkTextSection title={'Feed URL Upload'}
        description={<div>
          We designed a new product upload method called <b>"Feed URL Upload"</b> specifically for large-sized shopping malls that handle a high volume of products.
          <br/>
          Unlike the previous method, which required sellers to manually input product attributes one by one, this new method eliminates the need for manual entry. Instead, sellers can simply provide a URL to a product feed table they already manage—typically in formats used by other advertising platforms such as Naver EP or Meta product feeds.
          <br/>
          This allows for efficient bulk uploads and enables automatic product data updates according to the mall's preferred schedule, greatly reducing manual workload and improving data freshness.
      </div>}/>
      <WorkFullImage image={FeedURLUpload1} />
      <div style={{background: 'linear-gradient(180deg, rgba(242, 243, 246, 0.00) 0%, #F2F3F6 100%)'}}>
        <WorkTextSection description={<div>When the upload is complete, system check for any issues with the Feed URL. <br/>And then, we provide a guide for users to pre-check and correct any errors.</div>}/>
        <WorkFullImage image={FeedURLUpload2}  />
      </div>
      <div style={{background: 'linear-gradient(180deg, #F2F3F6  0%, rgba(242, 243, 246, 0.00) 100%)'}}>
        <WorkTextSection title={'Upload History & Error report'} 
          description={<div>
            With the newly introduced Feed URL Upload method, advertisers can now automatically update a large volume of products with minimal manual effort.
            <br/>To support this, we’ve made it easy to check whether all product data updates were successfully applied without errors. 
            <br/>In case any issues occur, advertisers can review detailed error information and download the full set of error data for further inspection and resolution.
          </div>}/>
        <WorkFullImage image={UploadHistory1}/> 
        <WorkFullImage image={UploadHistory2} isBottomMargin={true}/> 
        <WorkFullImage image={UploadHistory3}/> 
      </div>
      <Divider/>
      <WorkTextSection title={'Product Set'} description={
        <div>
          To advertise products registered in the catalog, users must first create a product set and then select that set to create their ad.
          <br/>
          Product sets can be created either by <b>manually selecting individual products</b> or <b>by applying filters to automatically include products that meet certain conditions.</b>
        </div>
      }/>
      <WorkFullImage image={productset1} isBottomMargin={true}/>
      <WorkFullImage image={productset2} isBottomMargin={true}/>
      <WorkFullImage image={productset3} isBottomMargin={true} isRoundedCorner={true} isShadow={true} isMargin={true} isBorder={true}/>
      <WorkFullImage image={productset4} isBottomMargin={true}/>
      <Waiting/>
      <BackButton/>
      <NextItem to='/Work6' thumbnail={thumbnail6} nextProjectTitle='New Outlink-Type Ads'/>
      </>
    )
}

export default Work7;
