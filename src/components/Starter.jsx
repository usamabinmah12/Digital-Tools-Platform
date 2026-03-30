import React from 'react';
import img1  from '../assets/user.png'
const Starter = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center  text-center my-20" >
                <h3 className='text-[rgb(16,23,39)] font-extrabold  text-3xl'>Get Started in 3 Steps</h3>
                <p>Start using premium digital tools in minutes, not hours.</p>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col items-center">
                        <button className='bg-blue-600  p-3 rounded-[50%] items'>01</button>
                        <img  className='' src={img1} alt="" />
                        <h3>Create Account</h3>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className='bg-blue-600  p-3 rounded-[50%]'>01</button>
                        <img  className='' src={img1} alt="" />
                        <h3>Create Account</h3>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className='bg-blue-600  p-3 rounded-[50%]'>01</button>
                        <img  className='' src={img1} alt="" />
                        <h3>Create Account</h3>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Starter;