import React from "react";
import "./styles.css";

const Masthead = () => {
  return (
    <section class="page-section" id="contact">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 col-xl-6 text-center">
            <h2 class="mt-0">연락처</h2>
            <hr class="divider" />
            <p class="text-muted mb-5">
              문의사항이 있을 경우 아래의 연락처로 문의주시기 바랍니다.
            </p>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-4 text-center mb-5 mb-lg-0">
            <i class="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+82 (10) 8553-9552</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masthead;
