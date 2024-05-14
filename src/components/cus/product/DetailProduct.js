import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../../mockdata/ProductMock.json";
import styles from "./DetailProduct.module.css";

function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.pk.toString() === id);

  if (!product) {
    return <div>상품이 없습니다!</div>;
  }

  const handleOrderClick = () => {
    navigate("/cus/order", { state: { productId: product.pk } });
  };
  const handleProductTalkClick = () => {
    navigate("/cus/producttalk", { state: { productId: product.pk } });
  };

  const handleCompareClick = () => {
    navigate("/cus/compare");
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.DetailproductContainer}>
      <div className={styles.DetailcontentContainer}>
        <div className={styles.DetailproductImageContainer}>
          <img
            className={styles.DetailproductImage}
            src={product.fields.image_url}
            alt={product.fields.name}
          />
        </div>
        <div className={styles.DetailproductInfo}>
          <div className={styles.DetailproductName}>
            <h1>{product.fields.name}</h1>
            <h2>{product.fields.part_number}</h2>
          </div>
          <p className={styles.DetailproductDescription}>
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
      <div className={styles.DetailbuttonContainer}>
        <button className={styles.Detailbutton} onClick={handleOrderClick}>
          견적 문의
        </button>
        <button
          className={styles.Detailbutton}
          onClick={handleProductTalkClick}
        >
          제품 문의
        </button>
        <button
          className={styles.DetailbuttonCompare}
          onClick={handleCompareClick}
        >
          타 제품과의 비교
        </button>
        <button className={styles.DetailbuttonBack} onClick={handleBackClick}>
          뒤로 가기
        </button>
      </div>
    </div>
  );
}

export default DetailProduct;
