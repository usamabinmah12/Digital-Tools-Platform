import React from "react";
import Product from "./Product";

const Products = ({data , carts  ,   setCarts}) => {

  return (
    <div  className="container mx-auto grid  grid-cols-3 gap-[100px]">
        {
            data.map(product =>  <Product product={product}
            carts  = {carts}
            setCarts  =  {setCarts}
            ></Product>)
        }
        
    </div>
  );
};

export default Products;
