import React from "react";
import { Link } from "react-router-dom";
import styles from "./ConnectPage.module.css";

import ManIcon from "../../assets/navigation/icon_man.png";
import CusIcon from "../../assets/man/cus_navy.png";

const ConnectPage = () => {
  return (
    <div>
      <div className={styles.topconnect}>관리자 페이지로 넘어가시겠습니까?</div>

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
