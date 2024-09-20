import React from 'react'
import Modal from '../../../components/generics/Modal'
import AddTablesForm from '../forms/AddTablesForm'

function AddTables({ handlChange, showForm }) {
  return (
      <Modal handlChange={handlChange} showContent={showForm ? "" : "hidden"}>
        <AddTablesForm />
    </Modal>
  )
}

export default AddTables;