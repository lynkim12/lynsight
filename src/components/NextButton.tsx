import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'
import '../image/icon_backward.svg'

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrolledToBottom, setScrolledToBottom] = useState<boolean>(false);
  

  useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        setScrolledToBottom(scrollTop + clientHeight >= scrollHeight - 1);

      if (window.scrollY > 200) { // 스크롤 위치에 따라 버튼을 표시
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    navigate(-1); // -1은 이전 페이지로 이동
  };

  return (
    <button className={`floatingButton ${isVisible ? 'show' : ''} ${scrolledToBottom ? 'scrolled-to-bottom' : ''}`} onClick={handleBackClick}>
       <svg
        xmlns="../image/icon_backward.svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor" /* SVG의 색상 설정 */
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5m7-7l-7 7 7 7" />
      </svg> 
      <span>Back</span>
    </button>
  );
};

export default BackButton;
