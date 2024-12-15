import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css'
import '../image/icon_arrow.svg'
import { Thumbnail } from './WorkThumbnail';
import thumbnail from '../workDetailPage/thumbnail';

export function ActivitiyCard (props: {
    thumbnail: string;
    projectTitle: string;
    projectDescription : string;
    projectSubtitle : string;
    period : string;
    activityPage : string;
    badge? : string;
}) {
    const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='projectContentsAll' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        {props.badge && <div className = 'projectNewBadge'>{props.badge}</div>}
        <Link to={props.activityPage} className='activitycard' style={{textDecoration: 'none'}} >
        <div className={`activitycard-thumbnail ${isHovering ? "activitycard-thumbnail-hover" : ""}`}>
          <img src={props.thumbnail} />
        </div>
        <div className='activitycard'>
            <div className='projectSubtitle'>
                {props.projectSubtitle}
            </div>
            <div style={{display : "flex", flexDirection : "column",gap:"10px"}}>
                <div className="projectTitle">
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

export default ActivitiyCard;