import React from 'react';

const Tools = () => {
    return (
        <div className=' container mx-auto my-10'>
            <div className=" bg-base-100 shadow-sm">
                <div className="card-body ">
                    <h2 className=" mx-auto font-bold text-4xl">
                        Premium Digital Tools
                    </h2>
                    <p className=' text-center'>Choose from our curated collection of premium digital products designed<br></br>  to boost your productivity and creativity.</p>
                    <div className="card-actions mx-auto">
                        <div className="btn badge-outline bg-gradient-to-r from-indigo-600 to-purple-600  rounded-full text-white">Products</div>
                        <div className="btn bg-gradient-to-r from-indigo-600 to-purple-600  rounded-full text-white badge-outline">Carts</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;