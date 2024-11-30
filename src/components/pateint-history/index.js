import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import PatientHistoryForm from "../patient-history-form";
import { useSelector } from "react-redux";

export default function PatientHistory() {
  const [isExpanded, setIsExpanded] = useState(false);
  const formData = useSelector((state) => state.form.formData || [""]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Header with toggle button */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          type="button"
          onClick={toggleExpand}
          className="btn text-black p-2 rounded"
          aria-expanded={isExpanded}
        >
          {isExpanded ? <FaMinus size={15} /> : <FaPlus size={15} />}
        </button>
        <div className="text-lg font-bold">Patient History</div>
      </div>

      {/* Animated form container */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full max-w-screen-xl bg-white rounded-lg p-4">
          <PatientHistoryForm />
        </div>
      </div>
    </>
  );
}
