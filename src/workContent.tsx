import React from 'react';
import './App.css';
import './style.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { Thumbnail } from './WorkThumbnail';


export function Content (props: {
    thumbnail: string;
    projectTitle: string;
    projectDescription : string;
    projectSubtitle : string;
    period : string;
    projectPage : string;
}) {
    const [isHovering, setIsHovering] = useState(false);

  return (
    <div  onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <Link to={props.projectPage} className='project' style={{textDecoration: 'none'}} >
        <Thumbnail thumbnail={props.thumbnail} isHovered={isHovering}/>
        
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
        </Link>
    </div>
  
  );
}

export default Content;