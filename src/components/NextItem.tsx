import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'
import '../image/icon_forward.svg'

interface NextItemProps {
  to?: string; // 이동할 URL을 나타내는 props
  thumbnail?: string;
  isHovered?: boolean;
}

const NextItem: React.FC<NextItemProps> = ({ to, thumbnail, isHovered }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrolledToBottom, setScrolledToBottom] = useState<boolean>(false);

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
      onClick={Click}>
            <img className={`nextitem-thumbnail ${isHovered ? "nextitem-thumbnailHover" : ""}`} src={thumbnail} />
    </button>
  );
};

export default NextItem;