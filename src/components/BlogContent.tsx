import React from 'react';
import '../App.css';
import '../style.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { Thumbnail } from './WorkThumbnail';


export function BlogContent (props: {
    thumbnail?: string;
    title: string;
    description : string;
    category : string;
    date : string;
    blogPage : string;
}) {
    const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='projectContentsAll' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <Link to={props.blogPage} className='project' style={{textDecoration: 'none'}} >
        <div className='blogContents'>
            <div className='projectSubtitle'>
                {props.category}
            </div>
            <div style={{display : "flex", flexDirection : "column",gap:"10px"}}>
                <div className="projectTitle">
                    {props.title}
                </div>
                <div className='projectDescription'>
                    {props.description}
                </div>
            </div>
            <div className='projectPeriod'>{props.date}</div>
            {props.thumbnail && (
                <Thumbnail thumbnail={props.thumbnail} isHovered={isHovering} />
            )}
        </div>
        </Link>
    </div>
  
  );
}

export default BlogContent;