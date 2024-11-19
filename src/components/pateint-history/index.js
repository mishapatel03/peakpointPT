import React from "react";
import { FaPlus, FaPencil } from "react-icons/fa6";
import PatientHistoryForm from "../patient-history-form";
import { useSelector } from "react-redux";

export default function PatientHistory() {
  const formData = useSelector((state) => state.form.formData || [""]);

  return (
    <React.Fragment>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        type="button"
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="btn mt-2 text-black p-2 rounded"
      >
        {formData?.patientHistoryValue != "" ? (
          <FaPencil size={15} />
        ) : (
          <FaPlus size={15} />
        )}
        History
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box w-full max-w-4xl">
          {/* Form */}
          <PatientHistoryForm />
        </div>
      </dialog>
    </React.Fragment>
  );
}
