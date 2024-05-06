import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserMenu.module.css";
import useStoredUserInfo from "../../../lib/localStorage";
import Logout from "../../../pages/Logout";

const UserMenu = ({ Icon }) => {
  const userInfo = useStoredUserInfo();
  console.log("usermenu", userInfo);

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

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
                <Logout className={styles.disabled} />
              </li>{" "}
              {/* 로그아웃 버튼*/}
            </>
          ) : (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
