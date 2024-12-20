import React, { useState } from "react";
import HeaderFields from "../header-fields";
import PatientData from "../../shared-components/PatientData";
import { PDFViewer } from "@react-pdf/renderer";
import { patientData } from "../../constants/data";
import CommonDetailsFields from "../common-details-fields";
import ObjectiveFormFields from "../objective-form-fields";
import AppHeader from "../app-header";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, validateForm } from "../../slices/formSlice";
import CustomPDFParser from "../pdf-parser";

export default function BasicForm() {
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    dispatch(validateForm());
  };

  const handleResetForm = () => {
    dispatch(resetForm());
  }

  return (
    <React.Fragment>
      <div data-theme="light">
        <AppHeader />
        <div className="flex h-[87vh]">
          <div className="mt-5 mx-20 flex-1 p-5 overflow-y-auto relative bg-white text-black">
            <HeaderFields />
            <CommonDetailsFields />
            <ObjectiveFormFields />
            <div className="flex sticky bottom-[-20px] justify-center bg-white p-2">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn w-48 bg-slate-800 mr-2 text-white p-2 rounded hover:bg-black"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setPreviewVisible(true)}
                className="btn w-48  text-black mr-2 border-black p-2 rounded"
              >
                Preview
              </button>
              <button
                type="button"
                onClick={() => handleResetForm()}
                className="btn w-48  text-black border-black p-2 rounded"
              >
                Reset
              </button>
              {/* <div>
                <CustomPDFParser/>
              </div> */}

            </div>
          </div>
          {isPreviewVisible && (
            <div className="mt-5 mx-10 flex-1 p-5 overflow-y-auto relative bg-gray-300">
              <div className="flex justify-end mb-2.5">
                <button
                  type="button"
                  onClick={() => setPreviewVisible(false)}
                  className="btn w-48 bg-red-700 text-white p-2 rounded hover:bg-red-900"
                >
                  Close
                </button>
              </div>
              <PDFViewer className="w-full h-[82vh]">
                <PatientData data={formData} />
              </PDFViewer>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
