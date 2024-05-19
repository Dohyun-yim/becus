import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ManMainPage.module.css";

import ManCusImg from "../../assets/man/cus_navy.png";
import ManAsImg from "../../assets/man/as_navy.png";
import ManTalkImg from "../../assets/man/talk_navy.png";

import Widget from "../../components/man/main/Widget";
import Boxcall from "../../components/man/main/Boxcall";
import Boxcus from "../../components/man/main/Boxcus";

import asMockData from "../../mockdata/mockAs.json";

const ManMainPage = () => {
  const [asCounts, setAsCounts] = useState({ pending: 0, inProgress: 0 });

  useEffect(() => {
    const pending = asMockData.filter(
      (item) => item.fields.r_status === "요청 대기"
    ).length;
    const inProgress = asMockData.filter(
      (item) => item.fields.r_status === "요청 수락"
    ).length;
    setAsCounts({ pending, inProgress });
  }, []);

  return (
    <div className={styles.managerhome}>
      <div className={styles.managerhomeContainer}>
        <div className={styles.managerwidgets}>
          <Link to="/manager/cus" style={{ textDecoration: "none" }}>
            <Widget
              className={styles.managerwidget}
              imgSrc={ManCusImg}
              title="고객관리"
              smalltitle1="신규 고객"
              num1="10"
              smalltitle2="전체 고객"
              num2="500"
            />
          </Link>
          <Link to="/manager/as" style={{ textDecoration: "none" }}>
            <Widget
              className={styles.managerwidget}
              imgSrc={ManAsImg}
              title="A/S 현황"
              smalltitle1="미 처리"
              num1={asCounts.pending}
              smalltitle2="현재 진행"
              num2={asCounts.inProgress}
            />
          </Link>
          <Link to="/manager/talk" style={{ textDecoration: "none" }}>
            <Widget
              className={styles.managerwidget}
              imgSrc={ManTalkImg}
              title="문의 조회"
              smalltitle1="처리 대기"
              num1="32"
              smalltitle2="처리 진행"
              num2="6"
            />
          </Link>
        </div>
        <div className={styles.managerbox}>
          <Link to="/manager/call" className={styles.managerboxLink}>
            <Boxcall />
          </Link>
          <div className={styles.managerbox2}>
            <Link to="/cus" className={styles.managerboxLink}>
              <Boxcus />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManMainPage;
