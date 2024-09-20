import { useState, useEffect } from 'react';
import Modal from '../../../components/generics/Modal';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDeleteOutline } from "react-icons/md";
import { BsTextareaResize } from "react-icons/bs";
import { IoPrintOutline } from "react-icons/io5";


const TableOrder = ({ handlChange, showContent }) => {
    const tables = [
        {id: 1, name: "1"},
        {id: 2, name: "2"},
        {id: 3, name: "3"},
        {id: 4, name: "4"},
        {id: 5, name: "5"},
        {id: 6, name: "6"},
        {id: 7, name: "7"},
        {id: 8, name: "8"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
        {id: 9, name: "9"},
    ];

    const btn =[
    {id: 1 , icon: <GiTakeMyMoney />},
    {id: 2 , icon: <MdDeleteOutline />},
    {id: 3 , icon: <BsTextareaResize />},
    {id: 4 , icon: <IoPrintOutline />},
    ]

    const [selectedTable, setSelectedTable] = useState([]);

    const handlChoose = (id) => {
        setSelectedTable(prev => 
            prev.includes(id) ? prev.filter(tableId => tableId !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        console.log(selectedTable); 
    }, [selectedTable]);

    return (
        <Modal handlChange={handlChange} showContent={showContent ? "" : "hidden"}>
            <h1 className='text-xl w-full text-center'>الطاولات</h1>
            <div className='p-5 flex flex-row-reverse items-start w-[900px] h-fit'>
                
                <div className='w-[85%] max-h-[250px] grid grid-cols-9 gap-3 overflow-y-scroll'>
                    {tables.map(({id, name}) => (
                        <div 
                            key={id} 
                            onClick={() => handlChoose(id)}
                            className={`w-fit h-fit py-3 px-7  cursor-pointer duration-200 text-xl rounded ${
                                selectedTable.includes(id) ? 'bg-green-500 text-white' : 'bg-white text-black'
                            }`}
                        >
                            {name}
                        </div>
                    ))}
                </div>

                <div className='w-[15%] flex flex-col justify-start items-center h-fit gap-y-2 border-l-2 border-black p-1 ml-2'>
                    {
                        btn.map(({id, icon}) => (
                            <div key={id} className='w-fit text-3xl max-w-full h-fit py-3 px-3 cursor-pointer bg-white hover:bg-green-500 hover:text-white rounded border-black border'>
                                {icon}
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    );
};

export default TableOrder;
