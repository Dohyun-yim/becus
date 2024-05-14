import React, { useEffect } from "react";
import Form from "../../cus/Form";
import { useLocation } from "react-router-dom";

function AsFormComponent({ selectedProduct, repairType }) {
  useEffect(() => {
    if (selectedProduct) {
      console.log("제품 PK:", selectedProduct.pk);
    }
    console.log("수리 유형:", repairType);
  }, [selectedProduct, repairType]);

  if (!selectedProduct) {
    return null;
  }

  return <AsFormWithLocation selectedProduct={selectedProduct} />;
}

function AsFormWithLocation({ selectedProduct }) {
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
      required: false,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    console.log(data); // 여기서 서버로 데이터를 보낼 수 있습니다.
  };

  return (
    <Form
      title="A/S 수리 요청서 작성"
      fields={formFields}
      onSubmit={handleSubmit}
    />
  );
}

export default AsFormComponent;
