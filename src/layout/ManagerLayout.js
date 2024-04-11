import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import MenuList from "../components/z_frame/man/MenuList";
import styles from "./ManagerLayout.module.css";
import logo from "../assets/logo/logo_horizontal_white.png";

import UserMenu from "../components/z_frame/total/UserMenu";
import SearchMan from "../components/z_frame/man/SearchMan";
import ManagerIcon from "../assets/navigation/icon_man.png";

const { Header, Sider, Content, Footer } = Layout;

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

function ManagerLayout() {
  return (
    <Layout>
      <Sider className={styles.sidebar}>
        <Logo />
        <MenuList />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <SearchMan />
          <UserMenu
            Icon={ManagerIcon}
            style={{ width: "100px", height: "100px" }}
          />
        </Header>
        <Content>
          <Outlet className={styles.content} />
        </Content>
        <Footer className={styles.footer}></Footer>
      </Layout>
    </Layout>
  );
}

export default ManagerLayout;

//<h2>This is ManagerLayout Footer</h2> <div> 안에
