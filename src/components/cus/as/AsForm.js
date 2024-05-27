import React, { useEffect, useState } from "react";

import axiosInstance from "../../../lib/axios";
import AsFormWithLocation from "./AsFormWithLocation"; // AsFormWithLocation import 추가

function AsFormComponent({ selectedProduct, repairType }) {
  useEffect(() => {
    if (selectedProduct) {
      console.log("제품 PK :", selectedProduct.id);
    }
    console.log("수리 유형:", repairType);
  }, [selectedProduct, repairType]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    setLoading(true);
    const { r_name, r_phone, r_email, r_product_id, r_type, r_content } =
      formData;
    const postData = {
      r_name,
      r_phone,
      r_email,
      r_product_id,
      r_type,
      r_content,
    };

    try {
      const response = await axiosInstance.post("/api/v1/repair/", postData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("서버로부터의 응답:", response.data);
      setMessage("성공적으로 처리되었습니다.");
    } catch (error) {
      console.error("요청 에러 발생:", error);
      setMessage("에러가 발생했습니다: " + error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  if (!selectedProduct) {
    return null;
  }

  return (
    <AsFormWithLocation
      selectedProduct={selectedProduct}
      repairType={repairType}
      onSubmit={handleSubmit}
      loading={loading}
      message={message}
    />
  );
}

export default AsFormComponent;
