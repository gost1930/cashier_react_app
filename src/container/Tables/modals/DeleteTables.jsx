import Modal from '../../../components/generics/Modal'
import DeleteTablesForm from '../forms/DeleteTablesForm'

function DeleteTables({ handlChange, showForm }) {
  return (
      <Modal handlChange={handlChange} showContent={showForm ? "" : "hidden"}>
        <DeleteTablesForm />
    </Modal>
  )
}

export default DeleteTables;