//https://fakestore.com/products/ID
//according to the ID of the product showing the details of the product in the product page


import React, { useState, useEffect, useParams } from "react";
import ProductImg from "../../components/product-image/product_img";
import ProductDet from "../../components/product_det/product_det";
import "./product-page.css";

export default function ProductPage({ ids }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${ids}`);
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setProduct(jsonData);
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
      }}
    />
  );
  return (
    <div className="productPage">
      <h1 className="title">{product.title}</h1>
      <ColoredLine color="grey" />
      <div className="product_page">
        <ProductImg productTitle={product.title} imageUrl={product.image} />
        <ProductDet productData={product} />
      </div>
    </div>
  );
}
