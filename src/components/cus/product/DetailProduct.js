import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailProduct.module.css";
import axiosInstance from "../../../lib/axios";

function DetailProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDetailProduct = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/product/${id}`);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product detail:", error);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
  }, [id]);

  if (!product) {
    return <div>상품이 없습니다!</div>;
  }

  const handleOrderClick = () => {
    navigate("/cus/order", {
      state: { productPk: product.id, productId: product.p_number },
    });
  };

  const handleProductTalkClick = () => {
    navigate("/cus/producttalk", {
      state: { productPk: product.id, productId: product.p_number },
    });
  };

  const handleCompareClick = () => {
    navigate(`/cus/compare/${product.id}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const getYouTubeEmbedUrl = (url) => {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1];
    } else if (url.includes("youtube.com")) {
      videoId = url.split("v=")[1];
      const ampersandPosition = videoId.indexOf("&");
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    }
    return videoId;
  };

  return (
    <div className={styles.DetailproductContainer}>
      <div className={styles.DetailcontentContainer}>
        <div className={styles.DetailproductImageContainer}>
          <img
            className={styles.DetailproductImage}
            src={product.p_picture}
            alt={product.p_name}
          />
        </div>
        <div className={styles.DetailproductInfo}>
          <div className={styles.DetailproductName}>
            <h1>{product.p_name}</h1>
            <h2>{product.p_number}</h2>
          </div>
          <p className={styles.DetailproductDescription}>{product.p_content}</p>
          <table className={styles.productDetailsTable}>
            <tbody>
              <tr>
                <th>DIMENSION</th>
                <td>{product.p_dimension}</td>
              </tr>
              <tr>
                <th>기계 중량</th>
                <td>{product.p_netweight}</td>
              </tr>
              <tr>
                <th>처리 능력</th>
                <td>{product.p_capacity}</td>
              </tr>
            </tbody>
          </table>
          {product.p_video && (
            <div className={styles.DetailproductVideo}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${getYouTubeEmbedUrl(
                  product.p_video
                )}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
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
