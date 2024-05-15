import React from "react";
import { Link } from "react-router-dom";
import styles from "./CusMyPage.module.css";
import useStoredUserInfo from "../../../lib/localStorage";

function CusMyPage() {
  const handleUnsubscribe = () => {
    const confirmUnsubscribe = window.confirm("회원 탈퇴를 진행하시겠습니까?");
    if (confirmUnsubscribe) {
      console.log("회원 탈퇴 성공.");
    }
  };

  const userInfo = useStoredUserInfo();
  console.log(userInfo);

  return (
    <div className={styles.cusMyPage}>
      <div className={styles.cusMyTitle}>내 정보</div>
      <div className={styles.cusMyTop}>
        <div className={styles.cusName}>A기업</div>
        <div className={styles.cusSubInfo}>
          {userInfo && userInfo.email && <>{userInfo.email}</>}
        </div>
        <div className={styles.cusSubInfo}>010-1234-5678</div>
      </div>
      <div className={styles.cusMyBottom}>
        <ul>
          <li>
            <Link to="documents">작성문서 조회</Link>
          </li>
          <li>회원정보 수정</li>
          <li>로그아웃</li>
          <li onClick={handleUnsubscribe}>회원 탈퇴</li>
        </ul>
      </div>
    </div>
  );
}

export default CusMyPage;
