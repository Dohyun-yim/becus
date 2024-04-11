import React from "react";
import "./AsPage.module.css";

import TitleBasic from "../../components/man/TitleBasic";
import MiddleBoxAs from "../../components/man/as/MiddleBoxAs";
import TableAs from "../../components/man/as/TableAs";

import ManAsImg from "../../assets/man/as_navy.png";

const AsPage = () => {
  return (
    <div className="allas">
      <div className="topas">
        <TitleBasic imgSrc={ManAsImg} title="A/S 수리 현황 관리" />
      </div>

      <div className="middleas">
        <MiddleBoxAs />
      </div>

      <div className="bottomas">
        <TableAs />
      </div>
    </div>
  );
};

export default AsPage;
