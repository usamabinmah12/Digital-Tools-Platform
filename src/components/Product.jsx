import React, { useState } from 'react';
import Feature from './Feature';

const Product = ({product , carts  , setCarts}) => {
    const addcart  = (product)  => {
        if (carts.find(item => item.id === product.id)) return;
        const newAr =  [...carts  , product];
        setCarts(newAr);

    }
    const [btnCl , setBtnCl] = useState(true);
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
              <img src={product.icon} alt="" />
              <span className="badge  badge-warning">{ product.tag}</span>
          </div>
          
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <span className="text-xl">${product.price}/mo</span>
          </div>
          {/* className="size-4 me-2 inline-block text-success" */}
        {
            product.features.map(feature => <Feature feature={feature}></Feature>)
        }
          <div className="mt-6">
            <button onClick={()  => {addcart(product); setBtnCl(false)}}  className="btn btn-primary btn-block">{
                btnCl ?    "Buy Now" : "You  Buyed  this  Product"
              }</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;