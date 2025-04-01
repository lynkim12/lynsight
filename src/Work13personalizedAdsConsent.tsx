import { Dispatch, SetStateAction } from "react";
import { WorkTitle } from "./workDetailPage/WorkTitle";
import NextItem from "./components/NextItem";
import BackButton from "./components/BackButton";
import { WorkTextSection } from "./workDetailPage/WorkTextSection";
import { MainImage } from "./workDetailPage/WorkMainImage";
import Navigator from './components/Navigation';
import { Waiting } from "./components/Waiting";
import { WorkFullImage } from "./workDetailPage/WorkFullImage";
import work13goal1 from "./image/works/Work13goal1.png";
import work13goal2 from "./image/works/work13goal2.png";
import { WorkImage } from "./workDetailPage/WorkImage";
import research1 from "./image/works/work13research1 1.png";
import research2 from "./image/works/work13research2.png";
import research3 from "./image/works/work13research3.png";
import research4 from "./image/works/work13research4.png";
import research5 from "./image/works/work13research5.png";
import design1 from "./image/works/work13design1.png";
import design2 from "./image/works/work13design2.png";
import experiment1 from "./image/works/work13experiment1.png"
import experiment2 from "./image/works/work13experiment2.png"
import experiment3 from "./image/works/work13experiment3.png"
import experiment4 from "./image/works/work13experiment4.png"
import experiment5 from "./image/works/work13experiment5.png"
import experiment6 from "./image/works/work13experiment6.png"
import result1 from "./image/works/work13result1.png"
import result2 from "./image/works/work13result2.png"
import result4 from "./image/works/work13result4.png"
import result5 from "./image/works/work13result5.png"
import { Divider, Hidden } from "@mui/material";
import thumbnail9 from './image/thumbnails/thumbnail9.png';
import { Wavedivider } from "./components/Wavedivider";
// import mainImage from './image/works/work13main';

//Personalized Ads consent


