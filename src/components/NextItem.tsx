import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'
import '../image/icon_forward.svg'

interface NextItemProps {
  to?: string; // 이동할 URL을 나타내는 props
  thumbnail?: string;
  isHovered?: boolean;
  nextProjectTitle?: string;
}

const NextItem: React.FC<NextItemProps> = ({ to, thumbnail, isHovered, nextProjectTitle }) => {
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
        <div className={`next-item-thumbnail ${isHovered ? "next-item-thumbnail-hover" : ""}`}>
          <img  src={thumbnail} />
        </div>
        <div className={`next-sign ${isHovered ? "next-sign-hover" : ""}`}>
        <svg  xmlns='../image/icon_forward.svg' width="24" height="24" viewBox="0 0 12 12" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.64645 10.3536C5.45118 10.1583 5.45118 9.84171 5.64645 9.64645L8.79289 6.5L2 6.5C1.72386 6.5 1.5 6.27614 1.5 6C1.5 5.72386 1.72386 5.5 2 5.5L8.79289 5.5L5.64645 2.35355C5.45118 2.15829 5.45118 1.84171 5.64645 1.64645C5.84171 1.45118 6.15829 1.45118 6.35355 1.64645L10.3536 5.64645C10.5488 5.84171 10.5488 6.15829 10.3536 6.35355L6.35355 10.3536C6.15829 10.5488 5.84171 10.5488 5.64645 10.3536Z" fill="white"/>
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