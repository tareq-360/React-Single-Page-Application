import React from 'react';
import ac from '../../assets/assets/user.png';
const ASection = () => {
    return (
        <div className=' text-center py-15 container mx-auto shadow-lg bg-[#F9FAFC] '>
            <h1 className=' text-4xl  font-extrabold pb-3'>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
            <div className='mx-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className=' flex flex-col mx-auto relative  p-15 space-y-5 bg-slate-100'>
                    <div className='text-white w-6 h-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute left-[90%] top-[2%] shadow-md'>01</div>
                    <img className=' w-fit flex mx-auto bg-gray-200 rounded-full p-3' src={ac}></img>
                    <h3 className=' text-xl font-semibold'>Create Account</h3>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=' flex flex-col mx-auto relative  p-15 space-y-5 bg-slate-100'>
                    <div className='text-white w-6 h-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute left-[90%] top-[2%] shadow-md'>01</div>
                    <img className=' w-fit flex mx-auto bg-gray-200 rounded-full p-3' src={ac}></img>
                    <h3 className=' text-xl font-semibold'>Choose Products</h3>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=' flex flex-col mx-auto relative  p-15 space-y-5 bg-slate-100'>
                    <div className='text-white w-6 h-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full absolute left-[90%] top-[2%] shadow-md'>01</div>
                    <img className=' w-fit flex mx-auto bg-gray-200 rounded-full p-3' src={ac}></img>
                    <h3 className=' text-xl font-semibold'>Start Creating</h3>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                
            </div>
        </div>
    );
};

export default ASection;