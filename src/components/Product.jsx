import React from 'react';
import Feature from './Feature';

const Product = ({product , carts  , setCarts}) => {
    const addcart  = (product)  => {
        const newAr =  [...carts  , product];
        setCarts(newAr);

    }
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge  badge-warning">{product.name}</span>
          <div className="flex flex-col text-left">
            <h2 className="text-3xl font-bold">{product.tag}</h2>
            <span className="text-xl">${product.price}/mo</span>
          </div>
          {/* className="size-4 me-2 inline-block text-success" */}
        {
            product.features.map(feature => <Feature feature={feature}></Feature>)
        }
          <div className="mt-6">
            <button onClick={()  => addcart(product)}  className="btn btn-primary btn-block">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;