import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'
import '../image/icon_arrow_up_right.svg'

type OpenButtonProps = {
  label: string;
  href: string;
};

const OpenButton: React.FC<OpenButtonProps> = ({ label, href }) => {
  return (
    <button
      className='BlackButton'
      onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
    >
      <span>{label}</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path  d="M16.6668 15.8333C17.1251 15.8333 17.5001 15.4583 17.5001 15V3.33333C17.5001 2.875 17.1251 2.5 16.6668 2.5H5.00013C4.5418 2.5 4.1668 2.875 4.1668 3.33333C4.1668 3.79167 4.5418 4.16667 5.00013 4.16667H14.6668L2.7418 16.075C2.4168 16.4 2.4168 16.925 2.7418 17.25C3.0668 17.575 3.5918 17.575 3.9168 17.25L15.8335 5.35833V15C15.8335 15.4583 16.2085 15.8333 16.6668 15.8333Z" fill='currentColor' />
      </svg> 
    </button>
  );
};

export default OpenButton;
