import React, { useState, useEffect , useParams} from 'react'

export default function ProductPage(productId) {

    const [product , setProduct] = useState({});

    useEffect (() => {
        productData();
    }, [])

    const productData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/1");
        console.log(response);
        const jsonData = await response.blob();
        //console.log(jsonData);
        setProduct(jsonData);
        console.log(product);
      }
        
  return (
    <div>
        Title 
        <div>Price</div>
    </div>
    
  );
}
