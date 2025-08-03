import React, { useState, useEffect } from 'react';
import '../App.css';
import '../style.css';
import '../font.css';

interface PasswordModalProps {
  isOpen: boolean;
  onSuccess: () => void;
  correctPassword: string;
  verifyPassword?: (inputPassword: string) => boolean;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ 
  isOpen, 
  onSuccess, 
  correctPassword,
  verifyPassword 
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // 트렌지션 시간과 동일
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 암호화된 비밀번호 검증 또는 일반 검증
    const isValid = verifyPassword 
      ? verifyPassword(password)
      : password === correctPassword;
    
    if (isValid) {
      setError('');
      setHasError(false);
      onSuccess();
    } else {
      setError('비밀번호가 일치하지 않아요.');
      setPassword(''); // input 값 지우기
      setHasError(true);
    }
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    setHasError(false);
    // 이전 페이지로 이동
    window.history.back();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (hasError) {
      setHasError(false);
      setError('');
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`password-modal-overlay ${isOpen ? 'modal-open' : 'modal-closing'}`}>
      <div className={`password-modal-container ${isOpen ? 'modal-open' : 'modal-closing'}`}>
        <div className="password-modal-title">
          <div>비밀번호 입력하기</div>
        </div>
        <div className="password-modal-description">이 페이지는 비밀번호로 잠겨있어요.</div>
        
        <form onSubmit={handleSubmit} className="password-modal-form">
          <div>
            <input
              type="password"
              value={password}
              onChange={handleInputChange}
              placeholder="여기에 비밀번호를 입력해 주세요."
              className={`password-modal-input ${hasError ? 'password-modal-input-error' : ''}`}
              autoFocus
            />
          </div>
          
          {error && (
            <div className="password-modal-error-message">{error}</div>
          )}
          
          <div className="password-modal-buttons">
            <button
              type="button"
              onClick={handleClose}
              className="password-modal-button password-modal-button-secondary"
            >
              <span>돌아가기</span>
            </button>
            <button
              type="submit"
              className="password-modal-button password-modal-button-primary"
            >
              <span>확인</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal; 