import React from "react";
import banner from  "../assets/banner.png"
import { CiPlay1 } from "react-icons/ci";
import { BsRecord2 } from "react-icons/bs";
const Banner = () => {
  return (
    <div  className="container  mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner}/>
          <div>
            <div className="flex  gap-2  items-center font-semibold text-blue-600">
              <BsRecord2></BsRecord2>
              <h3>New: AI-Powered Tools Available</h3>
            </div>
            
            <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.

               <br /> Explore Products
            </p>
            <div className="flex">
                <button className="bg-blue-700 text-white  p-2 rounded-[15px] mx-3">Explore Products</button>
                <div className="border border-amber-400 p-2 rounded-2xl flex items-center  gap-2"> 
                  <CiPlay1></CiPlay1>
                  <p>Watch  Demo</p>
                </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
