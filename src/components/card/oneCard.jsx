import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from '@mui/material';
import "./oneCard.css";
import { Rating } from '@mui/material';
import { Chip } from '@mui/material';


export default function oneCard({values}) {
  return (
    <div className="product-card" >
    <CardActionArea href = {`/product/${values.id}`}>
    <Card sx={{ maxWidth: 345 }}>

      <img className = "productImg" src = {values.image} alt = ""/>
      
      <div className="product-title">
      <Typography sx={{ marginLeft : 0 }} >{values.title}</Typography>
      </div>
      <Typography className="product-price" align="right" sx={{ marginRight : 2 }}>${values.price}</Typography>
      <div >
        <Rating name="read-only" value={Number(values.rating.rate)} classname = "product-rating" sx={{ marginLeft : 2 }}readOnly />
        <Typography variant = "overline">({values.rating.count})</Typography>
      </div>     
      {/* <Chip label={values.category} className="product-category" sx={{ marginLeft : 1 , marginBottom : 1}}/> */}
    </Card>
    </CardActionArea>
    </div>
  )
}
