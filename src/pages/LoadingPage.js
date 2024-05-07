import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const state = params.get("state");

  const handleLoginPost = async (code, state) => {
    try {
      const res = await axios.get(
        `http://34.64.53.159:8000/api/v1/user/naver/callback?code=${code}&state=${state}`
      );
      console.log(res);
      console.log(res.data.user);
      setCustomerInfo(res.data.user); // 고객 정보를 상태로 저장
      // localStorage에 고객 정보와 만료 시간을 저장
      setItemWithExpireTime("customerInfo", res.data.user, 2 * 60 * 60 * 1000); // 2시간 만료시간 설정
      navigate("/connect");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  function setItemWithExpireTime(keyName, keyValue, tts) {
    // localStorage에 저장할 객체
    const obj = {
      value: keyValue,
      expire: Date.now() + tts,
    };
    // 객체를 JSON 문자열로 변환
    const objString = JSON.stringify(obj);
    // setItem
    window.localStorage.setItem(keyName, objString);
    // localStorage에 데이터가 들어갔는지 확인하는 console.log
    console.log(
      `Data stored in localStorage under the key '${keyName}':`,
      keyValue
    );
    console.log(`Expires at:`, new Date(obj.expire).toLocaleString()); // 만료 시간 확인용 로그
  }

  useEffect(() => {
    if (code) {
      handleLoginPost(code, state);
    } else {
      console.log("로그인 코드가 없습니다.");
    }
  }, [code, state, navigate]);

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingPage;
