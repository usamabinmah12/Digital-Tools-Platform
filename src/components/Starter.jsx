import React from 'react';
import img1  from '../assets/user.png'
import img2  from '../assets/package.png'
import img3  from '../assets/rocket.png'
const Starter = () => {
    return (
        <div >
            <div className="container mx-auto   flex flex-col justify-center items-center  text-center my-20 " >
                <h3 className='text-[rgb(16,23,39)] font-extrabold  text-3xl'>Get Started in 3 Steps</h3>
                <p>Start using premium digital tools in minutes, not hours.</p>
                <div className="grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 ">
                    <div className=" p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300  flex flex-col items-center border  border-amber-200 gap-3">
                        <div className="flex  justify-end w-full p-6">
                            <button className='bg-blue-500 font-semibold  p-3 rounded-[50%]'>01</button>
                        </div>
                        
                        <img  className='' src={img1} alt="" />
                        <h3 className='font-bold  text-2xl'>Create Account</h3>
                        <p   className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className=" p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col items-center border  border-amber-200 gap-3">
                        <div className="flex  justify-end w-full p-6">
                            <button className='bg-blue-500 font-semibold  p-3 rounded-[50%]'>02</button>
                        </div>
                        
                        <img  className='' src={img2} alt="" />
                        <h3 className='font-bold text-2xl'>Choose Products</h3>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className="  p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col items-center border  border-amber-200 gap-3">
                        <div className="flex  justify-end w-full p-6">
                            <button className='bg-blue-500 font-semibold  p-3 rounded-[50%]'>03</button>
                        </div>
                        
                        <img  className='' src={img3} alt="" />
                        <h3 className='font-bold text-2xl'>Start Creating</h3>
                        <p  className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Starter;