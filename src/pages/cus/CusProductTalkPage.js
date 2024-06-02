import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../../components/cus/Form";
import axiosInstance from "../../lib/axios";

function ProductTalkPage() {
  const location = useLocation();
  const { productPk, productId } = location.state;
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("전달된 PK:", productId);
  }, [productId]);

  const formFields = [
    {
      id: "pc_name",
      name: "pc_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "pc_phone",
      name: "pc_phone",
      label: "연락처 (010-xxxx-xxxx)",
      type: "text",
      required: true,
    },
    {
      id: "pc_email",
      name: "pc_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "pc_product_id",
      name: "pc_product_id",
      label: "문의상품명",
      type: "text",
      required: true,
      defaultValue: productId,
    },
    {
      id: "pc_content",
      name: "pc_content",
      label: "기타사항",
      type: "textarea",
      required: false,
    },
  ];

  const handleSubmit = async (formData) => {
    console.log(formData);
    const {
      pc_name,
      pc_phone,
      pc_email,
      pc_product_id,
      pc_address,
      pc_content,
      pc_amount,
    } = formData;

    const postData = {
      pc_name,
      pc_phone,
      pc_email,
      pc_product_id: productPk,
      pc_address,
      pc_content,
      pc_amount,
    };
    try {
      // API 호출
      const response = await axiosInstance.post(
        "/api/v1/consult/product",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

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
    <Form
      onSubmit={handleSubmit}
      title="제품 문의"
      fields={formFields}
      productId={productId}
    />
  );
}

export default ProductTalkPage;
