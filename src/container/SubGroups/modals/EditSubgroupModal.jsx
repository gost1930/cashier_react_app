import React from "react";
import Modal from "../../../components/generics/Modal";

function EditSubgroupModal({ contentShow, handlChange, data }) {
  return (
    <Modal handlChange={handlChange} showContent={contentShow?"":"hidden"}>
      EditSubgroupModal
    </Modal>
  );
}

export default EditSubgroupModal;
