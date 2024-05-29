import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserMenu.module.css";
// import useStoredUserInfo from "../../../lib/localStorage";
import Logout from "../../../pages/Logout";

const UserMenu = ({ Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const userInfo = setTimeout(useStoredUserInfo, 1000);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    // localStorage에서 사용자 정보를 가져옴
    const storedUserInfo = localStorage.getItem("customerInfo");
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={Icon} alt="사용자 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          {userInfo ? (
            <>
              <Link to="./mypage">
                <li>마이페이지</li>
              </Link>
              <li>
                <Logout />
              </li>
            </>
          ) : (
            <Link to="/cus/login">
              <li>로그인</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
