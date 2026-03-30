import React from "react";

const Stat = () => {
  return (
    <div  className="container mx-auto  justify-center items-center">
      <div className="flex shadow">
        <div className="stat  flex flex-col items-center">
          <div className="stat-figure text-primary items-center">
            
          </div>
          
          <div className="stat-value text-primary">50K+</div>
          <div className="stat-desc">Active User</div>
        </div>

        <div className="stat  flex flex-col items-center">
         
          
          <div className="stat-value text-secondary ">200+</div>
          <div className="stat-desc">Premium Tools</div>
        </div>

        <div className="stat  flex flex-col items-center">
          
          <div className="stat-value">4.9</div>
          <div className="stat-title">Rating</div>
        
        </div>
      </div>
    </div>
  );
};

export default Stat;
