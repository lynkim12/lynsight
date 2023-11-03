import React from 'react';
import Navigator from './Navigation';
import { AboutList } from './AboutList';
import { Divider } from '@mui/material';
import './style.css';
import bookcovery from './image/bookcovery.png'
import daangn from './image/daangn.png'
import styleshare from './image/styleshare.png'

function About() {
    return (
      <>
      <div>
      <Navigator />
      <div className='aboutIntroSection'>
        <div className='aboutIntro' >Product Designer <br/> Lyn Kim</div>
        <div className='aboutIntroDescription'>
          Currently, I joined Karrot korea as a product designer contributing to the development of an advertising platform for small-sized business. I am responsible for advertiser's experience of creating ads and analyzing performance. We also have a goal to help for small-sized businesses to achieve the success through Karrot advertising.
        </div>
        
        {/* <div>
            <img className='companyLogo' src={bookcovery} style = {{position: 'absolute', left: '40px', top: '90px'}}/>
            <img className='companyLogo' src={daangn} style = {{position: 'absolute', left: '780px', top: '-10px'}}/>
            <img className='companyLogo' src={styleshare} style = {{position: 'absolute', left: '600px', top: '400px'}}/>
        </div> */}
     </div>
     <Divider className='dividerDash'/>
      <div className='aboutContents'>
        <div className='aboutTitle'>Experience</div>
          <div className='aboutDescription' style={{marginBottom : "100px"}}>
            I have skills about UX/UI Design, Growth hacking, Product/Project Managing through various responsibilities and roles.
          </div>
          <div>
            <Divider className = 'divider1'/>
            <AboutList 
              companyTitle = 'Karrot'
              experience = 'I designed and launched a new advertisements platform for mid- to large-scale Advertisers.'
              perieod ='2021.10. - Present'
              location='Seoul, Republic of Korea'
            />
            <Divider className = 'divider1'/>
            <AboutList 
              companyTitle = 'Bookcovery'
              experience = 'As a co-founder, I planned the book-browsing service and managed project to release the service to the PC & mobile web environment. also I designed UXUI of the service so that it can be used on PC and mobile. I implemented marketing strategy so that it collected 20,000 active users per a month.'
              perieod ='2020.12 - 2021.08'
              location='Seoul, Republic of Korea'
            />
            <Divider className = 'divider1'/>
            <AboutList 
              companyTitle = 'Styleshare'
              experience = 'As a product manager of growth team, I managed growth team to improve the activity and retention of the product. I improved the open rate of push messages and the retention of users by more than doubling the number of users who have agreed to receive marketing information.'
              perieod ='2020.06 - 2020.12'
              location='Seoul, Republic of Korea'
            />
            <Divider className = 'divider1'/>
            <AboutList 
              companyTitle = 'Minding'
              experience = 'As a product manager of growth team, I managed growth team to improve the activity and retention of the product. I improved the open rate of push messages and the retention of users by more than doubling the number of users who have agreed to receive marketing information.'
              perieod ='2018.07 - 2020.01'
              location='Seoul, Republic of Korea'
            />
            <Divider className = 'divider1'/>
            <AboutList 
              companyTitle = 'Seoul Nat’l Univ. & Samsung AI-UX Study Project'
              experience = 'In cooperation with Samsung, we conducted a UX improvement project for Delight Shop using IoT. Based on user journey analysis and user interviews, we have developed an artificial intelligence guide system that allows to enjoy the store experience.'
              perieod ='2018.04 - 2018.06'
              location='Seoul, Republic of Korea'
            />
            <Divider className = 'divider1'/>
            <AboutList 
              companyTitle = 'Salone del Mobile Milano Exhibition'
              experience = 'The exhibition was held under the theme of “Seoul”. The lighting that expresses the light of Seoul is made of resin and the traditional Korean cloth, kagi cloth.'
              perieod ='2018.04'
              location='Milan, Italy'
            />
          </div>
        </div>
        <div className='aboutContents' style={{backgroundColor: "#F4F5F8"}}>
        <div className='aboutTitle'>Contact</div>
        <div className='aboutContactList'>
          <a href='mailto:lynkim12@gmail.com' target='_blank' className='aboutContactListItem'><div>lynkim12@gmail.com</div></a>
          <a href='https://www.linkedin.com/in/lyn-k-a0078316b/' target='_blank' className='aboutContactListItem'><div className='aboutContactListItem'>LinkedIn</div></a>
          <a href='https://brunch.co.kr/@lynkim' target='_blank' className='aboutContactListItem'><div>Brunch</div></a>
        </div>
        </div>
        </div>
      </>
    )
}

export default About;