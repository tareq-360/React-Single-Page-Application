import React from 'react';

const SelectedCarts = ({ selectedItems ,setSelectedItems}) => {
    let totalPrice=0;
    selectedItems.map(data=>{
        const ProductPrice=data.price;
        totalPrice = totalPrice+ProductPrice;
    })
    const delBtnHandle=(deleteItem)=>{
        // console.log(deleteItem);
        const fltrIt= selectedItems.filter(item=> item.name !==deleteItem.name);
        // console.log(fltrIt);
        setSelectedItems(fltrIt);
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
                        <button onClick={()=>delBtnHandle(data)} className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            )}
            <div className='flex justify-between'>
                <h1 className=' font-bold text-xl '>Total Price : </h1>
                <h1 className=' font-bold text-xl '>{totalPrice}</h1>
            </div>


        </div>
    );
};

export default SelectedCarts;