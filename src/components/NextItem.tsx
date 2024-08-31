import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'
import '../image/icon_arrow.svg'

interface NextItemProps {
  to?: string; // 이동할 URL을 나타내는 props
  thumbnail?: string;
  nextProjectTitle?: string;
}

const NextItem: React.FC<NextItemProps> = ({ to, thumbnail, nextProjectTitle }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrolledToBottom, setScrolledToBottom] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setScrolledToBottom(scrollTop + clientHeight >= scrollHeight - 1);

      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Click = () => {
    if (to) {
      navigate(to); // 특정 URL로 이동
    } 
  };


  return (
    <button className={`next-item ${isVisible ? 'show' : ''} ${scrolledToBottom ? 'scrolled-to-bottom' : ''}`}
      onClick={Click} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div className={`next-item-thumbnail ${isHovering ? "next-item-thumbnail-hover" : ""}`}>
          <img  src={thumbnail} />
        </div>
        <div className={`next-sign ${isHovering ? "next-sign-hover" : ""}`}>
          <svg  xmlns='../image/icon_arrow.svg' width="24" height="24" viewBox="0 0 12 12" fill="none">
            <path d="M9.60359 2.5898C9.58156 2.55025 9.55374 2.51306 9.52014 2.47945C9.41997 2.37929 9.28787 2.3305 9.1566 2.33311L3.5 2.33309C3.22386 2.33309 3 2.55694 3 2.83309C3 3.10923 3.22385 3.33309 3.5 3.33309L7.95938 3.3331L2.4797 8.81279C2.28444 9.00805 2.28444 9.32463 2.4797 9.51989C2.67496 9.71516 2.99154 9.71516 3.18681 9.51989L8.66668 4.04002V8.49976C8.66668 8.7759 8.89054 8.99975 9.16668 8.99975C9.44282 8.99975 9.66668 8.7759 9.66668 8.49976V2.83311C9.66668 2.74478 9.64378 2.66181 9.60359 2.5898Z" fill="white"/>
          </svg>
        </div>
        <div className='next-item-text'>
          <div className='next-text'>Next</div>
          <div className='next-project-title'>{nextProjectTitle}</div>
          
        </div>
  </button>
  );
};

export default NextItem;