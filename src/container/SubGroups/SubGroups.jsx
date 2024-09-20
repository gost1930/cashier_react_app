import { useState } from "react";
import Table from "../../components/generics/Table";
import AddSubGroupForm from "./forms/AddSubGroup";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPrintOutline } from "react-icons/io5";
import Search from "./Search";
import EditSubgroupModal from "./modals/EditSubgroupModal";
import DeleteSubGroupModal from "./modals/DeleteSubGroupModal";
import { BtnAction } from "../../components";

const SubGroups = ({ contentShow2 }) => {
  const columns = [
    "إسم عربي",
    "إسم إنجليزي",
    "ك.سابقة",
    "ك.واردة",
    "ك.صادرة",
    "ك.حالية",
    "مرتج مبيعات",
    "مرتجع",
    "تم الدفع",
    "س.التكلفة",
    "سعر التكلفة للوحدة",
    "س.الشراء",
    "س.البيع",
  ];
  const rows = [
    {
      name_ar: "كمبيوتر",
      name_eng: "computer",
      cost: 5000,
      inStock: 10,
      sold: 5,
      returned: 3,
      cost2: 2000,
      price: 3000,
      price2: 2000,
      paid: 2000,
      total: 4000,
      total2: 4000,
      total3: 4000,
    },
  ];
  const [selectedId, setselectedId] = useState(null);
  const [showEdit, setshowEdit] = useState(false);
  const [showDelete, setshowDelete] = useState(false);
  const [showAddSubGroup, setshowAddSubGroup] = useState(false);

  const handlChange = () => setshowAddSubGroup((prev) => !prev);

  return (
    <section
      className={`${contentShow2} flex flex-col justify-center items-start w-full h-fit`}
    >
      <h1 className="w-full text-center underline text-2xl">الاصناف</h1>
      <div className="flex w-full flex-row justify-evenly items-center mt-5">
        <div className="flex gap-2 w-full">
          <BtnAction handlChange={handlChange} />
        </div>
        {/* search bar here  */}
        <Search />
      </div>
      <Table
        columns={columns}
        rows={rows}
        setselectedId={setselectedId}
        setshowEdit={setshowEdit}
        setshowDelete={setshowDelete}
      >
        <EditSubgroupModal
          handlChange={() => setshowEdit((prev) => !prev)}
          contentShow={showEdit}
          data={rows[selectedId]}
        />
        <DeleteSubGroupModal
          handlChange={() => setshowDelete((prev) => !prev)}
          contentShow={showDelete}
        />
      </Table>

      <AddSubGroupForm
        showContent={showAddSubGroup ? "" : "hidden"}
        handlChange={handlChange}
      />
    </section>
  );
};

export default SubGroups;
