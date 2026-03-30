import React from 'react';
import Cart from './Cart';

const Carts = ({carts    , setCarts}) => {
    
    return (
        <div>
            <div className="">
                <p className='font-bold  text-left'>Your Cart</p>
                {
                    carts.map(cart  =>  <Cart cart= {cart}
                        setCarts  = {setCarts}
                    ></Cart>)
                }
                
            </div>
        </div>
    );
};

export default Carts;