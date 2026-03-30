import React, { use, useState } from 'react';
import Products from './Products';
import Carts from './Carts';

const Msec = ({cardPromise, carts , setCarts}) => {
    const data = use(cardPromise);
    
    const  [colorEf , setColorEf]  =  useState("products")
    console.log(colorEf);
    return (
        <div className='container  mx-auto ' >
            <div className="flex flex-col justify-center items-center  text-center my-20" >
                <h3 className='text-[#101727] font-extrabold  text-3xl'>Premium Digital Tools</h3>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="mx-3 font-semibold my-7">
                    <button onClick={()   =>  setColorEf("products")}  className={` ${colorEf == "products" ? "bg-yellow-300" : "" }  rounded-none rounded-l-[15px] p-[5px]`}>Products</button>
                    <button onClick={()   =>  setColorEf("cart")}  className={` ${colorEf == "cart" ? "bg-yellow-300" : "" }  rounded-none rounded-r-[15px] p-[5px]`}>Cart({carts.length})</button>
                </div>
                {
                    colorEf === "products"  ?  <Products data={data}   
                        carts  = {carts}
                        setCarts  =  {setCarts}
                    ></Products> : <Carts  
                        carts  = {carts}
                        setCarts  =  {setCarts}
                    ></Carts>
                }
                
            </div>
        </div>
    );
};

export default Msec;