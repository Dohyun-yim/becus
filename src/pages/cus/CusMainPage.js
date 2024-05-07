import OrderImg from "../../assets/cus/order.png";
import AsImg from "../../assets/cus/as.png";
import TalkImg from "../../assets/cus/talk.png";
import { Link } from "react-router-dom";

function Cus_MainPage() {
  return (
    <div>
      <div
        className="pricing-header p-3 pb-md-4 mx-auto text-center"
        style={{ marginTop: "50px" }}
      >
        <h1 className="display-4 fw-normal text-body-emphasis">
          무엇을 도와드릴까요?
        </h1>
        <p className="fs-5 text-body-secondary">
          하단 버튼을 누르시면, 편하게 이용 가능합니다! <br />
          전화 상담 전, 간단히 작성해주시면 전화 상담에 큰 도움이 됩니다!{" "}
        </p>
      </div>

      <div
        className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
        style={{
          paddingRight: "100px",
          paddingLeft: "100px",
        }}
      >
        <div className="col">
          <div
            className="card mb-4 rounded-3 shadow-sm"
            style={{ height: "100%" }}
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">
                {" "}
                <b>견적 문의</b>
              </h4>
            </div>
            <div className="card-body">
              <img
                className="image"
                width="150px"
                height="200px"
                src={OrderImg}
                alt="견적 문의"
              />
              <Link
                to="/order"
                className="w-100 btn btn-lg btn-outline-primary"
              >
                상품 조회/비교 및 견적서 작성
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card mb-4 rounded-3 shadow-sm"
            style={{ height: "100%" }}
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">
                <b>A/S 수리</b>
              </h4>
            </div>
            <div className="card-body">
              <img
                className="image"
                width="150px"
                height="200px"
                src={AsImg}
                alt="A/S 수리"
              />
              <Link to="/as" className="w-100 btn btn-lg btn-outline-primary">
                해결방안 및 수리 요청서 작성
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card mb-4 rounded-3 shadow-sm"
            style={{ height: "100%" }}
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">
                <b>제품 상담</b>
              </h4>
            </div>
            <div className="card-body">
              <img
                className="image"
                width="150px"
                height="200px"
                src={TalkImg}
                alt="제품 상담"
              />
              <Link to="/talk" className="w-100 btn btn-lg btn-outline-primary">
                이용법 및 기타 상담
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cus_MainPage;
