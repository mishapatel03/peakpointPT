import React, { useState } from "react";
import Select from "react-select";
import { TextField } from "@mui/material";
import { DX, GENDER, HTYPE, PMH } from "../../constants/data";
import { TEXT_AREA, TEXT_INPUT } from "../../constants";
import TextInput from "../../shared-components/TextInput";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import { FaPencil } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import PatientHistory from "../pateint-history";
import CreatableSelect from "react-select/creatable";
import { setFormField } from "../../slices/formSlice";
import SocialForm from "../social-form";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CommonDetailsFields() {
  const dispatch = useDispatch();
  const dxValues = useSelector((state) => state.form.formData.dxValues || [""]);
  const formData = useSelector((state) => state.form.formData || [""]);
  const [open, setOpen] = React.useState(false);
  const [selectedDXOptions, setSelectedDXOptions] = useState([]);
  const [selectedPMHoptions, setSelectedPMHOptions] = useState([]);
  const [inputs, setInputs] = useState({
    allergies: null,
    medications: null,
    psh: null,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDXChange = (selected) => {
    setSelectedDXOptions(selected);
    const formattedValues = selected.map((option) => option.value);
    dispatch(setFormField({ field: "DX", value: formattedValues }));
  };

  const handlePMHChange = (selected) => {
    setSelectedPMHOptions(selected);
    const formattedValues = selected.map((option) => option.value);
    dispatch(setFormField({ field: "pmh", value: formattedValues }));
  };

  const handleChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
    dispatch(setFormField({ field, value }));
  };

  return (
    <React.Fragment>
      <div className="mb-4">
        <div className="mt-5">
          <div className="text-lg font-bold mb-2 ">DX</div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {dxValues.length &&
              dxValues.map((value, index) => (
                <div key={index} className="items-center">
                  <CreatableSelect
                    isMulti
                    placeholder={"Select or Add new DX"}
                    options={DX.map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    value={selectedDXOptions}
                    onChange={handleDXChange}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mt-5 border rounded-lg p-4">
          <PatientHistory />
          {/* // <div className="mt-2 text-lg">{formData?.patientHistoryValue}</div> */}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <div className="text-lg font-bold mb-2 ">Allergies</div>
            <TextInput
              onChange={(e) => handleChange("allergies", e)}
              type={"text"}
              placeholder={`Enter Allergies`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2 ">Medications</div>
            <TextInput
              onChange={(e) => handleChange("medications", e)}
              type={"text"}
              placeholder={`Enter Medication`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">PMH</div>
            <CreatableSelect
              value={selectedPMHoptions}
              onChange={handlePMHChange}
              isMulti
              name="colors"
              options={PMH.map((option) => ({ label: option, value: option }))}
              className="max-w-lg basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">PSH</div>
            <TextInput
              onChange={(e) => handleChange("psh", e)}
              type={"text"}
              placeholder={`Enter PSH`}
              inputBox={TEXT_INPUT}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="mt-5 border rounded-lg p-4">
            <SocialForm
              handleClose={handleClose}
              GENDER={GENDER}
              HTYPE={HTYPE}
            />
          </div>
          {/* <div className="mt-2 text-lg">{formData?.social}</div> */}
        </div>
        <div className="mt-5">
          <div className="text-lg font-bold mb-2  ">Test Results</div>
          <TextInput
            onChange={(e) => handleChange("testResults", e)}
            type={"text"}
            placeholder={`Enter Test results`}
            inputBox={TEXT_INPUT}
          />
        </div>
        <div className="mt-5">
          <div className="text-lg font-bold mb-2 ">Subjective</div>
          <TextInput
            onChange={(e) => handleChange("subjective", e)}
            type={"date"}
            placeholder={`Enter subjective`}
            inputBox={TEXT_AREA}
          />
        </div>
        <div>
          <div className="text-lg font-bold mb-2 ">
            Pain scale: None 0-1-2-3-4-5-6-7-8-9-10 Worst
          </div>
          <TextInput
            type={"text"}
            placeholder={`Enter Scale`}
            inputBox={TEXT_INPUT}
          />
        </div>
      </div>
      {
        open && (
          <SocialForm handleClose={handleClose} GENDER={GENDER} HTYPE={HTYPE} />
        )
        // (
        //   <div
        //     className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        //     aria-labelledby="patient-history-modal"
        //     role="dialog"
        //     aria-modal="true"
        //   >
        //     <div className="modal-box w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        //       <h2 id="patient-history-modal" className="text-2xl font-bold mb-6">
        //         Social
        //       </h2>

        //       {/* Main Form */}
        //       <div className="pl-4 text-lg">Patient Info : </div>
        //       <div className="grid pl-4 pb-4 grid-cols-1 md:grid-cols-4 gap-4 items-center">
        //         {/* Age */}
        //         <div className="flex items-center">
        //           <TextField
        //             label="Enter Age"
        //             variant="standard"
        //             type="number"
        //             className="w-32"
        //           />
        //         </div>

        //         {/* Gender */}
        //         <div>
        //           <label className="block mb-1 text-sm font-medium text-gray-700">
        //             Gender
        //           </label>
        //           <Select
        //             className="basic-single"
        //             classNamePrefix="select"
        //             name="gender"
        //             options={GENDER}
        //             placeholder="Select Gender"
        //           />
        //         </div>

        //         {/* History Type */}
        //         <div>
        //           <label className="block mb-1 text-sm font-medium text-gray-700">
        //             Building Type
        //           </label>
        //           <Select
        //             className="basic-single"
        //             classNamePrefix="select"
        //             name="history-type"
        //             options={HTYPE}
        //             placeholder="Select Building"
        //           />
        //         </div>
        //       </div>

        //       {/* Additional Fields */}
        //       <div className="space-y-4">
        //         {/* Stairs */}
        //         <div className="flex items-center space-x-2">
        //           <Checkbox {...label} />
        //           <span className="text-lg">Patient has</span>
        //           <input
        //             type="number"
        //             placeholder=""
        //             className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
        //           />
        //           <span className="text-lg">stairs to reach the apt</span>
        //         </div>

        //         {/* Work */}
        //         <div className="flex items-center space-x-2">
        //           <Checkbox {...label} />
        //           <span className="text-lg">Patient works as</span>
        //           <input
        //             type="text"
        //             placeholder=""
        //             className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
        //           />
        //           <span className="text-lg">and has to</span>
        //           <input
        //             type="text"
        //             placeholder=""
        //             className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
        //           />
        //         </div>

        //         {/* HHA */}
        //         <div className="flex items-center space-x-2">
        //           <Checkbox {...label} />
        //           <span className="text-lg">
        //             Patient has HHA, who helps with some functional activities, like
        //           </span>
        //           <input
        //             type="text"
        //             placeholder=""
        //             className="w-60 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
        //           />
        //         </div>
        //       </div>

        //       {/* Buttons */}
        //       <div className="flex justify-end mt-6 space-x-4">
        //         <button
        //           type="button"
        //           onClick={handleClose}
        //           className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
        //         >
        //           Close
        //         </button>
        //         <button
        //           type="button"
        //           onClick={handleClose}
        //           className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        //         >
        //           Done
        //         </button>
        //       </div>
        //     </div>
        //   </div>

        // )
      }
    </React.Fragment>
  );
}
