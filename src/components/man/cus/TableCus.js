import React from "react";
import { Link } from "react-router-dom";
import styles from "./TableCus.module.css";

const TableCus = ({ customers }) => {
  return (
    <table className={styles.CusTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>이메일</th>
          <th>전화번호</th>
          <th>더보기</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>
              <Link to={`${customer.id}`} className={styles.linkMore}>
                ＞
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCus;
