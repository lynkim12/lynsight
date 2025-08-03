import React, { useState, useEffect, ReactNode } from 'react';
import PasswordModal from './PasswordModal';
import '../App.css';
import '../style.css';
import '../font.css';

interface ProtectedPageProps {
  children: ReactNode;
  password: string;
  isOpen?: boolean;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ 
  children, 
  password, 
  isOpen = true 
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(isOpen);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setShowPasswordModal(false);
  };

  // 페이지 진입 시 비밀번호 모달 표시
  useEffect(() => {
    setShowPasswordModal(isOpen);
  }, [isOpen]);

  if (!isAuthenticated) {
    return (
      <PasswordModal
        isOpen={showPasswordModal}
        onSuccess={handlePasswordSuccess}
        correctPassword={password}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedPage; 