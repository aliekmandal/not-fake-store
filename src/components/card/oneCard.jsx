import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { CardActionArea, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import "./oneCard.css";
import { Button } from '@material-ui/core';
import { Rating } from '@mui/material';
import { Chip } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';
import { containerClasses } from '@mui/system';


export default function oneCard({values}) {
  const uri = "/products/";
  const url = uri.concat(values.id);
  return (
    <div className="product-card" >
    <CardActionArea href = {url}>
    <Card sx={{ maxWidth: 345 }}>
    {/* <CardMedia
        className = "product-image"
        component="img"
        height="194"
        image={values.image}
        alt="Paella dish"
        sx = {{height : 200}}
      /> */}
      <img className = "product-image" src = {values.image} alt = ""/>
      
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
