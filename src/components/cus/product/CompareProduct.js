import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CompareProduct.module.css";
import axiosInstance from "../../../lib/axios";
import washableIcon from "../../../assets/cus/washableIcon.png";
import freshIcon from "../../../assets/cus/freshIcon.png";
import frozenIcon from "../../../assets/cus/frozenIcon.png";

function CompareProduct() {
  const { id } = useParams();
  const [leftProduct, setLeftProduct] = useState(null);
  const [rightProduct, setRightProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [productOptions, setProductOptions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/product"); // Assuming this endpoint returns an array of products
        const products = response.data;
        setProductOptions(
          products.map((product) => ({
            value: product.id,
            label: `${product.p_name} (${product.p_number})`,
          }))
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const leftResponse = await axiosInstance.get(`/api/v1/product/${id}`);
        setLeftProduct(leftResponse.data);

        const initialProductId = "1"; // or any default product id
        const rightResponse = await axiosInstance.get(
          `/api/v1/product/${initialProductId}`
        );
        setRightProduct(rightResponse.data);

        setSelectedProductId(initialProductId);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSelectProduct = async (event) => {
    const selectedProductId = event.target.value;
    setSelectedProductId(selectedProductId);

    try {
      const rightResponse = await axiosInstance.get(
        `/api/v1/product/${selectedProductId}`
      );
      setRightProduct(rightResponse.data);
    } catch (error) {
      console.error("Error fetching product detail:", error);
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
      <div className={styles.productDropdownContainer}>
        <label htmlFor="product-select">
          {leftProduct
            ? `${leftProduct.p_name} (${leftProduct.p_number})과 비교할 제품을 선택 해주세요!`
            : "비교할 제품 선택 해주세요!"}
        </label>
        <select
          id="product-select"
          value={selectedProductId}
          onChange={handleSelectProduct}
        >
          <option value="">--제품을 선택하세요--</option>
          {productOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
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
                      {leftProduct.p_name}
                    </div>
                    <div className={styles.partNumInfoRow}>
                      {leftProduct.p_number}
                    </div>
                  </div>
                </th>
                <th className={styles.nameRow}>
                  <div>
                    <div className={styles.nameInfoRow}>
                      {rightProduct.p_name}
                    </div>
                    <div className={styles.partNumInfoRow}>
                      {rightProduct.p_number}
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
                      src={leftProduct.p_picture}
                      alt={leftProduct.p_name}
                      className={styles.productImage}
                    />
                  </div>
                </td>
                <td>
                  <div className={styles.imageContainer}>
                    <img
                      src={rightProduct.p_picture}
                      alt={rightProduct.p_name}
                      className={styles.productImage}
                    />
                  </div>
                </td>
              </tr>
              <tr className={styles.sizeWeightRow}>
                <td>크기 및 무게</td>
                <td></td>
              </tr>
              <tr className={styles.sizeWeightInfo}>
                <td>{leftProduct.p_dimension}</td>
                <td>{rightProduct.p_dimension}</td>
              </tr>
              <tr className={styles.sizeWeightInfo}>
                <td>{leftProduct.p_netweight}</td>
                <td>{rightProduct.p_netweight}</td>
              </tr>
              <tr className={styles.featureRow}>
                <td colSpan="2">특징</td>
              </tr>
              <tr className={styles.featureInfo}>
                <td>
                  {leftProduct.p_washable && (
                    <div className={styles.iconContainer}>
                      <img
                        src={washableIcon}
                        alt="Washable"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {leftProduct.p_status === "fresh" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={freshIcon}
                        alt="Fresh"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {leftProduct.p_status === "frozen" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={frozenIcon}
                        alt="Frozen"
                        className={styles.icon}
                      />
                    </div>
                  )}
                </td>
                <td>
                  {rightProduct.p_washable && (
                    <div className={styles.iconContainer}>
                      <img
                        src={washableIcon}
                        alt="Washable"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {rightProduct.p_status === "fresh" && (
                    <div className={styles.iconContainer}>
                      <img
                        src={freshIcon}
                        alt="Fresh"
                        className={styles.icon}
                      />
                    </div>
                  )}
                  {rightProduct.p_status === "frozen" && (
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
                <td>{leftProduct.p_feature1}</td>
                <td>{rightProduct.p_feature1}</td>
              </tr>
              <tr className={styles.featureInfo}>
                <td>{leftProduct.p_feature2}</td>
                <td>{rightProduct.p_feature2}</td>
              </tr>
              <tr className={styles.featureInfo}>
                <td>{leftProduct.p_feature3}</td>
                <td>{rightProduct.p_feature3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompareProduct;
