import React from "react";
import Form from "../Form";
import { useLocation } from "react-router-dom";
function AsFormWithLocation({
  selectedProduct,
  onSubmit,
  loading,
  message,
  repairType,
}) {
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
      label: "연락처 (010-xxxx-xxxx)",
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
      defaultValue: selectedProduct.p_number,
    },
    {
      id: "r_type",
      name: "r_type",
      label: "수리유형",
      type: "select",
      required: true,
      options: ["기계 멈춤 현상", "부품 마모/손상", "기계 오작동", "기타"],
      defaultValue: repairType,
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
        onSubmit={(formData) => {
          console.log("제출된 폼 데이터:", formData); // 제출된 폼 데이터 출력
          onSubmit(formData);
        }}
      />
    </div>
  );
}

export default AsFormWithLocation;
