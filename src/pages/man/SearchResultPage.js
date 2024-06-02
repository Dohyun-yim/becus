import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TableCallList from "../../components/man/call/TableCallList";
import styles from "./SearchResultPage.module.css";

const SearchResultPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!query) {
          console.error("검색어를 추출하지 못했습니다.");
          return;
        }

        console.log("사용자가 입력한 검색어:", query);

        // URL 인코딩 추가
        const encodedQuery = encodeURIComponent(query);

        // API 요청
        const response = await axios.get(
          `https://api.be-cus.com:8000/api/v1/call/search?query=${encodedQuery}`,
          {
            headers: {
              accept: "application/json",
              "X-CSRFToken":
                "oxOEqDQ0UslqN3REjJNK8gT2woh7pHTivhITIxJ6EvjOgVZjpIaYcGXprWvlXmYV",
            },
            withCredentials: true, // CSRF 토큰을 보내기 위해 필요할 수 있음
          }
        );
        setResults(response.data.data);
      } catch (error) {
        console.error(
          "Error fetching search results:",
          error.response || error.message || error
        );
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className={styles.resultsContainer}>
      <h1>검색 결과</h1>
      {results.length > 0 ? (
        <TableCallList rowData={results} />
      ) : (
        <p>관련 정보가 없습니다!</p>
      )}
    </div>
  );
};

export default SearchResultPage;
