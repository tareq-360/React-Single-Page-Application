import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectedCarts = ({ selectedItems, setSelectedItems }) => {
    let totalPrice = 0;
    selectedItems.map(data => {
        const ProductPrice = data.price;
        totalPrice = totalPrice + ProductPrice;
    })
    const delBtnHandle = (deleteItem) => {
        // console.log(deleteItem);
        const fltrIt = selectedItems.filter(item => item.name !== deleteItem.name);
        // console.log(fltrIt);
        setSelectedItems(fltrIt);
        toast.error("Delete Done ");
    }
    const proceedBtnHandle = () => {
        setSelectedItems([]);
        toast.success("Buy Done ", {
            position: "top-center",
            autoClose: 2000,})
    }
    return (
        <div className=' container shadow-lg border mx-auto p-10 space-y-5'>
            {selectedItems.map(data =>

                <div className=' border rounded-md p-5' key={data.id}>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className=' font-bold text-xl'>Name : {data.name}</h3>
                            <p>Price : {data.price}</p>
                        </div>
                        <button onClick={() => delBtnHandle(data)} className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            )}
            <div className='flex justify-between'>
                <h1 className=' font-bold text-xl '>Total Price : </h1>
                <h1 className=' font-bold text-xl '>{totalPrice}</h1>
            </div>

            <button onClick={proceedBtnHandle} className='btn btn-primary w-full'>Proceed</button>
        </div>
    );
};

export default SelectedCarts;