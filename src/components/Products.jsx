import React from "react";
import Product from "./Product";

const Products = ({data}) => {

  return (
    <div  className="grid  grid-cols-3">
        {
            data.map(product =>  <Product product={product}></Product>)
        }
        
    </div>
  );
};

export default Products;
