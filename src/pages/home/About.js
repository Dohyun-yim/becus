import React from "react";

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">서비스 배경</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              기술적 접근으로 제조업 현장 데이터 기반 프로젝트 진행을 위해 40여
              개의 업체에 컨텍 시도를 했습니다. 하지만 기술로 실제 문제를
              해결하기에 제약이 있었습니다. 그래서 접근 방식을 바꿔 현장에서
              실제로 문제되고 있는 것은 무엇인지 알아보기 위해 이틀 간 현직자
              분과 동행하였습니다. 그 과정에서 비효율적인 고객 응대 및 관리의
              문제점을 발견할 수 있었고 기업에 개선안을 제안했을 때 호의적인
              답변을 얻어 기업과 협력하여 해당 주제로 프로젝트를 진행하게
              되었습니다.
            </p>
            <a className="btn btn-light btn-xl" href="#services">
              서비스 소개
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
