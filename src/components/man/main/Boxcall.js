import React from "react";
import "./Boxcall.css";

const Box_call = () => {
  return (
    <div className="Box_call">
      <div className="top">
        <h1 className="title-bc">통화</h1>
        <h5 className="more"> ▷ 더보기 </h5>
      </div>

      <div className="middle">
        <div className="middle_top">03.04~03.10 기준</div>

        <div className="middle_bottom">
          <div className="left_middle_bottom">
            <div className="smalltitle">부재중 건</div>
            <div className="smallnum">34</div>
          </div>
          <div className="right_middle_bottom">
            <div className="smalltitle">일 TOTAL</div>
            <div className="smallnum">121</div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <table className="table">
          <th>Name</th>
          <th>분 류</th>
          <th>키워드</th>
          <tr>
            <td>S기업</td>
            <td>A/S</td>
            <td>칼날 교체</td>
          </tr>
          <tr>
            <td>A정육점</td>
            <td>견적</td>
            <td>사과</td>
          </tr>
          <tr>
            <td>임도현</td>
            <td>문의</td>
            <td>세척</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Box_call;
