import React, { useEffect, useState } from "react";
import Form from "../../cus/Form";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../lib/axios";

function AsFormComponent({ selectedProduct, repairType }) {
  useEffect(() => {
    if (selectedProduct) {
      console.log("제품 PK:", selectedProduct.pk);
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
  if (!selectedProduct) {
    return null;
  }

  return (
    <AsFormWithLocation
      selectedProduct={selectedProduct}
      onSubmit={handleSubmit}
      loading={loading} // 추가
      message={message} // 추가
    />
  );
}

function AsFormWithLocation({ selectedProduct, onSubmit, loading, message }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const partNumber = searchParams.get("partNumber") || "";
  const repairTypeFromUrl = searchParams.get("repairType") || "";

  const formFields = [
    {
      id: "r_name",
      name: "r_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "r_phone",
      name: "r_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "r_email",
      name: "r_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "r_product_id",
      name: "r_product_id",
      label: "수리 상품 품번",
      type: "text",
      required: true,
      defaultValue: partNumber,
    },
    {
      id: "r_type",
      name: "r_type",
      label: "수리유형",
      type: "select",
      required: true,
      options: ["기계 멈춤 현상", "부품 마모/손상", "기계 오작동", "기타"],
      defaultValue: repairTypeFromUrl,
    },
    {
      id: "r_content",
      name: "r_content",
      label: "요청사항",
      type: "textarea",
      required: true,
    },
  ];

  return (
    <div>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      <Form
        title="A/S 수리 요청서 작성"
        fields={formFields}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AsFormComponent;
