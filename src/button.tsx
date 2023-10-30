import React from "react";

interface Props {
  border: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  children?: React.ReactNode;
  onClick: () => void;

}

const Button: React.FC<Props> = ({ 
    color,
    children,
    fontSize,
    fontWeight,
    onClick
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         fontFamily: "Pretendard",
         color: '#222429',
         fontSize: '15px',
         fontWeight: 700
      }}
    >
    {children}
    </button>
  );
}

export default Button;