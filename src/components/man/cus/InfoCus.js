import React from "react";
import InfoLine from "./InfoLine";
import styles from "./InfoCus.module.css";

import CusCall from "../../../assets/man/CusCall_navy.png";
import CusEmail from "../../../assets/man/CusEmail_navy.png";

const InfoCus = ({ name, customerId, email, phone }) => {
  return (
    <div className={styles.cusInfo}>
      <div className={styles.cusInfoTop}>
        <div className={styles.cusInfoName}>{name} 고객님</div>
        <div className={styles.cusInfoId}>{customerId}</div>
      </div>
      <hr className={styles.separator} /> {/*top과 bottom 사이의 선 */}
      <div className={styles.cusInfoBottom}>
        <InfoLine imgSrc={CusCall} contents={phone} />
        <InfoLine imgSrc={CusEmail} contents={email} />
      </div>
    </div>
  );
};

export default InfoCus;
