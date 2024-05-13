import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Nav.module.css";
import Container from "./Container";
import UserMenu from "../total/UserMenu";
import searchBarStyles from "../../../components/z_frame/cus/SearchBar.module.css";
import searchIcon from "../../../assets/navigation/search.svg";

import logoImg from "../../../assets/logo/logo_horizontal.png";
import personIcon from "../../../assets/navigation/icon_cus.png";

function Nav() {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/cus">
          <img
            src={logoImg}
            alt="Becus Logo"
            style={{ width: "100px", height: "50px" }}
          />
        </Link>
        <ul className={styles.menu}>
          <li>
            <form className={searchBarStyles.form}>
              <input
                name="keyword"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="궁금한 것을 찾아보세요."
              ></input>
              <button type="submit">
                <img src={searchIcon} alt="검색" />
              </button>
            </form>
          </li>
          <li>
            <UserMenu Icon={personIcon} />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
