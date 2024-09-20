import React, { useState } from 'react';
import { RiAddBoxLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddSubGroupForm = ({ handlChange, showContent }) => {
    const [show, setShow] = useState(false);

    const handleCheckboxChange = () => {
        setShow(prev => !prev);
    };

    return (
        <section className={`${showContent} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-47%] bg-gray-200 p-5 rounded-lg shadow-2xl max-h-[100%] w-2/3 `}>
            <IoIosCloseCircleOutline onClick={handlChange} className='text-3xl absolute top-4 right-4 cursor-pointer' />
            <h1 className='text-3xl text-center mb-8'>إضافة الأصناف</h1>
            <form action="">
                <div className='flex flex-row justify-around gap-1 mb-4'>
                    <div className="flex items-center">
                        <label htmlFor="a" className='block text-lg font-medium mb-2'>التأمين</label>
                        <input type="checkbox" id='a' className="" />
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="b" className='block text-lg font-medium mb-2'>إضافات</label>
                        <input type="checkbox" id='b' className="" />
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="c"  className='block text-lg font-medium mb-2'>يظهر في المشتريات</label>
                        <input 
                        id='c'
                            type="checkbox" 
                            className="" 
                            checked={show} 
                            onChange={handleCheckboxChange} 
                        />
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="d" className='block text-lg font-medium mb-2'>يظهر في المبيعات</label>
                        <input defaultChecked type="checkbox" id='d' className="" />
                    </div>

                    <div className="flex">
                        <label htmlFor="e" className='block text-lg font-medium mb-2'>خاضع للضريبة</label>
                        <input defaultChecked type="checkbox" id='e' className="" />
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-6 mb-4'>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2 mr-2'>المجموعة</label>
                        <div className="flex items-center">
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">مجموعة 1</option>
                                <option value="">مجموعة 2</option>
                            </select>
                            <RiAddBoxLine className='h-8 w-8 cursor-pointer ml-2'/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>الإسم بالعربي</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>

                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>الإسم بالإنجليزي</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>

                    
                </div>

                <div className='grid grid-cols-3 gap-6 mb-4'>
                    
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>سعر البيع</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>

                    
                        <div>
                            <label htmlFor="" className='block text-lg font-medium mb-2'>س. التوصيل (شركات)</label>
                            <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="" className='block text-lg font-medium mb-2'>سعر التوصيل</label>
                            <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>التخفيض%</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>

                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>إضافة صورة</label>
                        <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>

                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>تنبيه قبل يوم</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    </div>
                   <div className="grid grid-cols-2  gap-6 mb-4">
                   <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2 mr-2'>الوحدة</label>
                        <div className="flex items-center">
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">كلغ</option>
                                <option value="">غرام</option>
                                <option value="">حبة</option>
                                <option value="">كرتون</option>
                            </select>
                            <RiAddBoxLine className='h-8 w-8 cursor-pointer ml-2'/>
                        </div>
                    </div>

                   <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2 mr-2'>إخيار الصنف</label>
                   <div className='flex flex-row items-center'>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">صنف 1</option>
                            <option value="">صنف 2</option>
                        </select>
                        <RiAddBoxLine className='h-8 w-8 cursor-pointer ml-2'/>
                    </div>
                   </div>
                   </div>


                <div className={`${show ? '' : 'hidden'} grid grid-cols-3 gap-6 mb-4`}>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>الكيمة السابقة</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>

                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>س.شراء</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>س.السابق</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>س.التكلفة</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>الحد الأدنى في المخزون</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="" className='block text-lg font-medium mb-2'>سعر التكلة للوحدة</label>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                </div>

                <button className='p-2 bg-green-600 rounded-lg hover:bg-green-800 text-white flex items-center gap-1'>إضافة <RiAddBoxLine className='text-white' /> </button>
            </form>
        </section>
    );
};

export default AddSubGroupForm;
