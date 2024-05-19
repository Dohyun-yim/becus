import React from "react";
import styles from "./SearchCus.module.css";

const SearchCus = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.cusSearch}>
      <input
        className={styles.cusSearchInput}
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchCus;
