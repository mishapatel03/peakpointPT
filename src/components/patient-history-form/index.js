import React, { useState } from "react";
import { TextField, Checkbox } from "@mui/material";
import Select from "react-select";

export default function PatientHistoryForm() {
  const [inputs, setInputs] = useState({
    bodyPart: null,
    radiatingArea: null,
    symptom: null,
    durationValue: null,
    durationUnit: null,
    cause: null,
    jerkOn: null,
    imaging: null,
    imagingReason: null,
    careon: null,
    careonReason: null,
    erVisitDate: null,
    treatment: null,
    treatmentDate: null,
    erReason: null,
    treatmentEffect: null,
    treatmentType: null
  });

  const [checkboxes, setCheckboxes] = useState({
    line1: false,
    line2: false,
    line3: false,
    line4: false,
    line5: false,
    line6: false
  });

  const bodyParts = [
    "NECK",
    "Left Shoulder",
    "Right Shoulder",
    "BL Shoulder",
    "Left Elbow",
    "Right Elbow",
    "BL Elbow",
    "Left Wrist/Hand",
    "Right Wrist/Hand",
    "BL Wrist/Hand",
    "Mid back",
    "Lower back",
    "Left Hip",
    "Right Hip",
    "BL Hip",
    "Left Knee",
    "Right Knee",
    "BL Knee",
    "Left Ankle/Foot",
    "Right Ankle/Foot",
    "BL Ankle/Foot",
  ];
  const radiatingAreas = ["BLE", "BUE", "LLE", "LUE"];
  const symptoms = ["tingling", "numbness", "burning"];
  const durationUnits = ["days", "months", "years"];
  const causes = [
    "MVA",
    "Fall",
    "Lifting heavy weight",
    "getting a jerk on ____",
  ];
  const treatments = [
    "injection",
    "chiropractic treatment",
    "Physical or Occupational Therapy",
  ];

  const handleChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (line) => {
    setCheckboxes((prev) => ({
      ...prev,
      [line]: !prev[line], // Toggle only the specific checkbox
    }));
  };

  const generateSentence = () => {
    const {
      bodyPart,
      radiatingArea,
      symptom,
      durationValue,
      durationUnit,
      cause,
      imaging,
      imagingReason,
      careon,
      careonReason,
      erVisitDate,
      erReason,
      treatment,
      treatmentDate,
      treatmentEffect,
      treatmentType
    } = inputs;

    let sentence = "";

    if (checkboxes.line1) {
      sentence += `Patient presents with ${bodyPart || "___"} ${radiatingArea ? `along with radiating to ${radiatingArea}` : ""
        } with ${symptom || "___"}. `;
    }

    if (checkboxes.line2) {
      sentence += `Pain has been present since ${durationValue || "___"} ${durationUnit || "___"
        }`;
    }

    if (checkboxes.line3) {
      sentence += ` due to ${cause} without any injury. `
    }

    if (checkboxes.line4) {
      sentence += `Patient did take Xray/MRI on ${imaging}, which shows ${imagingReason}`;
    }

    if (checkboxes.line5) {
      sentence += `Patient went to ER/Urgent care on ${careon} due to ${careonReason}`;
    }

    if (checkboxes.line6) {
      sentence += `Pt has taken ${treatment} on ${treatmentType} which has helped ${treatmentEffect}.`
    }

    return sentence.trim();
  };

  const customSelectStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 50,
    }),
    container: (provided) => ({
      ...provided,
      position: "relative",
    }),
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      {/* Line 1 */}
      <div>
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line1}
          onChange={() => handleCheckboxChange("line1")}
        />
        <span className="text-lg font-medium">Patient presents with:</span>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <Select
            options={bodyParts.map((part) => ({ value: part, label: part }))}
            onChange={(selected) => handleChange("bodyPart", selected?.value)}
            placeholder="Body Part"
            styles={customSelectStyles}
          />
          <Select
            options={radiatingAreas.map((area) => ({
              value: area,
              label: area,
            }))}
            onChange={(selected) =>
              handleChange("radiatingArea", selected?.value)
            }
            placeholder="Radiating Area"
            styles={customSelectStyles}
          />
          <Select
            options={symptoms.map((symptom) => ({
              value: symptom,
              label: symptom,
            }))}
            onChange={(selected) => handleChange("symptom", selected?.value)}
            placeholder="Symptom"
            styles={customSelectStyles}
          />
        </div>
      </div>

      {/* Line 2 */}
      <div>
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line2}
          onChange={() => handleCheckboxChange("line2")}
        />
        <span className="text-lg font-medium">Pain duration:</span>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <TextField
            label="Duration Value"
            type="number"
            variant="outlined"
            onChange={(e) => handleChange("durationValue", e.target.value)}
          />
          <Select
            options={durationUnits.map((unit) => ({
              value: unit,
              label: unit,
            }))}
            onChange={(selected) => handleChange("durationUnit", selected?.value)}
            placeholder="Duration Unit"
            styles={customSelectStyles}
          />
        </div>
      </div>

      {/* Line 3 */}
      <div>
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line3}
          onChange={() => handleCheckboxChange("line3")}
        />
        <span className="text-lg font-medium">Cause:</span>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <Select
            options={causes.map((unit) => ({
              value: unit,
              label: unit,
            }))}
            onChange={(selected) => handleChange("cause", selected?.value)}
            placeholder="Cause"
            styles={customSelectStyles}
          />
          <TextField
            label="Jerk on"
            type="text"
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("jerkOn", e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line4}
          onChange={() => handleCheckboxChange("line4")}
        />
        <span className="text-lg">Patient did take Xray/MRI on</span>
        <input
          type="text"
          placeholder=""
          className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
          onChange={(e) => handleChange("imaging", e.target.value)}
        />
        <span className="text-lg">which shows </span>
        <input
          type="text"
          placeholder=""
          className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
          onChange={(e) => handleChange("imagingReason", e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line5}
          onChange={() => handleCheckboxChange("line5")}
        />
        <span className="text-lg">Patient went to ER/Urgent care on </span>
        <input
          type="text"
          placeholder=""
          className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
          onChange={(e) => handleChange("careon", e.target.value)}
        />
        <span className="text-lg">Due to</span>
        <input
          type="text"
          placeholder=""
          className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
          onChange={(e) => handleChange("careonReason", e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line6}
          onChange={() => handleCheckboxChange("line6")}
        />
        <span className="text-lg">Patient has taken </span>
        <Select
          options={["injection", "chiropractic treatment", "Physical or Occupational Therapy "].map((unit) => ({
            value: unit,
            label: unit,
          }))}
          onChange={(selected) => handleChange("treatment", selected?.value)}
          placeholder="Treatment"
          styles={customSelectStyles}
        />
        <span className="text-lg">on</span>
        <input
          type="text"
          placeholder=""
          className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
          onChange={(e) => handleChange("treatmentType", e.target.value)}
        />
        <span className="text-lg">which helped</span>
        <input
          type="text"
          placeholder=""
          className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
          onChange={(e) => handleChange("treatmentEffect", e.target.value)}
        />
      </div>

      {/* Line 4 */}
      {/* <div>
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line4}
          onChange={() => handleCheckboxChange("line4")}
        />
        <span className="text-lg font-medium">Imaging Details:</span>
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleChange("imagingDate", e.target.value)}
        />
      </div> */}

      {/* Line 5 */}
      {/* <div>
        <Checkbox
          style={{ paddingLeft: 0 }}
          checked={checkboxes.line5}
          onChange={() => handleCheckboxChange("line5")}
        />
        <span className="text-lg font-medium">ER Visit and Treatment:</span>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <TextField
            label="ER Visit Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleChange("erVisitDate", e.target.value)}
          />
          <TextField
            label="Reason"
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("erReason", e.target.value)}
          />
          <Select
            options={treatments.map((treatment) => ({
              value: treatment,
              label: treatment,
            }))}
            onChange={(selected) => handleChange("treatment", selected?.value)}
            placeholder="Treatment"
            styles={customSelectStyles}
          />
          <TextField
            label="Treatment Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleChange("treatmentDate", e.target.value)}
          />
          <TextField
            label="Effect"
            variant="outlined"
            fullWidth
            onChange={(e) => handleChange("treatmentEffect", e.target.value)}
          />
        </div>
      </div> */}

      {/* Display Sentence */}
      <div className="pt-4">
        <strong>Generated Sentence:</strong>
        <p className="mt-2 bg-gray-100 p-4 rounded-md">{generateSentence()}</p>
      </div>
    </div>
  );
}
