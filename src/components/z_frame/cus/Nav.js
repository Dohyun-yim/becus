import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import Container from "./Container";
import UserMenu from "../total/UserMenu";

import logoImg from "../../../assets/logo/logo_horizontal.png";
import personIcon from "../../../assets/navigation/icon_cus.png";
import chatbotIcon from "../../../assets/logo/chatbotIcon.png";

function Nav() {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate("/cus/rag");
  };

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <img
          src={logoImg}
          alt="Becus Logo"
          style={{ width: "100px", height: "50px" }}
          onClick={() => navigate("/cus")}
          className={styles.logo}
        />
        <ul className={styles.menu}>
          <li>
            <button
              className={styles.chatbotButton}
              onClick={handleChatbotClick}
            >
              <img
                src={chatbotIcon}
                alt="Chatbot"
                className={styles.chatbotIcon}
              />
              <span>무엇이든 물어보세요!</span>
            </button>
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
