import React, { useState, useEffect } from "react";
import styles from "./CusPage.module.css";

import TitleBasic from "../../../components/man/TitleBasic";
import SearchCus from "../../../components/man/cus/SearchCus";
import TableCus from "../../../components/man/cus/TableCus";

import ManCusImg from "../../../assets/man/cus_navy.png";
import axiosInstance from "../../../lib/axios";

const CusPage = () => {
  const [nameSearchTerm, setNameSearchTerm] = useState("");
  const [phoneSearchTerm, setPhoneSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);

  const fetchUserListData = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/user");
      setCustomers(response.data);
      console.log("Fetched customers:", response.data);
    } catch (error) {
      console.error("Error fetching user list data: ", error);
    }
  };

  useEffect(() => {
    fetchUserListData();
  }, []);

  // 이름에 대한 검색 결과 필터링 함수
  const nameSearchFilter = (customer) => {
    return customer.name.toLowerCase().includes(nameSearchTerm.toLowerCase());
  };

  // 전화번호에 대한 검색 결과 필터링 함수
  const phoneSearchFilter = (customer) => {
    return customer.phone.includes(phoneSearchTerm);
  };

  // customers가 배열인지 확인하고 필터링을 수행
  const filteredCustomers = Array.isArray(customers)
    ? customers.filter(nameSearchFilter).filter(phoneSearchFilter)
    : [];

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
          {Array.isArray(customers) && customers.length > 0 ? (
            <TableCus customers={filteredCustomers} />
          ) : (
            <p>로딩 중...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CusPage;
