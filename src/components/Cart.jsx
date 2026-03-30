import React from "react";

const Cart = ({ cart   , setCarts }) => {
    const  removeCart  =   (cart)  =>  {
        
    }
  return (
    <div className="my-5">
      <div className="flex  justify-between   bg-amber-50  p-9 rounded-3xl">
        <div className=" flex gap-6 my-6 ">
          <img src={cart.icon} alt="" />
          <div className="">
            <h2 className="card-title">{cart.name}</h2>
            <p>${cart.price}</p>
            
          </div>
          
        </div>
        <button onClick={() => removeCart(cart)} className="btn  text-red-500 text-right  p-4">remove</button>
      </div>
    </div>
  );
};

export default Cart;
