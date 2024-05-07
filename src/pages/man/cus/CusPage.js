import React, { useState, useEffect } from "react";
import styles from "./CusPage.module.css"; // CSS 파일을 import합니다.

import mockDataCus from "../../../mockdata/mockCus.json";

import TitleBasic from "../../../components/man/TitleBasic";
import SearchCus from "../../../components/man/cus/SearchCus";
import TableCus from "../../../components/man/cus/TableCus";

import ManCusImg from "../../../assets/man/cus_navy.png";

const CusPage = () => {
  const [nameSearchTerm, setNameSearchTerm] = useState("");
  const [phoneSearchTerm, setPhoneSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // 모의 데이터 설정
    setCustomers(mockDataCus);
  }, []);

  // 이름에 대한 검색 결과 필터링 함수
  const nameSearchFilter = (customer) => {
    return customer.name.toLowerCase().includes(nameSearchTerm.toLowerCase());
  };

  // 전화번호에 대한 검색 결과 필터링 함수
  const phoneSearchFilter = (customer) => {
    return customer.phone.includes(phoneSearchTerm);
  };

  return (
    <div className={styles.allcus}>
      <div className={styles.topcus}>
        <TitleBasic imgSrc={ManCusImg} title="고객 정보 조회,관리" />
      </div>
      <div className={styles.bottomcus}>
        <div className={styles.bottomupcus}>
          <SearchCus
            placeholder="이름 검색"
            searchTerm={nameSearchTerm}
            setSearchTerm={setNameSearchTerm}
          />
          <SearchCus
            placeholder="전화번호 검색"
            searchTerm={phoneSearchTerm}
            setSearchTerm={setPhoneSearchTerm}
          />
        </div>

        <div className={styles.bottomdowncus}>
          {/* 각각의 필터링 함수를 적용하여 필터링 */}
          <TableCus
            customers={customers
              .filter(nameSearchFilter)
              .filter(phoneSearchFilter)}
          />
        </div>
      </div>
    </div>
  );
};

export default CusPage;
