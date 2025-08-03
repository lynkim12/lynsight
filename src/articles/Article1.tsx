import { Dispatch, SetStateAction } from "react";
import NextItem from "../components/NextItem";
import BackButton from "../components/BackButton";
import { MainImage } from "../workDetailPage/WorkMainImage";
import Navigator from '../components/Navigation';
import { WorkFullImage } from "../workDetailPage/WorkFullImage";
import { ArticleTextSection } from "../articleDetailPage/ArticleTextSection"
import { ArticleTitle } from "../articleDetailPage/ArticleTitle";
import { ArticleMainImage } from "../components/ArticleMainImage";
import image1 from '../image/resources/article1.jpg';
import ProtectedPage from "../components/ProtectedPage";
import { hashPassword } from "../utils/passwordUtils";
import '../style.css';

function Article1(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      // 비밀번호 암호화
      const hashedPassword = hashPassword("rlafls1004");
      
      return (
        <ProtectedPage password={hashedPassword}>
          <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
          <div className='fadeIn '>
            <ArticleTitle
              title={'우연함과 생각과 태도의 변화'} 
              description={'7월 한 달에 대한 회고'} 
              category={'essay'} 
              date={'2025.08.01.'}
              thumbnail={image1}/>
          </div>
          <div style={{paddingBottom:'200px'}} className='articleLayout'>
            <ArticleTextSection title = '우연스럽게 생긴 새로운 인연'
                description=
                  {<div>jaybee가 감사하게도 "월클" 회고 모임에 초대해 주셔서 7월부터 회고 모임을 하게 되었다. 처음 회고모임에 참여하고자 했을때의 마음가짐은 좀더 다양한 사람들과 새로운 만남을 하고 싶어서, 너무 회사에서만의 관계에서 좀더 넓어지고 싶어서 참여를 한 것인데, 그 몇 배의 값어치를 얻은 것 같다. 
                    
                    생각해보면 jaybee와는 정말 우연찮게 팔로알토에서 같이 EO farewell 파티에 참석해서 오랜만에 인사하게 된 인연인데, 그렇지 않았다면 이런 좋은 모임에 함께하지 못했을 것 같아서, 삶은 정말 우연으로 살아지는 것이구나 또 한번 느꼈다. 
                    </div>}
                subDescription={<div>
                  jaybee와 만난 일화는 되돌아 봤을 때 너무 웃기다. jaybee가 당근에 합류하고 3개월 만에 퇴사를 하면서 매니저인 pitt에게 죄송한 마음을 갖고 있어서 마주치지 않고 싶어했고, 그래서 사람들이 오지 않을만한 곳에서 밥을 먹고 커피를 마셨는데, 테라로사에서 이야기를 하는 와중에 pitt와 광고실 개발자 리드분들이 들어와서 딱 마주쳐버렸다. 
                  pitt는 LA에 거주하기 때문에 한국에 오는 일이 드문데, 하필 어떻게 그렇게 마주칠 수 있을까? 삶은 정말 우연스럽게 인연이 닿는 것 같다.  
                </div>
            }/>    
            <ArticleTextSection 
            description= {<div>
              회고 모임에 가야하니, 나를 소개하기 위한 3가지 키워드를 생각해야 했고, 이번 달에 대해서 되돌아 보아야 했다. 나를 나타내는 3가지 키워드가 무엇일지 2주 간 고민해도 찾아내기 정말 어려웠는데 그 만큼 나는 어떤 사람인지, 내가 살고 싶은 삶의 방향은 무엇일지 더 깊이 들여다볼 수 있는 기회가 된 것 같다.
              근래에 한 달에 대해 무슨 일이 있었는지, 어떤 생각을 하며 살았는지 되돌아본 적이 없었는데, 이번 달을 돌아보니 생각의 큰 변화가 생겼다는 것을 다시금 깨닫게 되었다. 회고를 하는 건 삶을 더 풍요롭고, 행복하게 살아갈 수 있도록 하는데 정말 큰 양분이 되는 것 같다고 다시 한 번 느꼈다. 
            </div>}
            />
              <ArticleTextSection title = '나를 표현하는 키워드' 
              description={<div>
                  나를 나타내는 세 가지 키워드를 생각해보라고 했지만, 세 가지까지 찾지는 못했다. 그나마 생각해보면 <b>천친난만</b>으로 한 가지 정리해보고 싶다. 올해 초가 되면서 타투가 너무 하고 싶었는데, 어떤 타투를 하면 가장 좋을까 고민을 하다가 평생 꼭 지키고 싶은 나의 모습을 생각해서 미나리아재비라는 꽃을 새겼다. 
                  <br/>미나리아재비는 천진난만이라는 꽃말을 갖고 있다. 누군가의 품에서 벗어나서 스스로 살아가는 것에 어느정도 익숙해지고 있는데, 그럴수록 잃고 싶지 않은 천진난만한 모습을 많이 잃어가는 것 같다. 작은 행복들에 크게 기뻐하고, 사람들과 함께 삶을 그저 살아가는 것에 만족하고, 하고 싶은 것들에 항상 설레하는 모습을 잃지 않고, 하루하루를 천진난만하게 살아가고 싶어서 그 모습을 잃어버리지 말자고 생각했다. 
                  요즘 지키고 싶었던 그 모습을 많이 잊어버렸던 것 같은데, 이 기회에 다시금 새겨본 것 같다.
                  </div>}
              subDescription={<div>
                  미나리아재비 꽃이 가지고 있는 신화도 재미있다. 미나리아재비는 원래 작은 별이였는데, 스스로 밤에만 빛이나고 낮에는 보이지 않는 것에 불만이 생겨서 항상 빛날 수 있게 하늘이 아닌 땅에 가고 싶어했다고 한다. 그렇게 땅에 가고 싶다는 소원을 빌었는데, 정말로 그 소원이 이루어져서 땅으로 떨어졌다고 한다. 
                  땅에 떨어진 그 별은 작은 꽃이 되었는데, 땅에서 살아보니 원래 있던 우주로 돌아가고 싶은 변덕이 생겨서, 가벼워지면 다시 우주로 돌아갈 수 있지 않을까해서 줄기가 텅 비어진 가벼운 꽃이 되었다고 한다. 하고 싶고, 변덕도 많은 모습이 조금은 나도 그런 것 같다. 좋은 것은 아닌 것 같은데... 
                </div>}/>    
                <WorkFullImage image={image1}/>
              <ArticleTextSection title='팀 이동'/>
              <ArticleTextSection title='블루베리잼 만들기'/>
              <ArticleTextSection title='목표없이 놀기'/>
              <ArticleTextSection title='요즘 잘 쓰고 있는 앱'/>
              <ArticleTextSection title='제로섬 게임'/>
              <ArticleTextSection title='능력주의와 운에 대해서'/>
          </div>    
          
          {/* <NextItem to='/Work9' thumbnail={thumbnail9} nextProjectTitle='New Video Ads'/> */}

          <BackButton/>
        </ProtectedPage>
      )
  }
  
  export default Article1;
