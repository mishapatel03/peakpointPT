import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import PatientHistoryForm from "../patient-history-form";

export default function PatientHistory() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Header with toggle button */}
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={toggleExpand}
          className={`btn text-white p-2 rounded ${isExpanded ? "bg-red-500 hover:bg-red-600" : "bg-[#2d9c21] hover:bg-[#237c1a]"}`}
          aria-expanded={isExpanded}
        >
          {isExpanded ? <FaMinus size={17} /> : <FaPlus size={17} />}
        </button>
        <div className="text-lg font-bold">Patient History</div>
      </div>

      {/* Animated form container */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-scroll ${isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="w-full max-w-screen-xl bg-white rounded-lg p-4">
          <PatientHistoryForm />
        </div>
      </div>
    </>
  );
}
