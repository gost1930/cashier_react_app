
const DeleteTablesForm = () => {
  return (
    <div className='grid grid-cols-1 w-full text-center'>
        <h1>هل أنت متاكد من حذف الوحدة؟</h1>
        <div className="flex flex-row justify-center items-center w-full">
        <button type='submit' className='text-white p-2 m-2 bg-green-500 rounded-lg hover:bg-green-600 w-fit'>تأكيد</button>
        <button type='submit' className='text-white p-2 m-2 bg-red-500 rounded-lg hover:bg-red-600 w-fit'>إلغاء</button>
        </div>
      </div>
  )
}

export default DeleteTablesForm;
