import ClientSearch from "./Search/ClientSearch";
import DriverSearch from "./Search/DriverSearch";
import CashierClose from './Btn/CashierClose';
import Groups from "./get/Groups";
import Methods from "./Btn/Methods";
import Btn from "./Btn/Btn";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { IoArrowUndoOutline } from "react-icons/io5";
import BarDown from "./BarDown";
import Table from "./Table/Table";
import SubGroups from "./get/SubGroups";
import SlaleSearch from "./modals/SlaleSearch";
import { useState } from "react";
import Total from "./Total";
import Payment from "./modals/Payment";
import Calc from "./calc/Calc";
import TableOrder from "./modals/TableOrder";
import PendingRequests from "./modals/pendingRequests/PendingRequests";

const Sales = () => {
  const columns = [
    "م",
    "الصنف",
    "الكمية",
    "السعر",
    "المبلغ",
  ];
  const rows = [
    { id: 1, name: "زر بالدجاج", quantity: "2", price: "2000", tital: "4000" },
    { id: 2, name: "مشكل فرن مع ملوخية", quantity: "2", price: "2000", tital: "4000" },
    { id: 3, name: "بامية", quantity: "2", price: "2000", tital: "4000" },
    { id: 4, name: "مسقع", quantity: "2", price: "2000", tital: "4000" },
    { id: 5, name: "زر بالدجاج", quantity: "2", price: "2000", tital: "4000" },
    { id: 6, name: "زر بالدجاج", quantity: "2", price: "2000", tital: "4000" },
  ];
  
  const inputs = [
    { name: 'رقم الطلب شركات توصيل', type: 'text' },
    { name: 'ملاحظة', type: 'area' },
  ];

  const [showSearch, setshowSearch] = useState(false);
  const handlSearch = () => setshowSearch(prev => !prev);

  const [showPayment, setshowPayment] = useState(false);
  const handlPayment = () => setshowPayment(prev => !prev);

  const [showTableOrder, setshowTableOrder] = useState(false);
  const handlTableOrder = () => setshowTableOrder(prev => !prev);

  const [showPrnding, setshowPrnding] = useState(false);
  const handlPrnding = () => setshowPrnding(prev => !prev);

  const handleRowSelection = (id) => {
    console.log('Selected row ID:', id);
  };

  return (
    <section className='w-full flex flex-col justify-between min-h-screen bg-gray-300'>
      <div className="flex flex-col w-full h-full">
        <nav className="w-full flex flex-row justify-between items-end gap-x-1 p-1 mb-3">
          <div className="flex flex-row items-center">
            <CashierClose />
            <div className="flex flex-col justify-center items-center">
              <p className="py-2 h-10 px-3 bg-gray-300 w-fit text-sm">103</p>
            </div>
            <div>
              <input type="date" className="shadow text-sm h-10 appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <DriverSearch />
            <ClientSearch />
          </div>
          <Methods />
        </nav>

        <div className="flex flex-row w-full gap-x-5">
          <div className="flex min-h-full flex-col w-[30%]">
            <div className="h-[370px] w-full pt-1">
              <Groups />
            </div>

            <div className="h-[210px]">
              <Calc />
            </div>

            <div className="grid grid-cols-2 gap-x-2 my-2">
              <Btn titel={'التأمين'} classname={'bg-green-500 text-white'} icon={<MdOutlineAssuredWorkload />} />
              <Btn titel={'مرتجع التأمين'} classname={'bg-red-500 text-white'} icon={<IoArrowUndoOutline />} />
            </div>
          </div>

          <div className="flex flex-col items-start max-h-screen w-[70%] ml-2">
            <div className="max-h-[370px] w-full overflow-y-auto overflow-x-hidden">
              <SubGroups />
            </div>
            <div className="flex self-end w-full h-[220px]">
              <div className="flex flex-col h-full items-start justify-start gap-y-1 w-full">
                <div className="flex flex-row h-[80%] w-full">
                  <Table
                    colums={columns}
                    rows={rows}
                    selectRowById={handleRowSelection}
                  />
                </div>
                <div className="flex flex-row-reverse justify-between w-full">
                  <Total />
                  <div className="flex flex-col h-full">
                    {inputs.map((input, idx) => (
                      <input
                        key={idx}
                        type={input.type === 'select' ? 'text' : input.type}
                        placeholder={input.name}
                        className="w-fit border border-gray-300 px-4"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BarDown 
      Showcontent={handlPayment}
      handlSearch={handlSearch}
      handlTableOrder={handlTableOrder}
      handlPending={handlPrnding} />

      <SlaleSearch handlChange={handlSearch} showContent={showSearch} />
      <Payment handlPayment={handlPayment} showPayment={showPayment} />
      <TableOrder handlChange={handlTableOrder} showContent={showTableOrder} />
      <PendingRequests handlPending={handlPrnding} showPayment={showPrnding} />
    </section>
  );
}

export default Sales;
