import { useState, useEffect } from "react";

const useStoredUserInfo = () => {
  // 사용자 정보를 상태로 관리
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // localStorage에서 사용자 정보를 가져옴
    const storedUserInfo = localStorage.getItem("customerInfo");
    if (storedUserInfo) {
      // localStorage에 사용자 정보가 있는 경우
      setUserInfo(JSON.parse(storedUserInfo).value);
    }
  }, []);

  return userInfo;
};

export default useStoredUserInfo;
