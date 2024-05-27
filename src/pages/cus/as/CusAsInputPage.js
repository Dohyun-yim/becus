import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectProduct from "../../../components/cus/as/SelectProduct";
import styles from "./CusAsInputPage.module.css";
import AsForm from "../../../components/cus/as/AsForm";

function CusAsInputPage() {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [repairType, setRepairType] = useState("");
  const navigate = useNavigate();

  const goToStep2 = (product) => {
    setSelectedProduct(product);
    setStep(2);
  };

  const goToStep3 = () => {
    setStep(3);
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
          <p className={styles.cusAsInputSteptitle}>
            수리하실 상품을 선택해주세요!
          </p>
          <SelectProduct goToStep2={goToStep2} />
        </div>
      )}
      {step === 2 && selectedProduct && (
        <div className={styles.cusAsInputStep}>
          <div className={styles.productInfo}>
            <img
              src={selectedProduct.p_picture}
              alt={selectedProduct.p_name}
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <p className={styles.productName}>{selectedProduct.p_name}</p>
              <p className={styles.productNumber}>{selectedProduct.p_number}</p>
            </div>
          </div>
          <hr className={styles.divider} />
          <label>
            어떤 유형의 수리가 필요하신가요?
            <select
              value={repairType}
              onChange={(e) => setRepairType(e.target.value)}
              className={styles.cusAsInputSelect}
            >
              <option value="">선택하세요</option>
              <option value="기계 멈춤 현상">기계 멈춤 현상</option>
              <option value="부품 마모/손상">부품 마모/손상</option>
              <option value="기계 오작동">기계 오작동</option>
              <option value="기타">기타</option>
            </select>
          </label>
          <div className={styles.buttons}>
            <button
              onClick={goBack}
              className={`${styles.cusAsInputButton} ${styles.cusAsInputBackButton}`}
            >
              이전
            </button>
            <button
              onClick={goToStep3}
              disabled={!repairType}
              className={styles.cusAsInputButton}
            >
              A/S 수리 요청서 작성
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <AsForm selectedProduct={selectedProduct} repairType={repairType} />
      )}
    </div>
  );
}

export default CusAsInputPage;
