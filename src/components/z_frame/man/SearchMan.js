import React, { useState } from "react";
import styles from "./SearchMan.module.css"; // CSS 모듈에서 스타일을 가져옵니다.

import searchIcon from "../../../assets/navigation/search.svg";

const SearchMan = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // 여기에서 검색을 처리하는 로직을 추가할 수 있습니다.
    console.log("검색어:", searchQuery);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSearchSubmit}>
      {" "}
      {/* CSS 모듈에서 가져온 클래스를 적용합니다. */}
      <input
        className={styles.searchInput}
        type="text"
        placeholder="  궁금한 것을 물어보세요."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className={styles.searchButton} type="submit">
        <img src={searchIcon} alt="검색" />
      </button>
    </form>
  );
};

export default SearchMan;
