import React from "react";
import "./styles.css";

const Masthead = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              고객 관리 서비스를 찾으신다면
              <br />
              BE-CUS를 이용하세요
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              한국외국어대학교 산업경영공학과 캡스톤 프로젝트 NLP를 이용한 고객
              응대 서비스 시스템
              <br />
              통화 목록 관리, 고객 주문, 상담, AS 요청 관리 서비스
            </p>
            <a className="btn btn-primary btn-xl" href="/cus">
              서비스 이용하러 가기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
