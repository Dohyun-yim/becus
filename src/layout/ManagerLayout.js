import React from "react";
import styles from "./ManagerLayout.module.css";
import logo from "../assets/logo/logo_horizontal_white.png";
import MenuList from "../components/z_frame/man/MenuList";
import UserMenu from "../components/z_frame/total/UserMenu";
import SearchMan from "../components/z_frame/man/SearchMan";
import ManagerIcon from "../assets/navigation/icon_man.png";
import { Outlet } from "react-router-dom";
import Footer from "../components/z_frame/total/Footer";

function ManagerLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sider}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <MenuList />
      </div>
      <div className={styles.main}>
        <header className={styles.header}>
          <UserMenu Icon={ManagerIcon} />
        </header>
        <main className={styles.content}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default ManagerLayout;
