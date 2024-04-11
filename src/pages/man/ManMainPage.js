import React from "react";
import { Link } from "react-router-dom";
import "./ManMainPage.css";

import ManCusImg from "../../assets/man/cus_navy.png";
import ManAsImg from "../../assets/man/as_navy.png";
import ManTalkImg from "../../assets/man/talk_navy.png";
import SettingImg from "../../assets/man/setting_gray.png";
import CusImg from "../../assets/man/cus_gray.png";

import Widget from "../../components/man/main/Widget";
import Boxcall from "../../components/man/main/Boxcall";
import Boxdashboard from "../../components/man/main/Boxdashboard";
import Boxsetting from "../../components/man/main/Boxsetting";

const ManMainPage = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <a href="/manager/cus">
            <Widget
              imgSrc={ManCusImg}
              title="고객관리"
              smalltitle1="신규 고객"
              num1="10"
              smalltitle2="전체 고객"
              num2="500"
            />
          </a>
          <a href="/manager/as">
            <Widget
              imgSrc={ManAsImg}
              title="수리 현황"
              smalltitle1="미 처리"
              num1="17"
              smalltitle2="현재 진행"
              num2="21"
            />
          </a>
          <a href="/manager/talk">
            <Widget
              imgSrc={ManTalkImg}
              title="문의 조회"
              smalltitle1="처리 대기"
              num1="32"
              smalltitle2="처리 진행"
              num2="6"
            />
          </a>
        </div>
        <div className="box">
          <a href="/manager/call">
            <Boxcall />{" "}
          </a>
          <div className="box2">
            <Boxdashboard />
            <div className="box3">
              <Link to="/">
                <Boxsetting imgSrc={CusImg} word="고객용 페이지" />
              </Link>
              <Boxsetting imgSrc={SettingImg} word="SETTING 설정" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManMainPage;