function Work13(props: {
    activeNav: number, 
    setActiveNav: Dispatch<SetStateAction<number>>,
  }) {
      return (
        <>
        <Navigator activeNav={props.activeNav} setActiveNav={props.setActiveNav} />
        <div className='fadeIn '>
          <WorkTitle 
            title={'Obtaining Consent for Personalized Advertising'} 
            description={<div>Obtain personalized advertising consent from new users to serve tailored ads.</div>} 
            team={'Karrot'} 
            role={'UX Strategic Planning, Research, UXUI Design'} 
            period={'2024.10. - 2024.12.'}/>
        </div>    
        <video style = {{ width:"100%", aspectRatio: "auto",  maxHeight:'1200px'}}  loop autoPlay muted>
            <source src="/work13MainImage.mov" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <WorkTextSection title = 'Background' 
            description='Karrot has not explicitly obtain users consent for receiving personalized ads until now. However, to comply with regulations, we plan to request consent for personalized ads from new users upon signup.
                If a user declines consent for personalized ads, we will be unable to serve tailored advertisements, which could significantly decrease CTR and lead to a revenue drop of over 30%.
                To mitigate the impact, it is crucial to maximize the opt-in rate for personalized ads. Therefore, we aim to develop effective way to get users consent who initially opted out during signup.'/>    
         <WorkImage image={work13goal2} isMaxheight={true} isbottomPadding={false} description={'An example of the ATT consent screen on Facebook.'}/>
        <WorkTextSection title = 'Goal' 
            description={<div>Our goal is to get personalized advertising consent from users who newly sign up for the service. By obtaining personalized advertising consent from users, we can display tailored ads, which are likely to result in higher click-through rates compared to randomly served ads, helping to prevent a decline in revenue. <br/><br/>The average ATT (App Tracking Transparency) opt-in rate for vertical apps is below 35%, making it a highly ambitious goal to obtain consent from the majority of new users.</div>
            }/>    
        <WorkImage image={work13goal1} isMaxheight={true} isbottomPadding={false}/>
        <WorkTextSection title={'Strategy'} 
            description={
                <div>
                    We implemented a strategy to obtain consent from the largest number of users after signup.
                    <br/>First, we take action at the moment when consent requests can reach the highest number of users. 
                    <br/>Second, we ensure that the request is made at a natural point where it minimizes negative user experience while effectively persuading them to opt in. 
                    <br/>Lastly, we design the UI by leveraging psychological principles to maximize the opt-in rate.
                </div>
            }/>
        <WorkTextSection title={'Research'}
            description={
                <div>
                     To encourage users to opt in for consent, we researched proven cases from other companies and psychological principles. Through this research, we gathered various insights that can be applied to screen design.

                    <br/><br/><br/><b>1. Optimal timing</b>
                    <br/>If the consent request is placed at the final stage of onboarding, right after a conversion action within the app (when the user has experienced the highest value), or following a positive engagement action, the likelihood of users opting in increases.
                    This is because people tend to perceive subsequent situations more positively after having a positive experience or after responding positively to a previous question. 
                    <a style={{color:'#6A27F9'}} href='https://www.psychologistworld.com/behavior/compliance/strategies/foot-in-door-technique' target="_blank" rel="noreferrer">(foot-in-the-door technique)</a>
                    </div>
                } 
        />
        <WorkImage image={research1} isMaxheight={true} isbottomPadding={false}/>
        <WorkTextSection 
            description={
                <div>
                    <b>2. UI Design</b>
                    <br/>When a modal is designed to cover the entire screen, the opt-in rate is significantly higher than that of a half-view modal. This is because as people experience mental fatigue and depletion of willpower, they are more likely to make intuitive choices rather than logical decisions.
                </div>
            }
        />
        <WorkImage image={research2} isMaxheight={true} isbottomPadding={false}/>
        <WorkTextSection 
            description={
                <div>
                    Images can be identified faster than text, allowing users to process information more easily and quickly, which helps encourage consent. Listing and explaining the core value of the app’s services alongside icons makes the benefits more visually prominent, drawing users’ attention and increasing engagement.
                </div>
            }
        />
        <WorkImage image={research3} isMaxheight={true} isbottomPadding={false}/>
        <WorkTextSection 
            description={
                <div>
                    When persuasion relies on lengthy text, users tend to assume they will be shown more ads, leading to a higher opt-out rate.
                    <br/>Also, if the prompt is designed with a gray or dark background, users may perceive it as a technical or system requirement, prompting them to think logically about whether to consent rather than making an intuitive decision (engaging System 2 thinking). This increases the likelihood of opting out.
                    <br/>Additionally, placing the CTA horizontally rather than vertically can increase the opt-in rate by approximately 5%.
                </div>
            }
        />
        <WorkImage image={research4} isMaxheight={true} isbottomPadding={false}/>
        <WorkTextSection 
            description={
                <div>
                    <b>3. The preferred language</b>
                    <br/>Using positive and personally relevant language (e.g., "better experience," "amazing," "relevant to you") can increase consent rates by more than three times.
                    <br/><em style={{color:'#767D85'}}>For example: "We’ll use your data to give you a more personalized ASOS experience and make our app even more amazing."</em>
                    <br/><br/>Avoid using words like "track" or "collect," as they can create a negative perception and reduce the likelihood of consent. Instead, focus on explaining and persuading users by highlighting how their data will be used to enhance their experience.
                </div>
            }
        />
        <WorkImage image={research5} isMaxheight={true} isbottomPadding={false}/>
        <WorkTextSection title='Design'
            description={<div>
                Based on the insights discovered through research, we designed the basic structure of the bottom sheet.
                <br/><br/>
                <b>1. The bottom sheet should cover almost the entire screen.</b>
                <br/>Research has shown that a full-screen bottom sheet significantly increases the consent rate compared to a half-view. As people’s willpower and mental energy deplete, they tend to make intuitive rather than logical decisions. When they have just completed a task or are preparing for one, they increasingly rely on instinct and look for ways to complete the current task with minimal effort. Therefore, a bottom sheet that fully covers the screen makes it easier to guide users toward clicking the prominent consent button, rather than allowing them to easily dismiss a half-view sheet.
                <br/><br/>
                <b>2. Place the close (X) button in the top-left corner.</b>
                <br/>Studies suggest that when the close button is positioned in the top-left corner, users subconsciously associate it with navigating back rather than exiting. This perception leads to fewer dismissals as users avoid the hassle of going back. Strategically placing the decline button in the top-left corner instead of the right can help reduce opt-out rates.
                <br/><br/>
                <b>3. Do not provide a decline button at the bottom.</b>
                <br/>While offering a decline button allows for selective consent, it also makes rejection an easy choice, which can lower the overall consent rate. Removing a clearly visible decline option helps maintain a higher opt-in rate.               
            </div>}
        />
        <WorkImage image={design1} isMaxheight={false} isbottomPadding={false}/>
        <WorkFullImage image={design2} isBackgroundColor={true} isMargin={true} isRoundedCorner={true} />
        <WorkTextSection
                title='Experiment'
                description={
                    <div>
                        We conducted experiments by formulating hypotheses based on five different strategies derived from psychological principles:
                        <br/><b>Effort</b> – Emphasizing the effort the service puts in for customers to encourage consent.
                        <br/><b>Psychological Accounting</b> – Framing benefits and losses in a way that leverages the natural tendency to avoid losses.
                        <br/><b>Endowment Effect</b> – Creating a sense of ownership so that users perceive not receiving the benefits as a loss, which feels more significant than gaining a benefit.
                        <br/><b>Social Norms</b> – Positioning the brand’s values as widely recognized and important, encouraging users to participate.
                        <br/>By leveraging these psychological principles, we tested various approaches to maximize user consent.
                    </div>
                }
            />
        <WorkFullImage image={experiment1} />
        <div className='horizontal-layout'>
            <WorkTextSection 
                description={
                <div>
                    <b>Variant1. Emphasizing the Value of Personalized Content (While Hiding Ad-Related Information)</b>
                    <br/><br/>Preliminary data shows that using <b>positive, personally relevant language</b> (e.g., better experience, amazing, relevant to you) increases consent rates by more than 3x. By framing the message around delivering a feed filled with personally relevant posts, we aim to reduce resistance and drive higher opt-in rates.
                    <br/>To enhance intuitive understanding, the UI will <b>mimic the service's existing look and feel</b>, rather than using illustrations. This approach is expected to be far more persuasive, helping users immediately grasp the benefits of a personalized feed.
                    <br/>Additionally, loss aversion is a stronger psychological driver than the expectation of gains. Since Karrot’s feed is primarily used for secondhand trading, one of its most valuable aspects is discovering great deals. By implying that users may <b>miss out on items they are interested in</b> if they opt out, we leverage the natural fear of loss to increase consent rates.

                </div>
            }
            />
            <div style={{maxWidth:'640px'}}><WorkFullImage image={experiment2}/></div>
        </div>
        <Divider className = 'divider1'/>
        <div className='horizontal-layout'>
            <WorkTextSection 
                description={
                <div>
                    <b>Variant2. Emphasizing the Value of Personalized Content (Including Ad-Related Information)</b>
                    <br/><br/><b>Highlight key benefits with icons</b> to make them more visually prominent and easier to read, increasing user engagement.
                    <br/>Use language like <em>"We’ll improve your experience by showing only relevant ads"</em> to eliminate concerns about seeing unrelated ads.
                    <br/><b>Emphasize the additional value of receiving personalized benefits from nearby stores</b>, using a message like "Discover exclusive offers from local businesses that matter to you." Focusing on future benefits has been shown to significantly increase consent rates.
                    <br/><b>Avoid terms like <em>"tracking"</em> or <em>"collecting"</em></b>, as they can create negative perceptions and lead to lower opt-in rates. Instead, clearly explain how the data is used in a beneficial way. By framing it as "Your data is only used to recommend posts on Karrot", we address user concerns and build trust.
                </div>
            }
            />
            <div style={{maxWidth:'640px'}}><WorkFullImage image={experiment3}/></div>
        </div>
        <Divider className = 'divider1'/>
        <div className='horizontal-layout'>
            <WorkTextSection 
                description={
                <div>
                    <b>Variant3. Emphasizing Brand Values to Foster User Alignment and Participation</b>
                    <br/><br/>Providing emotional imagery and messaging can evoke positive feelings, which in turn lead to higher consent rates.
                </div>
            }
            />
            <div style={{maxWidth:'640px'}}><WorkFullImage image={experiment4} /></div>
        </div>
        <Divider className = 'divider1'/>
        <div className='horizontal-layout'>
            <WorkTextSection 
                description={
                <div>
                    <b>Variant4. Persuading Users with Service Efforts & Asking for Their Support</b>
                    <br/><br/>We adopt a strategy that emphasizes efforts made for the user, creating a sense of goodwill. Users are more likely to respond positively when they recognize that a service is making an effort for them.
                    <br/>Providing emotional images and messages can evoke positive feelings, which in turn increases the likelihood of positive responses. Therefore, we use visuals that depict warm and meaningful transactions within the service.
                </div>
            }
            />
            <div style={{maxWidth:'640px'}}><WorkFullImage image={experiment5}/></div>
        </div>
        <Divider className = 'divider1'/>
        <div className='horizontal-layout'>
            <WorkTextSection 
                description={
                <div>
                    <b>Variant5. Implying the Negative Scenario That Unnecessary Ads</b>
                    <br/><br/>We adopt a strategy that highlights the unexpected benefit of reducing excessively repetitive ads. By reminding users that they may experience inconvenience if they do not agree, we can encourage them to consent.
                    <br/>We aim to alleviate concerns by using language that clarifies that their information is only used for recommending posts on Karrot.
                    </div>
            }
            />
            <div style={{maxWidth:'640px'}}><WorkFullImage image={experiment6} /></div>
        </div>
        <Divider className = 'divider1'/>
        <WorkTextSection title='Experiment Analysis'
            description={
                <div>
                    We found that the effective strategies in obtaining user consent for personalized ads on Karrot:
                    <br/><br/>
                    1. <b>Emphasizing potential losses (inconvenient situations)</b> led to a higher consent rate.
                    <br/>
                    2. Clearly presenting and persuading users about <b>potentially unpleasant or inconvenient aspects</b>, rather than hiding them, resulted in a higher consent rate.
                </div>
            }
        />
        <WorkFullImage image={result1} isMargin={true} isBottomMargin={true}/>
        <WorkTextSection 
            description={
                <div>
                    When we observed that the click-through rate of Experiment Group 1 was <b>more than twice</b> that of Experiment Group 2, we discovered that clearly explaining and persuading users about potentially <b>uncomfortable topics (such as ad personalization and the use of personal data)</b> had a positive impact on obtaining consent, rather than hiding these aspects.
                </div>
            }
        />
        <WorkFullImage image={result2} isMargin={false} />   
        {/* <div className='image-center margin48 horizontal-layout'>
         <WorkFullImage image={result2} isMargin={false} isBottomMargin={true} />   
         <WorkFullImage image={result3} isMargin={false} isBottomMargin={true} />   
        </div>   */}
      <WorkTextSection 
            description={
                <div>
                    Additionally, the experiment group with the highest consent rate, Experiment Group 5, adopted a <b>"psychological accounting"</b> strategy, which emphasized the inconvenience of not giving consent rather than highlighting the value users would gain.
                    <br/>
                    In this experiment, the content suggested that refusing to consent to data usage could lead to <b>irrelevant ads being shown repeatedly</b>, implying a negative scenario.
                    <br/>
                    Although we were initially concerned that emphasizing potential inconvenience might cause discomfort, the results showed that leveraging users' tendency to avoid losses was significantly more effective in obtaining consent.
                </div>
            }
        />
        <div style={{ overflow:"Hidden",  height: "calc(100% - 1px)"}}>
            <video style = {{ width:"100%", aspectRatio: "auto", height: "auto", marginBottom: "-10px"}}  loop autoPlay muted>
                <source src="/work13result3.mov" type="video/mp4" />
                    Your browser does not support the video tag.
        </video>
      </div>
      <WorkTextSection description={
        <div>
            When users declined consent after viewing the bottom sheet, it was repeatedly shown again <b>after seven days.</b>
            <br/>
            Analyzing Group 5, which had the highest consent rate, we observed that the consent rate (CTR) gradually increased with each repetition and <b>converged to around 39% after four or more exposures.</b>
            <br/>
            Displaying the bottom sheet more than five times seems to have little impact. <b>Showing it more than four times to a single user does not yield additional benefits and may instead cause fatigue in their service experience.</b>
        </div>
      }
      />
      <WorkFullImage image={result5} isMargin={true} isBottomMargin={true}/> 
      <WorkTextSection title='Result'
        description={
            <div>
                We have decided to display the Bottom Sheet for Group5 <b>up to 4 times every 7 days upon app launch</b>. Additionally, after 4 exposures, the exposure limit will be reset 90 days after the last exposure, allowing repeated exposures to resume.
            </div>
        }
      />
      <div style={{ padding: " 0px 48px"}}><Wavedivider/></div>
      <WorkTextSection title='Impact'
            description={
                <div>
                    <b>Consent Rate of Personalized Ads</b>
                    <br/>As a result of the experiment, approximately 76% of users consented to receiving personalized ads through opt-in consent at the time of sign-up. 
                    <br/>Additionally, users who initially declined on signup reconsent via the bottom sheet, so that the overall consent rate for personalized ads increased to about 80%.
                    <br/>
                    Therefore, if Group 5 is applied to all users, <b>we can maintain a consent rate of 82% among new sign-ups.</b>
                    <br/><br/>
                    
                    <b>Revenue Increase</b>
                    <br/>In Group 5, revenue per user saw the highest increase, <b>rising by approximately 27–29%.</b>
                    <br/>
                    The higher the consent rate for personalized ads, the higher the ad revenue. All experimental groups showed an increase in revenue compared to the control group. By utilizing user information, we were able to deliver ads with a higher expected click-through rate, resulting in an actual increase in CTR.
                    <br/>Therefore, we can expect that as the consent rate for personalized ads increases, it will continue to have a positive impact on revenue.</div>
            }
        />
        
        <WorkFullImage image={result4} isMargin={true} isBottomMargin={true}/> 
        <WorkTextSection title=''/>
        <NextItem to='/Work9' thumbnail={thumbnail9} nextProjectTitle='New Video Ads'/>
        <BackButton/>
        </>
      )
  }
  
  export default Work13;
