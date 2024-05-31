import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchMan.module.css";
import searchIcon from "../../../assets/navigation/search.svg";

const SearchMan = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/manager/search-results?query=${searchQuery}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSearchSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="궁금한 것을 물어보세요."
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
