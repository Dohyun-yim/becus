import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../../components/cus/Form";

import useStoredUserInfo from "../../lib/localStorage";
import axiosInstance from "../../lib/axios";

function OrderPage() {
  const location = useLocation();
  const { productId } = location.state;

  useEffect(() => {
    console.log("전달된 PK:", productId);
  }, [productId]);

  const formFields = [
    {
      id: "o_name",
      name: "o_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "o_phone",
      name: "o_phone",
      label: "연락처 (010-xxxx-xxxx)",
      type: "text",
      required: true,
    },
    {
      id: "o_email",
      name: "o_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "o_product_id",
      name: "o_product_id",
      label: "상품 품번",

      type: "text",
      required: true,
      defaultValue: productId,
    },
    {
      id: "o_amount",
      name: "o_amount",
      label: "상품 수",
      type: "number",
      required: true,
    },
    {
      id: "o_address",
      name: "o_address",
      label: "주소",
      type: "text",
      required: true,
    },
    {
      id: "o_content",
      name: "o_content",
      label: "기타 요청사항",
      type: "textarea",
      required: false,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    console.log(formData);
    const {
      o_name,
      o_phone,
      o_email,
      o_product_id,
      o_address,
      o_content,
      o_amount,
    } = formData;
    const postData = {
      o_name,
      o_phone,
      o_email,
      o_product_id,
      o_address,
      o_content,
      o_amount,
    };
    try {
      // API 호출
      const response = await axiosInstance.post("/api/v1/order/", postData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      setMessage("성공적으로 처리되었습니다.");
      console.log("서버로부터의 응답:", response.data);
    } catch (error) {
      setMessage("에러가 발생했습니다: " + error.message);
      console.error("요청 에러 발생:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      <Form
        onSubmit={handleSubmit}
        title="견적 요청서 작성"
        fields={formFields}
        productId={productId}
      />
    </div>
  );
}

export default OrderPage;
