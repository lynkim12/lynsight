import React from 'react';
import '../App.css';
import '../style.css';

interface ArticleImageLayoutProps {
  images: string[];
  className?: string;
}

const ArticleImageLayout: React.FC<ArticleImageLayoutProps> = ({ 
  images, 
  className = '' 
}) => {
  // 이미지 개수 제한 (1-3개)
  const validImages = images.slice(0, 3);
  
  if (validImages.length === 0) {
    return null;
  }

  return (
    <div className={`article-image-layout ${className}`}>
      {validImages.map((image, index) => (
        <div key={index} className="article-image-container">
          <img
            src={image}
            alt={`Article image ${index + 1}`}
            className="article-image"
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleImageLayout; 