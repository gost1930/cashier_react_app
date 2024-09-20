import React, { useState } from 'react';

const Payments = () => {
    const btn = [
        { id: 1, name: "نقدي" },
        { id: 2, name: "بطاقة المدى" },
        { id: 3, name: "شركات آجل" },
        { id: 4, name: "تابي" },
        { id: 5, name: "تمارا" },
    ];

    const res = [
        { id: 1, name: "المدفوغ", value: 100 },
        { id: 2, name: "الباقي", value: 100 },
        { id: 3, name: "الصافي", value: 100 },
    ];

    const amount = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 20 },
        { id: 4, value: 50 },
        { id: 5, value: 100 },
        { id: 6, value: 200 },
        { id: 7, value: 500 },
    ];

    const barDown = [
        { id: 1, name: "طباعة الفاتورة" },
        { id: 2, name: "الإيميل" },
        { id: 3, name: "رسالة نصية" },
        { id: 4, name: "العودة" },
    ];

    const [inputValue, setInputValue] = useState("");
    const [showAmount , setShowAmount] = useState(false);
    const handleShowAmount = () => {
        setShowAmount((prev) => !prev);
    }

    const handleClick = (num) => {
        setInputValue((prev) => prev + num);
    };

    return (
        <div className='w-full h-full flex flex-col justify-between pr-5 py-3'>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col w-fit h-full gap-y-2">
                    {btn.map(({ id, name }) => (
                        <a key={id} href="#" className="w-16 h-16 p-3 text-center text-sm bg-gray-300 rounded-full border-2 border-black" onClick={name === 'نقدي' ? handleShowAmount : null}>
                        {name}
                    </a>
                    
                    ))}
                </div>

                <div className="w-[80%]  h-full">
                    <div className="flex flex-row justify-between w-full h-fit">
                        {res.map(({ id, name, value }) => (
                            <div key={id} className='flex flex-col items-center gap-y-2'>
                                <p>{name}</p>
                                <div className='px-10 py-3 text-xl font-bold bg-white border-2 border-black'>{value}</div>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-row justify-between w-full h-fit my-1'>
                        <div className="flex flex-col w-[40%] h-fit pl-1">
                            {
                                <div className={`${showAmount ? 'block' : 'hidden'} grid grid-cols-2 h-fit  gap-1`}>
                                {amount.map(({ id, value }) => (
                                    <div key={id} className='bg-white border-2 text-center px-5 py-3 rounded border-black'>
                                        {value}
                                    </div>
                                ))}
                            </div>
                            }
                            <input type="text" name="" className='placeholder:text-black border-2 border-black p-2 mt-2 w-full' placeholder='رقم فاتورة تابي او تمارا' />
                        </div>

                        <div className='w-[60%] '>
                            <div dir='ltr' className="grid grid-cols-3 gap-3">
                                {[0,1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => handleClick(num.toString())}
                                        className="bg-gray-300 rounded-lg p-4 text-lg hover:bg-gray-400"
                                    >
                                        {num}
                                    </button>
                                ))}
                                <button className="col-span-1 bg-gray-300 rounded-lg p-1 text-lg hover:bg-gray-400">.</button>
                                <button className="col-span-1 bg-gray-300 rounded-lg p-1 text-lg hover:bg-gray-400">C</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row justify-between mb-1'>
                {barDown.map(({ id, name }) => (
                    <div key={id} className={`rounded-lg p-5 text-lg border-2 border-black cursor-pointer ${id === 1 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Payments;
