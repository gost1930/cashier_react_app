import { RiAddBoxLine } from "react-icons/ri";

const AddTablesForm = () => {
  return (
    <section>
      <h1 className='text-3xl text-center mt-3 mb-8'>إضافة الوحدات</h1>
      <form action="">
        <div className="grid grid-cols-2 w-full">

          <div>
            <label htmlFor="" className='block text-lg font-medium mb-2'>إسم الطاولة</label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div>
            <label htmlFor="" className='block text-lg font-medium mb-2'>عدد المجالس</label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
        </div>
        <button className='p-2 bg-green-600 rounded-lg hover:bg-green-800 text-white flex items-center gap-1'>حفظ<RiAddBoxLine className='text-white' /> </button>
      </form>
    </section>
  )
}

export default AddTablesForm;
