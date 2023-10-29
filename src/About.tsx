import React from 'react';
import Navigator from './Navigation';

function About() {
    return (
      <>
      <Navigator />
      <div className='aboutContents'
      >
        <div style={{
            color: "#131517",
            fontFamily: "Pretendard",
            fontSize: "54px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "151.8%",
        }}>
            Product Designer <br/>
            Lyn kim
        </div>
        <div style={{
            color: "#3A3E44",
            fontFamily: "Pretendard",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: '400',
            lineHeight: "151.8%",
        }}>
            Currently, I joined Karrot korea as a product designer contributing to the development of an advertising platform for small-sized business. I am responsible for advertiser's experience of creating ads and analyzing performance. We also have the goal to help for small-sized businesses to achieve the success through Karrot advertising.
        </div>
      </div>
      <div className='aboutContents'>
        <div style={{
          color: "#131517",
          fontFamily: "Pretendard",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "151.8%",
        }}>
          Experience
        </div>
        <div style={{
          color: "#3A3E44",
          fontFamily: "Pretendard",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: '400',
          lineHeight: "151.8%",
        }}>
          I have skills about UX/UI Design, Growth hacking, Product/Project Managing through various responsibilities and roles.
        </div>
      </div>
      </>
    )
}

export default About;
