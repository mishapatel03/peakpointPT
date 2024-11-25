import React, { useState } from "react";
import { FaPlus, FaPencil } from "react-icons/fa6";
import PatientHistoryForm from "../patient-history-form";
import { useSelector } from "react-redux";

export default function PatientHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const formData = useSelector((state) => state.form.formData || [""]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <button
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
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          aria-labelledby="patient-history-modal"
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box w-full max-w-6xl bg-white p-6 rounded-lg">
            <h2 id="patient-history-modal" className="text-2xl font-bold mb-4">
              Patient History
            </h2>

            {/* Form */}
            <PatientHistoryForm />



            {/* Buttons */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                type="button"
                onClick={closeModal}
                className="btn bg-gray-300 text-black p-4 rounded"
              >
                Close
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="btn bg-blue-500 text-white p-4 rounded"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
