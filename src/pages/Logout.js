import React from "react";

const Logout = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      // 로컬 스토리지에서 사용자 정보 삭제
      localStorage.clear("customerInfo");
      // 로그아웃 후 메인 페이지로 이동
      window.location.href = "/";
      console.log("로그아웃 성공");
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default Logout;
