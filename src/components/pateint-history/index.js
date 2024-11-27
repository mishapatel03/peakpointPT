import React, { useState } from "react";
import { FaPlus, FaPencil } from "react-icons/fa6";
import PatientHistoryForm from "../patient-history-form";
import { useSelector } from "react-redux";

export default function PatientHistory() {
  const formData = useSelector((state) => state.form.formData || [""]);

  return (
    <>
      {/* Button to open the modal */}
      {/* <button
        type="button"
        onClick={openModal}
        className="btn mt-2 text-black p-2 rounded"
      >
        {formData?.patientHistoryValue !== "" ? (
          <FaPencil size={15} />
        ) : (
          <FaPlus size={15} />
        )}
        History
      </button> */}

      {/* Modal */}
        <div
          className=""
          aria-modal="true"
        >
          <div className=" w-full max-w-screen-xl bg-white rounded-lg">
          <div className="text-lg font-bold  ">Patient Histoy</div>


            {/* Form */}
            <PatientHistoryForm />

          </div>
        </div>
    </>
  );
}
