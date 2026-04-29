import React from 'react';

const Explore = () => {
    return (
        <div className=' space-y-5 text-center mt-20 py-10  mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-[#fff]'>
            <h1 className='text-3xl font-semibold'>Ready to Transform Your Workflow?</h1>
            <p className='text-center text-[#ffffffab]'>Join thousands of professionals who are already using Digitools to work smarter. <br />  Start your free trial today.</p>

            <div className=' space-x-4'>
                <button className='btn btn-secondary rounded-full shadow-md'>Explore Products</button>
                
                <button className='btn btn-neutral rounded-full shadow-md'>View Pricing</button>
                
            </div>
            <p className='text-[#ffffffab]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Explore;