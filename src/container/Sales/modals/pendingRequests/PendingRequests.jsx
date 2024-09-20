import { Search } from '../../../../components';
import Table from '../../../../components/generics/Table';
import Modal from '../../../../components/generics/Modal';


const PendingRequests = ({handlPending ,showPayment}) => {
  const columns = {
    status:'الحالة',
    name:'إسم العميل',
    phone:'الهاتف',
    amount:'المبلغ',
    number:'رقم مؤقت',
  }
  
  const rows = [
    { id: 1, status: 'غير مدفوع', name: 'عبدالرحمن السيد', phone: '0123456789', amount: '2000', number: '123456', },
    { id: 2, status: 'غير مدفوع', name: 'عبدالرحمن السيد', phone: '0123456789', amount: '2000', number: '123456', },
  ]

  return (
    <Modal handlChange={handlPending} showContent={showPayment ? "" : "hidden"}>
        <h1 className='w-full text-center text-xl'>الطلبات المعلقة</h1>
        <div className='w-full px-5 pt-3 pb-1 flex flex-col'>
            <Search />
            <Table
            columns={columns}
            rows={rows}
            />
        </div>
    </Modal>
  )
}

export default PendingRequests;