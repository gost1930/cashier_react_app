import React from 'react'
import Modal from '../../../components/generics/Modal';
import Payments from '../Payments/Payments';

const Payment = ({handlPayment ,showPayment}) => {
  return (
    <Modal handlChange={handlPayment} showContent={showPayment ? "" : "hidden"}>
        <Payments />
    </Modal>
  )
}

export default Payment;