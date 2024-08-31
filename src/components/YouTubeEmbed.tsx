import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

interface YouTubeEmbedProps {
    videoId: string;
  }
  
  const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&controls=0`;
  
    return (
      <div className="video-responsive" >
        <iframe
          
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeEmbed;