import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Container from "./Container";
import UserMenu from "../total/UserMenu";

import logoImg from "../../../assets/logo/logo_horizontal.png";
import personIcon from "../../../assets/navigation/icon_cus.png";
import chatbotIcon from "../../../assets/logo/chatbotIcon.png";

function Nav() {
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
            <Link to="/cus/rag" className={styles.chatbotLink}>
              <img src={chatbotIcon} alt="Chatbot" />
              <span>무엇이든 물어보세요!</span>
            </Link>
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
