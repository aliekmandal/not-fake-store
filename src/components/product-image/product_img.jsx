//product page (left side) component to view the product image

import React from "react";
import "./product_img.css";

export default function ProductImg({ imageUrl, productTitle }) {
  return (
    <div className="product_image">
      <div>
        <img src={imageUrl} className="img" />
      </div>
    </div>
  );
}
