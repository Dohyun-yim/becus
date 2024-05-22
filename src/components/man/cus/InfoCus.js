import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoLine from "./InfoLine";
import styles from "./InfoCus.module.css";

import CusCall from "../../../assets/man/CusCall_navy.png";
import CusEmail from "../../../assets/man/CusEmail_navy.png";
import axiosInstance from "../../../lib/axios";

const InfoCus = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});

  const fetchUserInfo = async () => {
    try {
      const response = await axiosInstance.get(`api/v1/user/${id}`);
      setUserInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [id]);

  return (
    <div className={styles.cusInfo}>
      <div className={styles.cusInfoTop}>
        <div className={styles.cusInfoName}>{userInfo.name} 고객님</div>
        <div className={styles.cusInfoId}>{userInfo.id}</div>
      </div>
      <hr className={styles.separator} /> {/* top과 bottom 사이의 선 */}
      <div className={styles.cusInfoBottom}>
        <InfoLine imgSrc={CusCall} contents={userInfo.phone} />
        <InfoLine imgSrc={CusEmail} contents={userInfo.email} />
      </div>
    </div>
  );
};

export default InfoCus;
