import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../../../mockdata/ProductMock.json";
import styles from "./DetailProduct.module.css";

function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.pk.toString() === id);

  if (!product) {
    return <div>상품이 없습니다!</div>;
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.productImageContainer}>
          <img
            className={styles.productImage}
            src={product.fields.image_url}
            alt={product.fields.name}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productName}>
            <h1>{product.fields.name}</h1>
            <h2>{product.fields.part_number}</h2>
          </div>
          <p className={styles.productDescription}>
            {product.fields.description}
          </p>
          <table className={styles.productDetailsTable}>
            <tbody>
              <tr>
                <th>DIMENSION</th>
                <td>{product.fields.dimension}</td>
              </tr>
              <tr>
                <th>기계 중량</th>
                <td>{product.fields.net_weight}</td>
              </tr>
              <tr>
                <th>처리 능력</th>
                <td>{product.fields.capacity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/order" className={styles.button}>
          견적 문의
        </Link>
        <Link to="/producttalk" className={styles.button}>
          제품 문의
        </Link>
        <button className={styles.buttonCompare}>타 제품과의 비교</button>
        <button className={styles.buttonBack} onClick={() => navigate(-1)}>
          뒤로 가기
        </button>
      </div>
    </div>
  );
}

export default DetailProduct;
