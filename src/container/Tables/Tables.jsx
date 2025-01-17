import {useState} from 'react'
import Table from "../../components/generics/Table";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPrintOutline } from "react-icons/io5";
import AddTables from './modals/AddTables';
import EditTables from './modals/EditTables';
import DeleteTables from './modals/DeleteTables';

const Tables = () => {

    const columns = [
      "إسم الطاولة",
      "عدد المقاعد",

      ];
      const rows = [
        {
          nameAr: "كيلو غرام",
          nameEn: "kg",

        },
        {
          nameAr: "حبة",
          nameEn: "unit",

        },
        {
          nameAr: "غرام",
          nameEn: "gram",

        },
      ];
    
      const [showEdit, setshowEdit] = useState(false);
      const [showDelete, setshowDelete] = useState(false);
      const [showAddPurchase, setshowAddPurchase] = useState(false);
      const [selectedId, setselectedId] = useState(0);
      const handlChange = () => setshowAddPurchase((prev) => !prev);
    
    
      return (
        <div dir="rtl" className={`flex flex-col w-full h-full`}>
          <h1 className="w-full text-center underline text-2xl">الطاولات</h1>
          <div className="flex flex-row justify-evenly w-full items-center mt-5">
            <div className="flex gap-2 w-full">
              <a
                className="p-2 bg-green-600 rounded-lg hover:bg-green-800 text-white flex items-center gap-1 cursor-pointer"
                onClick={handlChange}
              >
                إضافة <MdAddShoppingCart className="text-white" />{" "}
              </a>
              <a className="p-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white flex items-center gap-1 cursor-pointer">
                طباعة <IoPrintOutline className="text-white" />
              </a>
            </div>
          </div>
       
          <Table
            columns={columns}
            rows={rows}
            setselectedId={setselectedId}
            setshowEdit={setshowEdit}
            setshowDelete={setshowDelete}
            dontPrint = {true}
          >
            <EditTables showForm={showEdit} handlChange={()=>setshowEdit((prev)=>!prev)} />
            <DeleteTables showForm={showDelete} handlChange={()=>setshowDelete((prev)=>!prev)} />
          </Table>
    
          <AddTables
            showForm={showAddPurchase}
            handlChange={handlChange}
          />
        </div>
  )
}

export default Tables;

