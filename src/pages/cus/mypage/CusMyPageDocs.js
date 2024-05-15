import React, { useState } from "react";
import styles from "./CusMyPageDocs.module.css";

const documentsData = [
  {
    id: 1,
    type: "견적서 문의",
    date: "2024-04-01",
    product: "육절기",
    status: "요청 대기",
  },
  {
    id: 2,
    type: "AS 수리 문의",
    date: "2024-04-02",
    product: "민서기",
    status: "요청 수락",
  },
  {
    id: 3,
    type: "제품 문의",
    date: "2024-04-03",
    product: "파인애플 절단기",
    status: "처리 완료",
  },
];

function DocumentsPage() {
  const [documents, setDocuments] = useState(documentsData);
  const [selectedType, setSelectedType] = useState("전체");

  const handleCategoryChange = (type) => {
    setSelectedType(type);
  };

  const filteredDocuments =
    selectedType === "전체"
      ? documents
      : documents.filter((doc) => doc.type === selectedType);

  return (
    <div className={styles.cusDocs}>
      <h1 className={styles.cusDocstitle}>TOTAL</h1>
      <div className={styles.cusDocsButtonContainer}>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("전 체")}
        >
          전체
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("견적서 문의")}
        >
          견적서 문의
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("AS 수리 문의")}
        >
          AS 수리 문의
        </button>
        <button
          className={styles.cusDocsbutton}
          onClick={() => handleCategoryChange("제품 문의")}
        >
          제품 문의
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
