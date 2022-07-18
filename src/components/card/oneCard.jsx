import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Typography } from "@mui/material";
import "./oneCard.css";
import { Rating } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default function oneCard({ values }) {
  return (
    <div className="product-card">
      <CardActionArea href={`/product/${values.id}`}>
        <Card sx={{ maxWidth: 345 }}>
          <img className="productImg" src={values.image} alt="" />

          <div className="product-title">
            <p>{values.title}</p>
          </div>

          <p className="productValue">
            <span className="dollar">$</span> {values.price}
          </p>

          <div>
            <Rating
              name="read-only"
              value={Number(values.rating.rate)}
              classname="product-rating"
              sx={{ marginLeft: 2 }}
              readOnly
            />
            <Typography variant="overline">({values.rating.count})</Typography>
          </div>
        </Card>
      </CardActionArea>
    </div>
  );
}
