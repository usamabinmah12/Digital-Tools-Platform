import React, { useState } from 'react';
import Feature from './Feature';
import { toast } from 'react-toastify';

const Product = ({product , carts  , setCarts  ,total   , setTotal}) => {
    const addcart  = (product)  => {
        if (carts.find(item => item.id === product.id)) return;
        const newAr =  [...carts  , product];
        let p = total + product.price;
        
        setTotal(p);
        setCarts(newAr);
        toast("Added  to cart Succesfully")

    }
    const [btnCl , setBtnCl] = useState(true);
    return (
        <div className='p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300'>
            <div className="card  bg-base-100 shadow-sm">
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
                btnCl ?    "Buy Now" : "Added  to cart"
              }</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;