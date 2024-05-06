import React from "react";
import "./LoginPage.css";
import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";

const Login = () => {
  return (
    <div>
      <h1 className="login-title">로그인</h1>
      <p className="login-intro">BE-CUS 홈페이지에 오신 것을 환영합니다</p>
      <NaverLogin />
      <KakaoLogin />
    </div>
  );
};
export default Login;
