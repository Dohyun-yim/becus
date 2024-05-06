import React from "react";
import naverLogo from "../assets/login/naver_button.png";
import "./LoginPage.css";

const NAVER_CLIENT_ID = "18hzVmnCAGBW303Cl527";
const REIDRECT_URI = "http://127.0.0.1:3000/callback";
const STATE = "false";
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REIDRECT_URI}`;

// http://34.64.53.159:8000/api/v1/user/naver/callback?code=3qY3kxooc1txH9xLWC

const NaverLogin = () => {
  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <div>
      <a href={NAVER_AUTH_URL} onClick={handleNaverLogin}>
        <img src={naverLogo} alt="네이버 로그인" className="loginImg" />
      </a>
    </div>
  );
};

export default NaverLogin;
