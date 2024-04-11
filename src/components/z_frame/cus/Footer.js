import styles from "./Footer.module.css";
import Container from "./Container";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.info}>
          <li>에스엘기업</li>
          <li>대표 | 정연선 </li>
          <li>본사 | 인천광역시 남동구 만월로 26(간석동) </li>
          <li>사업자번호 | 139-06-70825</li>
          <li>대표 번호 | TEL. 032-525-0216~7 </li>
          <li>운영 시간 | 평일 08:30-18:30</li>
          <li>E-mail | slfood0216@naver.com</li>
        </ul>
      </Container>
    </div>
  );
}

export default Footer;
