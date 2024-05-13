import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectProduct from "../../../components/cus/as/SelectProduct";
import styles from "./CusAsInputPage.module.css";

function CusAsInputPage() {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [repairType, setRepairType] = useState("");

  const navigate = useNavigate();

  const goToStep2 = (product) => {
    setSelectedProduct(product);
    setStep(2);
  };

  const handleRepairTypeSubmit = () => {
    setStep(3);
  };

  const handleFinalSubmit = () => {
    console.log({ selectedProduct, repairType });
    navigate("/cus/as", { state: { selectedProduct, repairType } });
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.cusAsInputContainer}>
      <h1 className={styles.cusAsInputHeader}>A/S 수리 요청</h1>
      {step === 1 && (
        <div className={styles.cusAsInputStep}>
          <p>상품을 선택하세요:</p>
          <SelectProduct goToStep2={goToStep2} />
        </div>
      )}
      {step === 2 && selectedProduct && (
        <div className={styles.cusAsInputStep}>
          <img
            src={selectedProduct.fields.image_url}
            alt={selectedProduct.fields.name}
          />
          <p>제품명: {selectedProduct.fields.name}</p>
          <p>모델명: {selectedProduct.fields.model}</p>
          <label>
            수리 유형 선택:
            <select
              value={repairType}
              onChange={(e) => setRepairType(e.target.value)}
              className={styles.cusAsInputSelect}
            >
              <option value="">선택하세요</option>
              <option value="stop">기계 멈춤 현상</option>
              <option value="worn">부품 마모/손상</option>
              <option value="error">기계 오작동</option>
              <option value="other">기타</option>
            </select>
          </label>
          <div>
            <button
              onClick={handleRepairTypeSubmit}
              disabled={!repairType}
              className={styles.cusAsInputButton}
            >
              다음
            </button>
            <button
              onClick={goBack}
              className={`${styles.cusAsInputButton} ${styles.cusAsInputBackButton}`}
            >
              이전
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={styles.cusAsInputStep}>
          <button
            onClick={handleFinalSubmit}
            className={styles.cusAsInputButton}
          >
            A/S 수리 요청서 작성
          </button>
          <button
            onClick={goBack}
            className={`${styles.cusAsInputButton} ${styles.cusAsInputBackButton}`}
          >
            이전
          </button>
        </div>
      )}
    </div>
  );
}

export default CusAsInputPage;
