import React from "react";
import styles from "./SearchCus.module.css"; // CSS 모듈을 가져옵니다.

const SearchCus = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.cusSearch}>
      <input
        className={styles.cusSearchInput} // CSS 모듈에서 가져온 클래스를 사용합니다.
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchCus;
