import React, { useState } from 'react';

const Tools = ({IsActive,setIsActive,selectedItems}) => {
    
    // console.log(IsActive);
    const btnClickHandle=()=>{
        setIsActive(true);
    }
    const cartBtnHandle=()=>{
        setIsActive(false);
    }
    return (
        <div className=' container mx-auto my-10'>
            <div className=" bg-base-100 shadow-sm">
                <div className="card-body ">
                    <h2 className=" mx-auto font-bold text-4xl">
                        Premium Digital Tools
                    </h2>
                    <p className=' text-center'>Choose from our curated collection of premium digital products designed<br></br>  to boost your productivity and creativity.</p>
                    <div className="card-actions mx-auto">
                        <div onClick={btnClickHandle} className={`btn badge-outline ${IsActive && "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"} rounded-full `}>Products</div>
                        <div onClick={cartBtnHandle} className={`btn badge-outline rounded-full ${!IsActive && "bg-gradient-to-r from-indigo-600 to-purple-600   text-white"}`}>{`Carts(${selectedItems.length})`}</div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Tools;