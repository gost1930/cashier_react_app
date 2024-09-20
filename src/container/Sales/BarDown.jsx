import { IoArrowUndoOutline } from "react-icons/io5";
import { TfiSave } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { PiCashRegister } from "react-icons/pi";
import { AiOutlineTruck } from "react-icons/ai";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineTableBar } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import Btn from "./Btn/Btn";
const BarDown = ({Showcontent , handlSearch , handlTableOrder , handlPending}) => {
    const btns = [
        {
          titel: 'دفع',
          icon: <TfiSave />,
          classname: 'bg-green-500 text-white',
        },
        {
          titel: 'الدرج',
          icon: <PiCashRegister />,
          classname: 'hover:bg-gray-200 hover:bg-white border-gray-800',
        },
        {
          titel: 'إلغاء',
          icon: <IoArrowUndoOutline />,
          classname: 'bg-red-500 text-white',
        },
        {
          titel: 'طلبات التوصيل',
          icon: <AiOutlineTruck />,
          classname: 'hover:bg-gray-200 hover:bg-white border-gray-800',
        },
        {
          titel: 'طلبات معلقة',
          icon: <FaKitchenSet />,
          classname: 'hover:bg-gray-200 hover:bg-white border-gray-800',
        },
        {
          titel: 'طلبات الطاولة',
          icon: <MdOutlineTableBar />,
          classname: 'hover:bg-gray-200 hover:bg-white border-gray-800',
        },
        {
          titel: 'البحث في المبيعات',
          icon: <LuSearch />,
          classname: 'hover:bg-gray-200 hover:bg-white border-gray-800',
        },
    ]
  return (
    <div className="flex self-end flex-row justify-between items-center w-full pb-1">
      <div className="flex w-full gap-x-2">
        {btns.map((btn, index) => (
          <div
            key={index}  onClick={index == 0 ? Showcontent : index == 6 ? handlSearch :index == 5 ? handlTableOrder : index == 4 ? handlPending:''}>
            <Btn key={index} titel={btn.titel} classname={btn.classname} icon={btn.icon}/>
          </div>
        ))}
      </div>
       {/* البحث في المبيعات
       <a onClick={handlSearch} className='border bg-white hover:bg-gray-600 hover:text-white text-sm w-fit p-2 rounded-lg flex items-center gap-1 cursor-pointer'>البحث في المبيعات<LuSearch /></a> */}
      <Link to={'/purchase'}><Btn titel={'خروج'} classname={'bg-red-500 text-white'} icon={<TbDoorExit />} /></Link>
    </div>
  )
}

export default BarDown;
