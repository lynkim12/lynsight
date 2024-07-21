import React from 'react';
import '../App.css';
import '../style.css';

export function Thumbnail(props: {
    isHovered: boolean; 
    thumbnail: string; 
}) {
    return (
        <div style={{width: "100%", aspectRatio: "100/60 auto", borderRadius:"18px", overflow:"hidden", maxHeight: '480px', background: 'linear-gradient(#F4F5F8 0%, #F1F2F7 100%)' }}>
            <img className={`projectThumbnail ${props.isHovered ? "projectThumbnailHover" : ""}`} src={props.thumbnail} />
        </div>
    )
}
