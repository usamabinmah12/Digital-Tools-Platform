import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart   , carts,   setCarts  ,  total ,setTotal }) => {
    const  removeCart  =   (cart)  =>  {
        let  p  =  total - cart.price;
        setTotal(p);
       const  newAr  = carts.filter(items => items.id !== cart.id)
       toast("Removed from  Cart")
       setCarts(newAr);
    }
  return (
    <div className="my-5">
      <div className="flex  justify-between   bg-amber-50  p-9 rounded-3xl">
        <div className=" flex gap-6 my-6 ">
          <img src={cart.icon} alt="" />
          <div className="w-96">
            <h2 className="card-title w-full">{cart.name}</h2>
            <p>${cart.price}</p>
            
          </div>
          
        </div>
        <button onClick={() => removeCart(cart)} className="btn  text-red-500 text-right  p-4">remove</button>
      </div>
      
    </div>
  );
};

export default Cart;
