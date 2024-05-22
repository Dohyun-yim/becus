import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InfoCus from "./InfoCus";
import styles from "./TableCus.module.css";

const TableCus = ({ customers }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/customers"
          element={
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
                      <Link
                        to={`/customers/${customer.id}`}
                        className={styles.linkMore}
                      >
                        ＞
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        />
        <Route path="/customers/:id" element={<InfoCus />} />
      </Routes>
    </Router>
  );
};

export default TableCus;
