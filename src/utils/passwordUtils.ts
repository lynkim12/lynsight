// 비밀번호 암호화 유틸리티

// 간단한 해시 함수 (실제 프로덕션에서는 더 강력한 암호화 사용 권장)
export const hashPassword = (password: string): string => {
  let hash = 0;
  if (password.length === 0) return hash.toString();
  
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32bit 정수로 변환
  }
  
  return Math.abs(hash).toString(16);
};

// 비밀번호 검증 함수
export const verifyPassword = (inputPassword: string, hashedPassword: string): boolean => {
  const inputHash = hashPassword(inputPassword);
  return inputHash === hashedPassword;
};

// 환경변수에서 비밀번호 가져오기 (보안 강화)
export const getStoredPassword = (): string => {
  // 실제 환경에서는 환경변수나 서버에서 관리하는 것을 권장
  const storedHash = "a1b2c3d4"; // 예시 해시값
  return storedHash;
}; 