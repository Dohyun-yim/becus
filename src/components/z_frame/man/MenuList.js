import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuList.module.css";
import { Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  ToolOutlined,
  UnorderedListOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const MenuList = () => {
  return (
    <Menu theme="dark" mode="inline" className={styles.menu_bar}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/manager" style={{ textDecoration: "none" }}>
          HOME
        </Link>
      </Menu.Item>
      <Menu.Item key="cus" icon={<TeamOutlined />}>
        <Link to="/manager/cus" style={{ textDecoration: "none" }}>
          고객관리
        </Link>
      </Menu.Item>
      <Menu.Item key="as" icon={<ToolOutlined />}>
        <Link to="/manager/as" style={{ textDecoration: "none" }}>
          수리 현황
        </Link>
      </Menu.Item>
      <Menu.Item key="talk" icon={<UnorderedListOutlined />}>
        <Link to="/manager/talk" style={{ textDecoration: "none" }}>
          문의 조회
        </Link>
      </Menu.Item>
      <Menu.SubMenu key="call" icon={<PhoneOutlined />} title="통화">
        <Menu.Item key="call">
          <Link to="/manager/call" style={{ textDecoration: "none" }}>
            통화 목록 조회
          </Link>
        </Menu.Item>
        <Menu.Item key="callmiss">
          {" "}
          <Link to="/manager/callmiss" style={{ textDecoration: "none" }}>
            부재중 통화
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuList;
