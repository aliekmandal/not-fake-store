import React from 'react'
import "./sliderCard.css"
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from '@mui/material';



export default function SliderCard({values , productCat , curCat}) {
    console.log(values);
  
    if(productCat == curCat) {return (
    <div className="product-card" >
    <CardActionArea href = {`/product/${values.id}`}>
    <Card sx={{ maxWidth: 200 }}>

      <img className = "product-image" src = {values.image} alt = ""/>
      
      <Typography className="product-price" align="right" sx={{ marginRight : 2 }}>${values.price}</Typography>
    </Card>
    </CardActionArea>
    </div>
  )}
}
