import React from "react";
import { Link } from "react-router-dom";
import styles from "./ConnectPage.module.css";
import ManIcon from "../../assets/navigation/icon_man.png";
import CusIcon from "../../assets/man/cus_navy.png";
import useStoredUserInfo from "../../lib/localStorage";

const ConnectPage = () => {
  // localStorage에 저장된 사용자 정보 가져오기
  const userInfo = useStoredUserInfo();
  console.log("connect page", userInfo);

  return (
    <div>
      <div className={styles.topconnect}>
        {/* 사용자 정보가 있는 경우에만 환영 메시지 출력 */}
        {userInfo && userInfo.email && (
          <>
            안녕하십니까 <strong>{userInfo.email}</strong>님, 관리자 페이지로
            넘어가시겠습니까?
          </>
        )}
      </div>

      <div className={styles.bottomconnect}>
        <Link to="/manager" className={styles.leftconnect}>
          <img className={styles.imgconnect} src={ManIcon} alt="관리자" />
          <div className={styles.titleconnect}>관리자</div>
        </Link>
        <Link to="/" className={styles.rightconnect}>
          <img className={styles.imgconnect} src={CusIcon} alt="고객" />
          <div className={styles.titleconnect}>고 객</div>
        </Link>
      </div>
    </div>
  );
};

export default ConnectPage;
