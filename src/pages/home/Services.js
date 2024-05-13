import React from "react";
import "./styles.css";
const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">서비스 소개</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-telephone-plus-fill fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">부재중 통화 관리</h3>
              <p className="text-muted mb-0">Manage missed calls</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-telephone-inbound-fill fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">수신 통화 목록 관리</h3>
              <p className="text-muted mb-0">Manage incoming call lists</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-people-fill fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">고객 관리</h3>
              <p className="text-muted mb-0">Customer Management</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-display fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">모니터링</h3>
              <p className="text-muted mb-0">Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;