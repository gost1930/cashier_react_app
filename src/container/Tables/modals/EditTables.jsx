import Modal from '../../../components/generics/Modal'
import EditTablesForm from '../forms/EditTablesForm'

function EditTables({ handlChange, showForm }) {
  return (
      <Modal handlChange={handlChange} showContent={showForm ? "" : "hidden"}>
        <EditTablesForm />
    </Modal>
  )
}

export default EditTables;