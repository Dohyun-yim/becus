import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CusDetailsPage.module.css";

import TitleSub from "../../../components/man/TitleSub";
import InfoCus from "../../../components/man/cus/InfoCus";
import DocumentCus from "../../../components/man/cus/DocumentCus";

import ManCusImg from "../../../assets/man/cus_navy.png";

//mockdata 가짜 데이터 (나중에 없애줘야 함)
import mockDataCus from "../../../mockdata/mockCus.json";

const CusDetailsPage = () => {
  const { id } = useParams();
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    const selectedCustomer = mockDataCus.find(
      (customer) => customer.id === parseInt(id)
    ); // 고객 id 찾기

    setCustomerDetails(selectedCustomer);
  }, [id]);

  if (!customerDetails) {
    return <div className={styles.allcusone}>고객 정보가 없어요!</div>;
  }

  return (
    <div className={styles.allcusone}>
      <div className={styles.titlecusone}>
        <TitleSub imgSrc={ManCusImg} title="고객 상세페이지" />
      </div>

      <div className={styles.topcusone}>
        <InfoCus
          name={customerDetails.name}
          customerId={customerDetails.id}
          email={customerDetails.email}
          phone={customerDetails.phone}
        />
      </div>
      <div className={styles.bottomcusone}>
        <DocumentCus customerId={id} />
      </div>
    </div>
  );
};

export default CusDetailsPage;
