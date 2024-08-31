import '../style.css';
import React from 'react';

export function AboutList (props: {
    companyTitle: React.ReactNode;
    experience: React.ReactNode;
    perieod: React.ReactNode;
    location: React.ReactNode;
}
) {
    return (
        <div className="aboutExperienceList">
            <div className="aboutExperienceListTitle">
                <div className='companyTitle'> {props.companyTitle} </div>
                <div className='location'> {props.location} </div>
            </div>
            <div className='experience'>{props.experience}</div>
            <div className='period'>{props.perieod}</div>
        </div>
    )
}
