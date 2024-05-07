import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CusDetailsPage.module.css";

//컴포넌트
import TitleSub from "../../../components/man/TitleSub"; // 상단 타이틀
import InfoCus from "../../../components/man/cus/InfoCus"; // 고객 정보
import CallCus from "../../../components/man/cus/CallCus"; // 통화 목록
import DocumentCus from "../../../components/man/cus/DocumentCus";

import ManCusImg from "../../../assets/man/cus_navy.png"; // 이미지 파일 임포트

//mockdata 가짜 데이터 (나중에 없애줘야 함)
import mockDataCus from "../../../mockdata/mockCus.json"; // 가짜 고객 데이터
import mockCallData from "../../../mockdata/a_mock_sample.json"; // 가짜 통화 데이터

const CusDetailsPage = () => {
  const { id } = useParams(); // URL에서 고객 ID 파라미터 추출
  const [customerDetails, setCustomerDetails] = useState(null); // 고객 상세 정보 상태
  const [matchingCalls, setMatchingCalls] = useState([]); // 일치하는 통화 내역 상태

  useEffect(() => {
    const selectedCustomer = mockDataCus.find(
      (customer) => customer.id === parseInt(id)
    ); // mockDataCus에서 해당 ID의 고객 찾기

    setCustomerDetails(selectedCustomer); // 고객 정보 설정

    const calls = mockCallData.filter((call) => {
      // mockCallData에서 해당 고객의 통화 내역 필터링
      return call.name === selectedCustomer.phone; // 전화번호가 일치하는 경우에만 반환
    });

    setMatchingCalls(calls); // 일치하는 통화 내역 설정
  }, [id]); // id가 변경될 때마다 실행

  if (!customerDetails) {
    // 고객 정보가 없는 경우
    return <div className={styles.allcusone}>고객 정보가 없어요!</div>; // 세부 정보 없음 표시
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
      {/*고객 정보 일치 전화 내역*/}
      <div className={styles.middlecusone}>
        <CallCus rowData={matchingCalls} />
      </div>

      {/*고객 정보 일치 문서 내역*/}
      <div className={styles.bottomcusone}></div>
      <DocumentCus customerId={id} />
    </div>
  );
};

export default CusDetailsPage;
