import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CompareProduct.module.css";
import products from "../../../mockdata/ProductMock.json";

import washableIcon from "../../../assets/cus/washableIcon.png";
import freshIcon from "../../../assets/cus/freshIcon.png";
import frozenIcon from "../../../assets/cus/frozenIcon.png";

function CompareProduct() {
  const { id } = useParams();
  const leftProduct = products.find((p) => p.pk.toString() === id);
  const [rightProduct, setRightProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState("");

  useEffect(() => {
    const initialProductId = products[0]?.pk.toString() || "";
    setSelectedProductId(initialProductId);
    const initialProduct = products.find(
      (p) => p.pk.toString() === initialProductId
    );
    setRightProduct(initialProduct);
  }, []);

  const handleSelectProduct = (event) => {
    const selectedProductId = event.target.value;
    setSelectedProductId(selectedProductId);
    const selectedProduct = products.find(
      (p) => p.pk.toString() === selectedProductId
    );
    setRightProduct(selectedProduct);
  };

  if (!leftProduct) {
    return <div>상품을 찾을 수 없습니다!!</div>;
  }

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
      <div className={styles.productDropdownContainer}>
        <label htmlFor="product-select">
          {leftProduct
            ? `${leftProduct.fields.name}(${leftProduct.fields.part_number})과 비교할 제품을 선택 해주세요!`
            : "비교할 제품 선택 해주세요!"}
        </label>
        <select
          id="product-select"
          value={selectedProductId}
          onChange={handleSelectProduct}
        >
          <option value="">--제품을 선택하세요--</option>
          {products.map((product) => (
            <option key={product.pk} value={product.pk}>
              {product.fields.name}({product.fields.part_number})
            </option>
          ))}
        </select>
      </div>
      {rightProduct && (
        <div>
          <table className={styles.productComparisonTable}>
            <thead>
              <tr>
                <th className={styles.nameRow}>
                  <div>
                    <div className={styles.nameInfoRow}>
                      {leftProduct.fields.name}
                    </div>
                    <div className={styles.partNumInfoRow}>
                      {leftProduct.fields.part_number}
                    </div>
                  </div>
                </th>
                <th className={styles.nameRow}>
                  <div>
                    <div className={styles.nameInfoRow}>
                      {rightProduct.fields.name}
                    </div>
                    <div className={styles.partNumInfoRow}>
                      {rightProduct.fields.part_number}
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.imageRow}>
                <td>
                  <div className={styles.imageContainer}>
                    <img
                      src={leftProduct.fields.image_url}
                      alt={leftProduct.fields.name}
                      className={styles.productImage}
                    />
                  </div>
                </td>
                <td>
                  <div className={styles.imageContainer}>
                    <img
                      src={rightProduct.fields.image_url}
                      alt={rightProduct.fields.name}
                      className={styles.productImage}
                    />
                  </div>
                </td>
              </tr>
              <tr className={styles.sizeWeightRow}>
                <td colSpan="2">크기 및 무게</td>
              </tr>
              <tr className={styles.sizeWeightInfo}>
                <td>{leftProduct.fields.dimension}</td>
                <td>{rightProduct.fields.dimension}</td>
              </tr>
              <tr className={styles.sizeWeightInfo}>
                <td>{leftProduct.fields.net_weight}</td>
                <td>{rightProduct.fields.net_weight}</td>
              </tr>
              <tr className={styles.featureRow}>
                <td colSpan="2">특징</td>
              </tr>
              <tr>
                <td className={styles.washableFrozenCell}>
                  {leftProduct.fields.washable && (
                    <div className={styles.iconContainer}>
                      <img
                        src={washableIcon}
                        alt="Washable"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {leftProduct.fields.fresh_frozen === "fresh" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={freshIcon}
                        alt="Fresh"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {leftProduct.fields.fresh_frozen === "frozen" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={frozenIcon}
                        alt="Frozen"
                        className={styles.icon}
                      />
                    </div>
                  )}
                </td>
                <td className={styles.washableFrozenCell}>
                  {rightProduct.fields.washable && (
                    <div className={styles.iconContainer}>
                      <img
                        src={washableIcon}
                        alt="Washable"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {rightProduct.fields.fresh_frozen === "fresh" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={freshIcon}
                        alt="Fresh"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {rightProduct.fields.fresh_frozen === "frozen" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={frozenIcon}
                        alt="Frozen"
                        className={styles.icon}
                      />
                    </div>
                  )}
                </td>
              </tr>
              <tr className={styles.featureInfo}>
                <td>{leftProduct.fields.feature1}</td>
                <td>{rightProduct.fields.feature1}</td>
              </tr>
              <tr className={styles.featureInfo}>
                <td>{leftProduct.fields.feature2}</td>
                <td>{rightProduct.fields.feature2}</td>
              </tr>
              <tr className={styles.featureInfo}>
                <td>{leftProduct.fields.feature3}</td>
                <td>{rightProduct.fields.feature3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompareProduct;
