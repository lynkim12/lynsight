import React from 'react';

interface MediaComponentProps {
  src: string;
  type: 'image' | 'video';
  width?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const MediaComponent: React.FC<MediaComponentProps> = ({ src, type, width = '600' }) => {
  const getVideoType = (src: string) => {
    const extension = src.split('.').pop();
    switch (extension) {
      case 'mp4':
        return 'video/mp4';
      case 'mov':
        return 'video/quicktime';
      default:
        return '';
    }
  };

  if (type === 'image') {
    return <img src={src} alt="media content" width={width} />;
  } else if (type === 'video') {
    return (
      <video width={width} controls>
        <source src={src} type={getVideoType(src)} />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return <p>Unsupported media type</p>;
  }
};

export default MediaComponent;

