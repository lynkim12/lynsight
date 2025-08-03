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
import thumbnail8 from '../image/thumbnails/thumbnail8.png';
import { ArticleTextSection } from "../articleDetailPage/ArticleTextSection"
import { ArticleTitle } from "../articleDetailPage/ArticleTitle";
import { ArticleMainImage } from "../components/ArticleMainImage";
import image1 from '../image/resources/article1.jpg';
import ProtectedPage from "../components/ProtectedPage";

function Article1(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      return (
        <ProtectedPage password="0114">
          <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
          <div className='fadeIn '>
            <ArticleTitle
              title={'7월 첫 글_작성중'} 
              description={<div>디스크립션을 작성중</div>} 
              category={'essay'} 
              date={'2025.08.01.'}
              thumbnail={image1}/>
          </div>
          <div style={{paddingBottom:'200px'}}>
          <ArticleTextSection title = '첫번째 섹션' 
              description=
                  {<div>하루하루를 살아가다 보면 때로는 지치고 흔들릴 때가 있지만, 그 속에서도 분명히 작은 기쁨과 따뜻함은 존재합니다. 당신은 지금까지 잘 해왔고, 앞으로도 그렇게 해나갈 수 있을 거예요. 모든 순간이 완벽할 수는 없지만, 불완전함 속에서도 우리는 성장하고 있습니다. 아무리 작은 발걸음이라도 앞으로 나아가고 있다면 그 자체로 충분히 가치 있는 일입니다. 스스로에게 너무 많은 기대를 걸거나, 타인의 기준에 자신을 맞추려 하지 않아도 괜찮아요. 당신만의 속도, 당신만의 방식으로 천천히 걸어가면 됩니다.
                  <br/><br/>
                  때로는 멈춰서 하늘을 바라보는 것도 좋은 일이에요. 구름은 항상 같은 모양으로 머무르지 않듯, 우리의 감정도 머물지 않고 흘러갑니다. 오늘이 힘들었다면 내일은 조금 더 나을 수 있고, 그다음 날은 미소 지을 일이 생길지도 몰라요. 무엇보다 중요한 건, 당신은 혼자가 아니라는 사실입니다. 당신을 응원하는 마음들이 분명히 존재하고, 누군가에게는 당신의 존재만으로도 큰 위안이 됩니다. 그러니 자신을 소중히 여기고, 가끔은 다정한 시선으로 스스로를 바라보세요. 그 무엇보다 당신은 소중한 사람입니다.
                  </div>}
              subDescription={<div>
                  당근은 지금까지 사용자로부터 개인 맞춤형 광고 수신에 대한 명시적인 동의를 받지 않았습니다. 그러나 관련 규제를 준수하기 위해, 신규 사용자부터는 회원가입 시 명시적으로 개인 맞춤형 광고에 대한 수신 동의를 받아야 합니다.
                  사용자가 개인 맞춤형 광고에 대한 동의를 거부할 경우, 맞춤형 광고를 제공할 수 없어 광고 클릭률(CTR)이 크게 감소할 수 있고, 이에 따라 광고 매출이 30% 이상 감소할 수 있습니다.
                  이러한 영향을 최소화하기 위해, 동의율을 최대한 높이는 것이 중요한 과제입니다. 회원가입 시 개인 맞춤형 광고에 동의하지 않은 사용자에게 효과적으로 동의를 얻을 수 있는 방법을 디자인하는 목표를 가졌습니다. 
              </div>
              }/>    
              <ArticleTextSection title = '두번째 섹션' 
              description=
                  {<div>하루하루를 살아가다 보면 때로는 지치고 흔들릴 때가 있지만, 그 속에서도 분명히 작은 기쁨과 따뜻함은 존재합니다. 당신은 지금까지 잘 해왔고, 앞으로도 그렇게 해나갈 수 있을 거예요. 모든 순간이 완벽할 수는 없지만, 불완전함 속에서도 우리는 성장하고 있습니다. 아무리 작은 발걸음이라도 앞으로 나아가고 있다면 그 자체로 충분히 가치 있는 일입니다. 스스로에게 너무 많은 기대를 걸거나, 타인의 기준에 자신을 맞추려 하지 않아도 괜찮아요. 당신만의 속도, 당신만의 방식으로 천천히 걸어가면 됩니다.
                  <br/><br/>
                  때로는 멈춰서 하늘을 바라보는 것도 좋은 일이에요. 구름은 항상 같은 모양으로 머무르지 않듯, 우리의 감정도 머물지 않고 흘러갑니다. 오늘이 힘들었다면 내일은 조금 더 나을 수 있고, 그다음 날은 미소 지을 일이 생길지도 몰라요. 무엇보다 중요한 건, 당신은 혼자가 아니라는 사실입니다. 당신을 응원하는 마음들이 분명히 존재하고, 누군가에게는 당신의 존재만으로도 큰 위안이 됩니다. 그러니 자신을 소중히 여기고, 가끔은 다정한 시선으로 스스로를 바라보세요. 그 무엇보다 당신은 소중한 사람입니다.
                  </div>}/>  
          </div>    
          {/* <NextItem to='/Work9' thumbnail={thumbnail9} nextProjectTitle='New Video Ads'/> */}

          <BackButton/>
        </ProtectedPage>
      )
  }
  
  export default Article1;
