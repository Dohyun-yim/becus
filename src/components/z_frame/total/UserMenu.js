import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserMenu.module.css";

function UserMenu({ Icon }) {
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
          <Link to="/mypage">
            <li>마이페이지</li>
          </Link>
          <Link to="/login">
            <li>로그인</li>
          </Link>
          <li className={styles.disabled}>로그아웃</li>
        </ul>
      )}
    </div>
  );
}
//나중에 로그인 성립시 disabled 스타일 삽입 가능 (조건절로!)
export default UserMenu;
