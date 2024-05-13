import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ManMainPage.module.css";

import ManCusImg from "../../assets/man/cus_navy.png";
import ManAsImg from "../../assets/man/as_navy.png";
import ManTalkImg from "../../assets/man/talk_navy.png";
import CusImg from "../../assets/man/cus_gray.png";
import Widget from "../../components/man/main/Widget";
import Boxcall from "../../components/man/main/Boxcall";
import Boxdashboard from "../../components/man/main/Boxdashboard";
import Boxsetting from "../../components/man/main/Boxsetting";

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
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.widgets}>
          <Link to="/manager/cus">
            <Widget
              className={styles.widget}
              imgSrc={ManCusImg}
              title="고객관리"
              smalltitle1="신규 고객"
              num1="10"
              smalltitle2="전체 고객"
              num2="500"
            />
          </Link>
          <Link to="/manager/as">
            <Widget
              className={styles.widget}
              imgSrc={ManAsImg}
              title="A/S 현황"
              smalltitle1="미 처리"
              num1={asCounts.pending}
              smalltitle2="현재 진행"
              num2={asCounts.inProgress}
            />
          </Link>
          <Link to="/manager/talk">
            <Widget
              className={styles.widget}
              imgSrc={ManTalkImg}
              title="문의 조회"
              smalltitle1="처리 대기"
              num1="32"
              smalltitle2="처리 진행"
              num2="6"
            />
          </Link>
        </div>
        <div className={styles.box}>
          <Link to="/manager/call">
            <Boxcall />
          </Link>
          <div className={styles.box2}>
            <Boxdashboard />
            <div className={styles.box3}>
              <Link to="/cus">
                <Boxsetting imgSrc={CusImg} word="고객용 페이지" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManMainPage;
