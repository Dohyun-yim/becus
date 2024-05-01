import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();

  // 현재 url에서 code 부분 추출
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const state = params.get("state");
  console.log(code);
  console.log(state);

  axios.defaults.withCredentials = true;
  const handleLoginPost = async (code, state) => {
    try {
      const res = await axios.get(
        `http://34.64.53.159:8000/api/v1/user/naver/callback?code=${code}&state=${state}`
      );
      console.log(res);
      // 로그인 성공 후 메인 페이지로 이동
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code, state);
    } else {
      console.log("로그인 재시도하세요.");
    }
  }, [code, state, navigate]);

  return <h2>로그인중임</h2>;
};

export default LoadingPage;
