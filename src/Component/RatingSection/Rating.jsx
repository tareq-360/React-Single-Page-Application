import React from 'react';

const Rating = () => {
    return (
        <div className=' '>
            <div className="shadow container mx-auto grid grid-cols-3 p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <div className="md:mx-auto">
                    
                    <div className="stat-value text-white">25.6K</div>
                    <div className="stat-desc text-white">Active Users</div>
                </div>

                <div className="md:mx-auto">
                    
                    
                    <div className="stat-value text-white">200+</div>
                    <div className="stat-desc text-white">Premium Tools</div>
                </div>

                <div className="md:mx-auto text-white">
                    
                    <div className="stat-value ">4.9</div>
                    <div className="stat-title text-white" >Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Rating;