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

const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: (
      <Link to="/manager" style={{ textDecoration: "none" }}>
        HOME
      </Link>
    ),
  },
  {
    key: "cus",
    icon: <TeamOutlined />,
    label: (
      <Link to="/manager/cus" style={{ textDecoration: "none" }}>
        고객관리
      </Link>
    ),
  },
  {
    key: "as",
    icon: <ToolOutlined />,
    label: (
      <Link to="/manager/as" style={{ textDecoration: "none" }}>
        수리 현황
      </Link>
    ),
  },
  {
    key: "talk",
    icon: <UnorderedListOutlined />,
    label: (
      <Link to="/manager/talk" style={{ textDecoration: "none" }}>
        문의 조회
      </Link>
    ),
  },
  {
    key: "call",
    icon: <PhoneOutlined />,
    label: (
      <Link to="/manager/call" style={{ textDecoration: "none" }}>
        통화
      </Link>
    ),
  },
];

const MenuList = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      className={styles.menu_bar}
      items={items}
    />
  );
};

export default MenuList;
