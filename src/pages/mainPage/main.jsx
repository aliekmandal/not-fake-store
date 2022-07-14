import { Grid } from "@mui/material";
import * as React from 'react';
import { useEffect , useState} from "react";
import Card from "../../components/card/oneCard";

export default function Main() {
    const [notFake , setNotFake] = React.useState([]);

  useEffect (() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setNotFake(jsonData);
    //console.log(notFake);
  }

  return (
    <>
      <div className="product-div">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {notFake.map((value)=>{
          return (
            <Grid item xs={3}>
              <Card
                values = {value}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
      </>
    
  );
}
