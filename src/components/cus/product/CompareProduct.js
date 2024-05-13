import React, { useState } from "react";
import styles from "./CompareProduct.module.css";
import products from "../../../mockdata/ProductMock.json";

function CompareProduct() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (product) => {
    if (selectedProducts.find((p) => p.pk === product.pk)) {
      setSelectedProducts((prev) => prev.filter((p) => p.pk !== product.pk));
    } else {
      if (selectedProducts.length < 2) {
        setSelectedProducts((prev) => [...prev, product]);
      }
    }
  };

  return (
    <div className={styles.compareContainer}>
      <h1>제품 비교</h1>
      <div className={styles.productButtonsContainer}>
        {products.map((product) => (
          <button
            key={product.pk}
            onClick={() => handleSelectProduct(product)}
            className={`${styles.productButton} ${
              selectedProducts.find((p) => p.pk === product.pk)
                ? styles.selected
                : ""
            }`}
          >
            {product.fields.name}
          </button>
        ))}
      </div>
      {selectedProducts.length === 2 && (
        <table className={styles.productComparisonTable}>
          <thead>
            <tr>
              {selectedProducts.map((product) => (
                <th key={product.pk}>{product.fields.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>무게</td>
              {selectedProducts.map((product) => (
                <td key={product.pk}>{product.fields.net_weight}</td>
              ))}
            </tr>
            <tr>
              <td>크기</td>
              {selectedProducts.map((product) => (
                <td key={product.pk}>{product.fields.dimension}</td>
              ))}
            </tr>
            {/* 다른 제품 정보도 필요한 경우 여기에 추가 */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CompareProduct;
