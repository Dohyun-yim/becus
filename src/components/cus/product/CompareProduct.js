import React, { useState } from "react";
import products from "../../../mockdata/ProductMock.json";

function CompareProduct() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (product) => {
    if (selectedProducts.find((p) => p.pk === product.id)) {
      setSelectedProducts((prev) => prev.filter((p) => p.pk !== product.pk));
    } else {
      if (selectedProducts.length < 2) {
        setSelectedProducts((prev) => [...prev, product]);
      }
    }
  };

  return (
    <div>
      <h1>제품 비교</h1>
      <div>
        {products.map((product) => (
          <button
            key={product.pk}
            onClick={() => handleSelectProduct(product)}
            style={{
              backgroundColor: selectedProducts.find((p) => p.pk === product.pk)
                ? "lightblue"
                : "gray",
            }}
          >
            {product.fields.name}
          </button>
        ))}
      </div>
      {selectedProducts.length === 2 && (
        <table>
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
                <td key={product.pk}>{product.fields.dimension}</td>
              ))}
            </tr>
            <tr>
              <td>dimension</td>
              {selectedProducts.map((product) => (
                <td key={product.pk}>{product.fields.dimension}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CompareProduct;
