import React from "react";
import styles from "./InfoCus.module.css";

const InfoCus = ({ customerId, email, phone }) => {
  return (
    <div>
      <table className={styles.cusInfo}>
        <tbody>
          <tr>
            <td>
              <strong>ID</strong>
            </td>
            <td>{customerId}</td>
          </tr>
          <tr>
            <td>
              <strong>이메일</strong>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>
              <strong>전화번호</strong>
            </td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoCus;
