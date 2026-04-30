import React from 'react';
import noItem from '../../assets/no-item.jpg';
import SelectedCarts from '../SelectedCarts/SelectedCarts';
const Carts = ({IsActive,selectedItems,setSelectedItems}) => {
    const len=selectedItems.length;
    return (
        <div className={`container mx-auto shadow-lg my-10 ${IsActive && "hidden"}`}>
            {
                len ? 
                <SelectedCarts selectedItems={selectedItems} setSelectedItems={setSelectedItems}></SelectedCarts>
                : <img className='mx-auto max-w-md p-10' src={noItem} alt="" />
            }
            
        </div>
    );
};

export default Carts;