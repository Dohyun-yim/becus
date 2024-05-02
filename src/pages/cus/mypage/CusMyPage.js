import React from "react";
import { Link } from "react-router-dom";
import styles from "./CusMyPage.module.css";

function CusMyPage() {
  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      console.log("로그아웃 성공");
    }
  };

  const handleUnsubscribe = () => {
    const confirmUnsubscribe = window.confirm("회원 탈퇴를 진행하시겠습니까?");
    if (confirmUnsubscribe) {
      console.log("회원 탈퇴 성공.");
    }
  };

  return (
    <div className={styles.cusMyPage}>
      <div className={styles.cusMyTitle}>내 정보</div>
      <div className={styles.cusMyTop}>
        <div className={styles.cusName}>A기업</div>
        <div className={styles.cusSubInfo}>aaaaa@example.com</div>
        <div className={styles.cusSubInfo}>010-1234-5678</div>
      </div>
      <div className={styles.cusMyBottom}>
        <ul>
          <li>
            <Link to="/mypage/documents">작성문서 조회</Link>
          </li>
          <li>회원정보 수정</li>
          <li onClick={handleLogout}>로그아웃</li>
          <li onClick={handleUnsubscribe}>회원 탈퇴</li>
        </ul>
      </div>
    </div>
  );
}

export default CusMyPage;
