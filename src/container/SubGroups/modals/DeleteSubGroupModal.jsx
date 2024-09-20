import React from 'react'
import Modal from '../../../components/generics/Modal'
import Delete from '../../../components/generics/Delete'

function DeleteSubGroupModal({ contentShow, handlChange }) {
  return (
     <Modal handlChange={handlChange} showContent={contentShow?"":"hidden"}>
      <Delete titel="حذف هذا الصنف"/>
    </Modal>
  )
}

export default DeleteSubGroupModal