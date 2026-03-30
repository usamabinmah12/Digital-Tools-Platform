import React from 'react';
import  img  from  '../assets/products/shopping-cart.png'
const EmptyCart = () => {
    return (
        <div  className="flex flex-col justify-center items-center">
            <div  className='my-7'>
                
                <div className="mx-12">
                        <img className='align-middle' width={30} src={img} alt="" />
                </div>
                <p className='my-6 font-bold'>Your Cart is empty</p>
                
            </div>
        </div>
    );
};

export default EmptyCart;