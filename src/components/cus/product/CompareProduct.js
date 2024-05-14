import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CompareProduct.module.css";
import products from "../../../mockdata/ProductMock.json";

import washableIcon from "../../../assets/cus/washableIcon.png";
import freshIcon from "../../../assets/cus/freshIcon.png";
import frozenIcon from "../../../assets/cus/frozenIcon.png";

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
      <h1 className={styles.compareTitle}>제품 비교하기</h1>
      <p className={styles.compareLink}>
        <Link to="/cus/product" className={styles.infoLink}>
          제품 리스트 보러가기 〉
        </Link>
      </p>
      <p className={styles.compareLink}>
        어떤 제품을 선택할지 고민된다면?　
        <Link to="/cus/talk" className={styles.infoLink}>
          담당자와 상담하기
        </Link>
      </p>
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
        <div>
          <table className={styles.productComparisonTable}>
            <thead>
              <tr>
                {selectedProducts.map((product) => (
                  <th className={styles.nameRow} key={product.pk}>
                    <div>
                      <div className={styles.nameInfoRow}>
                        {product.fields.name}
                      </div>
                      <div className={styles.partNumInfoRow}>
                        {product.fields.part_number}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className={styles.imageRow}>
                {selectedProducts.map((product) => (
                  <td key={product.pk}>
                    <div className={styles.imageContainer}>
                      <img
                        src={product.fields.image_url}
                        alt={product.fields.name}
                        className={styles.productImage}
                      />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className={styles.sizeWeightRow}>
                <td colSpan="2">크기 및 무게</td>
              </tr>
              <tr className={styles.sizeWeightInfo}>
                {selectedProducts.map((product) => (
                  <td key={`${product.pk}-dimension`}>
                    {product.fields.dimension}
                  </td>
                ))}
              </tr>
              <tr className={styles.sizeWeightInfo}>
                {selectedProducts.map((product) => (
                  <td key={`${product.pk}-weight`}>
                    {product.fields.net_weight}
                  </td>
                ))}
              </tr>
              <tr className={styles.featureRow}>
                <td colSpan="2">특징</td>
              </tr>
              <tr>
                {selectedProducts.map((product) => (
                  <td
                    key={`${product.pk}-washable-frozen`}
                    className={styles.washableFrozenCell}
                  >
                    {product.fields.washable && (
                      <div className={styles.iconContainer}>
                        <img
                          src={washableIcon}
                          alt="Washable"
                          className={styles.icon}
                        />
                      </div>
                    )}
                    {product.fields.fresh_frozen === "fresh" && (
                      <div className={styles.iconContainer}>
                        <img
                          src={freshIcon}
                          alt="Fresh"
                          className={styles.icon}
                        />
                      </div>
                    )}
                    {product.fields.fresh_frozen === "frozen" && (
                      <div className={styles.iconContainer}>
                        <img
                          src={frozenIcon}
                          alt="Frozen"
                          className={styles.icon}
                        />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
              <tr className={styles.featureInfo}>
                {selectedProducts.map((product) => (
                  <td key={`${product.pk}-feature1`}>
                    {product.fields.feature1}
                  </td>
                ))}
              </tr>
              <tr className={styles.featureInfo}>
                {selectedProducts.map((product) => (
                  <td key={`${product.pk}-feature2`}>
                    {product.fields.feature2}
                  </td>
                ))}
              </tr>
              <tr className={styles.featureInfo}>
                {selectedProducts.map((product) => (
                  <td key={`${product.pk}-feature3`}>
                    {product.fields.feature3}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompareProduct;
