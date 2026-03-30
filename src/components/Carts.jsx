import React, { useState } from 'react';
import Cart from './Cart';
import EmptyCart from './EmptyCart';
import { toast } from 'react-toastify';

const Carts = ({carts    , setCarts  , total  ,  setTotal}) => {
    const  makeClear  = () =>  {
        //const [card   ,  setCard]  = useState([])
        toast('All  items Purchased')
        setCarts([]);
        setTotal(0);
    }
    return (
        <div>
            <div className="">
                <p className='font-bold  text-left'>Your Cart</p>
                {
                    carts.length    ===  0 ?  <EmptyCart></EmptyCart> :    
                    carts.map(cart  =>  <Cart cart= {cart}
                        
                        carts =  {carts}
                        setCarts  = {setCarts}
                        total  = {total}
                        setTotal = {setTotal}
                    ></Cart>)
                }
               {
  carts.length !== 0 ? (
    <>
      <div className="flex justify-between p-6">
        <p>Total</p>
        <p className="text-2xl font-bold">${total}</p>
      </div>

      <div className="flex justify-center">
        <button onClick={() => makeClear()} className="btn btn-primary rounded-[30px]">
          Proceed to Checkout
        </button>
      </div>
    </>
  ) : null
}
                
                
                
            </div>
        </div>
    );
};

export default Carts;