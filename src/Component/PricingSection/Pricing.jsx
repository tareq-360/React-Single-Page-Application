import React from 'react';
import Cards from '../CardSection/Cards';
import icon from '../../assets/assets/products/design-tool.png'


const Pricing = ({ cardData }) => {
    // console.log(cardData);
    return (
        <div className='mt-15'>
            <h1 className=' font-semibold text-2xl text-center'>Simple, Transparent Pricing</h1>
            <p className='text-center my-3 mb-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            {/* {cardData.map(proData => proData.name == "Pro" && */}
                <div className=' container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                    {cardData.map((data, ind) => (data.name == "Pro" || data.name == "Team" || data.name == "Starter") &&
                        <div key={ind} className=" bg-base-100 shadow-sm">
                            <div className={`card-body flex flex-col h-full ${data.tag ==="Most popular" && "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md"}`}>
                                <div className='flex justify-end'>
                                    <span className={`${data.tag ==="Most popular" ? " bg-orange-600 font-bold rounded-full p-2 text-white" : "badge badge-xs badge-warning"} `}>{data.tag}</span>
                                </div>
                                <div>
                                    <img className=' bg-gray-100 rounded-full  p-2 shadow-md' src={icon} alt="" />
                                </div>
                                <div className="">
                                    <h2 className="text-3xl font-bold">{data.name}</h2>
                                    <p>
                                        {data.description}
                                    </p>
                                    <span className="text-xl font-bold">${data.price}/{data.period}</span>
                                </div>
                                <ul className="mt-6 flex flex-col flex-1 gap-2 text-xs">
                                    {data.features.map((Data, Ind) =>
                                        <li key={Ind}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span >{Data}</span>
                                        </li>
                                    )}


                                </ul>
                                <div className="mt-6">
                                    <button className="btn text-white btn-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            {/* // )} */}

        </div>
    );
};

export default Pricing;