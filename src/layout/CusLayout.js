import { Outlet } from "react-router-dom";
import styles from "./CusLayout.module.css";
import Nav from "../components/z_frame/cus/Nav";
import Footer from "../components/z_frame/cus/Footer";

function CusLayout() {
  return (
    <div>
      <Nav className={styles.nav} />
      <Outlet className={styles.body} />
      <Footer className={styles.footer} />
    </div>
  );
}

export default CusLayout;
