import React from "react";
import "./styles.css";

const HomeHeader = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              고객 응대 서비스를 찾으신다면
              <br />
              BE-CUS를 이용하세요!
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              NLP 모델을 활용한 에스엘기업 고객 응대 시스템
              <br />
              ① 기업 통화 요약 및 분류 모델
              <br />② Knowledge Base를 활용한 QA 시스템
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

export default HomeHeader;
