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
        <WorkTextSection title = 'background' 
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
                Based on the insights discovered through research,  we designed the basic structure of the bottom sheet.
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
        <Waiting/>

        <BackButton/>
        </>
      )
  }
  
  export default Work13;
