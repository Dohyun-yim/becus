import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CusMyPage.module.css";
import useStoredUserInfo from "../../../lib/localStorage";

const NAVER_CLIENT_ID = "18hzVmnCAGBW303Cl527";
const NAVER_SECRET_KEY = "C3QQ1hrtK3";
const ACCESSTOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1Nzk3NjYxLCJpYXQiOjE3MTU3OTQwNjEsImp0aSI6ImJmZTljZmI1MmRmYjQ0YzI5MWQzNzczZjJjYzMyODY4IiwidXNlcl9pZCI6MX0.AmtKq-u6hmXRt31Bmc1QpmVrLikAMrv75OeMCFYUWzg";

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function CusMyPage() {
  const navigate = useNavigate();

  const handleDocumentView = () => {
    navigate("/cus/mypage/documents");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      // 로컬 스토리지에서 사용자 정보 삭제
      localStorage.clear("customerInfo");

      // 쿠키 삭제
      deleteCookie("access_token");

      // 네이버 로그아웃 요청
      fetch(
        `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_SECRET_KEY}&access_token=${ACCESSTOKEN}&service_provider=NAVER`,
        { method: "POST", mode: "no-cors" }
      )
        .then(() => {
          // 네이버 로그아웃 성공 후, 메인 페이지로 이동
          window.location.href = "/";
          console.log("네이버 로그아웃 및 로그아웃 성공");
        })
        .catch((error) => {
          console.error("네이버 로그아웃 실패:", error);
        });
    }
  };

  const userInfo = useStoredUserInfo();
  console.log(userInfo);

  return (
    <div className={styles.cusMyPage}>
      <div className={styles.cusMyTitle}>내 정보</div>
      <div className={styles.cusMyTop}>
        {userInfo && (
          <>
            <div className={styles.cusName}>{userInfo.name}</div>
            <div className={styles.cusSubInfo}>
              {userInfo.email && <>{userInfo.email}</>}
            </div>
            <div className={styles.cusSubInfo}>{userInfo.phone}</div>
          </>
        )}
      </div>
      <div className={styles.cusMyBottom}>
        <ul>
          <li onClick={handleDocumentView}>작성문서 조회</li>
          <li onClick={handleLogout}>로그아웃</li>
        </ul>
      </div>
    </div>
  );
}

export default CusMyPage;
