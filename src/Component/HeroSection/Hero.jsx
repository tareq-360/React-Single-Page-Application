import React from 'react';
import banner from '../../assets/assets/banner.png';
import play from '../../assets/assets/play.png';
import { CircleStop } from 'lucide-react';
const Hero = () => {
    return (
        <div className=' container mx-auto'>
            <div className="hero bg-base-200 min-h-screen flex flex-col md:flex-row-reverse p-5 gap-5">
                <div className=" flex-1 ">
                    <img className='w-[80%]' src={banner} alt="" />
                </div>
                <div className=' flex-1'>
                    <div>
                        <p className='bg-[#E1E7FF] rounded-full p-[2px] w-[60%]'>
                            <p className=' flex  text-blue-600 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  bg-clip-text text-transparent'><span className='flex justify-center items-center '><CircleStop size={10} color="#342bb6"></CircleStop></span> New: AI-Powered Tools Available</p>
                        </p>

                        <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products
                        </p>
                        <button className="btn btn-primary mx-5 rounded-full">Explore Products</button>
                        <button className="btn rounded-full  border border-orange-500"><img src={play}></img> Explore Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;