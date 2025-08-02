import { Dispatch, SetStateAction } from "react";
import NextItem from "../components/NextItem";
import BackButton from "../components/BackButton";
import { MainImage } from "../workDetailPage/WorkMainImage";
import Navigator from '../components/Navigation';
import { Waiting } from "../components/Waiting";
import { WorkFullImage } from "../workDetailPage/WorkFullImage";
import work13goal1 from "../image/works/Work13goal1.png";
import work13goal2 from "../image/works/work13goal2.png";
import { WorkImage } from "../workDetailPage/WorkImage";
import thumbnail9 from '../image/thumbnails/thumbnail9.png';
import { ArticleTextSection } from "../articleDetailPage/ArticleTextSection"
import { ArticleTitle } from "../articleDetailPage/ArticleTitle";
// import mainImage from './image/works/work13main';

//Personalized Ads consent


function Article1(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      return (
        <>
        <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
        <div className='fadeIn '>
          <ArticleTitle
            title={'7월 첫 글_작성중'} 
            description={<div>디스크립션을 작성중</div>} 
            category={'essay'} 
            date={'2025.08.01.'}/>
        </div>    
        <ArticleTextSection title = '첫번째 섹션' 
            description=
                {<div>Karrot has not explicitly obtain users consent for receiving personalized ads until now. However, to comply with regulations, we plan to request consent for personalized ads from new users upon signup.
                If a user declines consent for personalized ads, we will be unable to serve tailored advertisements, which could significantly decrease CTR and lead to a revenue drop of over 30%.
                To mitigate the impact, it is crucial to maximize the opt-in rate for personalized ads. Therefore, we aim to develop effective way to get users consent who initially opted out during signup.
                </div>}
            subDescription={<div>
                당근은 지금까지 사용자로부터 개인 맞춤형 광고 수신에 대한 명시적인 동의를 받지 않았습니다. 그러나 관련 규제를 준수하기 위해, 신규 사용자부터는 회원가입 시 명시적으로 개인 맞춤형 광고에 대한 수신 동의를 받아야 합니다.
                사용자가 개인 맞춤형 광고에 대한 동의를 거부할 경우, 맞춤형 광고를 제공할 수 없어 광고 클릭률(CTR)이 크게 감소할 수 있고, 이에 따라 광고 매출이 30% 이상 감소할 수 있습니다.
                이러한 영향을 최소화하기 위해, 동의율을 최대한 높이는 것이 중요한 과제입니다. 회원가입 시 개인 맞춤형 광고에 동의하지 않은 사용자에게 효과적으로 동의를 얻을 수 있는 방법을 디자인하는 목표를 가졌습니다. 
            </div>

            }
                />    
         <WorkImage image={work13goal2} isMaxheight={true} isbottomPadding={false} description={'An example of the ATT consent screen on Facebook.'}/>
        
        <ArticleTextSection title=''/>
        <ArticleTextSection title=''/>
        {/* <NextItem to='/Work9' thumbnail={thumbnail9} nextProjectTitle='New Video Ads'/> */}

        <BackButton/>
        </>
      )
  }
  
  export default Article1;
