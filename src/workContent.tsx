import React from 'react';
import './App.css';
import './style.css';
import thumbnail1 from './thumbnail1.png';

export function Content (props: {
    thumbnail: string;
    projectTitle: string;
    projectDescription : string;
    projectSubtitle : string;
    period : string;
}) {
  return (
    <div className='project'>
        <img className='projectThumbnail' src={props.thumbnail} />
        <div className='projectContents'>
            <div className='projectSubtitle'>
                {props.projectSubtitle}
            </div>
            <div style={{display : "flex", flexDirection : "column",gap:"10px"}}>
                <div className='projectTitle'>
                    {props.projectTitle}
                </div>
                <div className='projectDescription'>
                    {props.projectDescription}
                </div>
            </div>
            <div className='projectPeriod'>{props.period}</div>
        </div>
    </div>
  
  );
}

export default Content;