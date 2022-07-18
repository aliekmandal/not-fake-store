import React from "react";
import "./sliderCard.css";
import Card from "@mui/material/Card";
import { CardActionArea, Typography } from "@mui/material";

export default function SimilarCard({
  values,
  productCat,
  curCat,
  productTitle,
  curTtile,
}) {
  console.log(values);

  if (productCat == curCat) {
    if (1) {
      return (
        <div className="product-card">
          <CardActionArea href={`/product/${values.id}`}>
            <Card sx={{ maxWidth: 200 }}>
              <img className="product-image" src={values.image} alt="" />
              <text className="price-text">$ {values.price}</text>
            </Card>
          </CardActionArea>
        </div>
      );
    }
  }
}
