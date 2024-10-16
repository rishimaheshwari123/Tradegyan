import React, { useEffect, useState } from 'react';
import Notification from '../components/core/home/Notification';
import Navbar from '../components/comman/Navbar';
import { datas } from '../data/traderData';
import { useParams } from 'react-router-dom';

function TraderSingleData() {
    const { type, name } = useParams();
    const [traderData, setTraderData] = useState(null);

    useEffect(() => {
        if (type) {
            const hhtype = datas[type];
            setTraderData(hhtype[name]);
        }
    }, [name, type]);

    return (
        <>
              {/* <Notification /> */}
            <Navbar />
            <div className='relative mt-3'>
                {traderData ? (
                    traderData.map((data) => (
                        <div key={data.name} className="container mx-auto p-4 text-gray-800 lg:w-[70%] grid lg:grid-cols-2 gap-4">
                            <div className='flex flex-col gap-3'>
                                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-blue-500">{data?.name}</h1>
                                <p className="mb-2 text-lg lg:text-2xl">{data.description}</p>
                                <p className="mb-2 text-sm"><strong>What:</strong> {data.what}</p>
                                <p className="mb-2 text-sm"><strong>Whom:</strong> {data.whom}</p>
                                <p className="mb-2 text-sm"><strong>Ideal for:</strong> {data.idealFor}</p>
                                <p className="mb-2 text-sm"><strong>Product Description:</strong> {data.productDescription}</p>

                                <h2 className="text-xl lg:text-2xl font-semibold mb-2 mt-4">Features:</h2>
                                <ul className="list-disc list-inside mb-4">
                                    {data.features && Object.entries(data.features).map(([key, value]) => (
                                        <li key={key} className='text-sm lg:text-base'>
                                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="text-xl lg:text-2xl font-semibold mb-2 mt-4">Sample Recommendations:</h2>
                                <ul className="list-disc list-inside mb-4">
                                    {data.sample && data.sample.map((recommendation, index) => (
                                        <li key={index} className='text-sm lg:text-base'>{recommendation}</li>
                                    ))}
                                </ul>

                                {/* Pricing Table */}
                                {data.pricing && (
                                    <>
                                        <h2 className="text-xl lg:text-2xl font-semibold mb-2 mt-4">Pricing:</h2>
                                        <table className="min-w-full table-auto border border-gray-300 mb-4">
                                            <thead>
                                                <tr className="bg-gray-200">
                                                    <th className="border border-gray-300 px-4 py-2">Period</th>
                                                    <th className="border border-gray-300 px-4 py-2">Amount</th>
                                                    <th className="border border-gray-300 px-4 py-2">GST (18%)</th>
                                                    <th className="border border-gray-300 px-4 py-2">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.pricing.map((item, index) => (
                                                    <tr key={index} className="hover:bg-gray-100">
                                                        <td className="border border-gray-300 px-4 py-2">{item.period}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item.amount}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item.gst}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item.total}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                )}

                                <p className="italic mb-4 text-[13px] lg:text-sm"><strong>Disclaimer:</strong> {data.disclaimer}</p>
                            </div>

                            {/* Sticky Section */}
                            <div className='sticky top-0 h-[calc(100vh-100px)]'> {/* Adjust height accordingly */}
                                {data.image && (
                                    <div className='flex flex-col justify-center items-center gap-4'>
                                        <h3 className='text-3xl lg:text-4xl text-[#6c75aa] font-semibold'>Risko Meter</h3>
                                        <img 
                                            src={data.image} 
                                            alt={data.name} 
                                            className="w-[80%] h-auto rounded-lg mb-4 bg-white"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="container mx-auto p-4 text-white">
                        <p>No trader data found.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default TraderSingleData;
