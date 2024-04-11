import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CusDetailsPage.module.css";

import TitleSub from "../../../components/man/TitleSub";
import InfoCus from "../../../components/man/cus/InfoCus";
import CallCus from "../../../components/man/cus/CallCus";
import ListCus from "../../../components/man/cus/ListCus";

import ManCusImg from "../../../assets/man/cus_navy.png";

import mockDataCus from "../../../mockdata/mockCus.json";

const CusDetailsPage = () => {
  // URL에서 고객의 ID를 가져오기 위해 useParams 훅 사용
  const { id } = useParams();
  // 고객의 세부 정보를 저장할 상태
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    // 여기서 고객의 세부 정보를 가져오는 API 호출 또는 데이터 처리를 수행할 수 있습니다.
    // 여기서는 mockDataCus에서 고객의 세부 정보를 찾아와서 설정합니다.
    const selectedCustomer = mockDataCus.find(
      (customer) => customer.id === parseInt(id)
    );

    setCustomerDetails(selectedCustomer);
  }, [id]); // customerId가 변경될 때마다 실행됩니다.

  // 만약 고객의 세부 정보가 없다면 로딩 상태를 표시할 수 있습니다.
  if (!customerDetails) {
    return <div className={styles.allcusone}>세부 정보가 없습니다..</div>;
  }

  return (
    <div className={styles.allcusone}>
      <div className={styles.topcusone}>
        <TitleSub imgSrc={ManCusImg} title="고객 상세페이지" />
      </div>
      <div className={styles.middlecusone}>
        <div className={styles.middletitlecusone}>
          {customerDetails.name} 고객님 {/* 고객의 이름을 표시 */}
        </div>
        <div className={styles.middlecontentscusone}></div>
        <InfoCus
          customerId={customerDetails.id}
          email={customerDetails.email}
          phone={customerDetails.phone}
        />
        <CallCus phone={customerDetails.phone} />{" "}
        {/* CallCus 컴포넌트를 렌더링하여 고객의 통화 리스트 표시 */}
      </div>
      <div className={styles.bottomcusone}></div>
    </div>
  );
};

export default CusDetailsPage;
