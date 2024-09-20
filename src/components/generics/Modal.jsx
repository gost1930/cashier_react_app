import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal({ handlChange, showContent, children }) {
  return (
    <section
      className={`${showContent} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-200 p-5 rounded-lg shadow-2xl
      max-h-[95%] overflow-y-scroll min-w-2/3 max-w-[100%] `}
    >
      <IoIosCloseCircleOutline
        onClick={handlChange}
        className="text-3xl absolute top-4 right-4 cursor-pointer"
      />
      {children}
    </section>
  );
}

export default Modal;
