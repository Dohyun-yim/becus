import React, { useState } from "react";
import styles from "./CusMyPageDocs.module.css";

function DocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const [selectedType, setSelectedType] = useState("전체");

  const handleCategoryChange = (type) => {
    setSelectedType(type);
  };

  const handleTotal = () => {
    setSelectedType("전체");
  };

  const filteredDocuments =
    selectedType === "전체"
      ? documents
      : documents.filter((doc) => doc.type === selectedType);

  return (
    <div className={styles.cusDocs}>
      <h1 className={styles.cusDocstitle}>TOTAL</h1>
      <div className={styles.cusDocsButtonContainer}>
        <button className={styles.cusDocsbutton} onClick={handleTotal}>
          TOTAL
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("상담")}
        >
          상담
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("구매")}
        >
          구매
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("AS")}
        >
          AS
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("제품문의")}
        >
          제품문의
        </button>
      </div>
      <table className={styles.cusDocstable}>
        <thead>
          <tr>
            <th className={styles.cusDocsth}>작성일</th>
            <th className={styles.cusDocsth}>문의상품</th>
            <th className={styles.cusDocsth}>상태</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((doc) => (
            <tr key={doc.id}>
              <td className={styles.cusDocstd}>{doc.date}</td>
              <td className={styles.cusDocstd}>{doc.product}</td>
              <td className={styles.cusDocstd}>{doc.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentsPage;
