import './style.css';
import React from 'react';

export function AboutList (props: {
    companyTitle: string;
    experience: string;
    perieod: string;
    location: string;
}
) {
    return (
        <div className="aboutExperienceList">
            <div className="aboutExperienceListTitle">
                <div style ={{
                    color: "#131517",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "151.8%",
                }}>
                {props.companyTitle}
                </div>
                <div style ={{
                    color: "#767D85",
                    fontFamily: "Pretendard",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "151.8%",}}>
                {props.location}
                </div>
            </div>
            <div style ={{
                    color: "#3A3E44",
                    fontFamily: "Pretendard",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "151.8%",
                    flex: "1 0 0"}}>
                {props.experience}
            </div>
            <div style ={{
                    color: "#131517",
                    fontFamily: "Pretendard",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    textAlign: "right",
                    lineHeight: "151.8%",
                    width :"160px"}}>
                {props.perieod}
            </div>
        </div>
    )
}
