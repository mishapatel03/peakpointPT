import React, { useState } from "react";
import { TextField } from "@mui/material";
import Select from "react-select";
import { setFormField } from "../../slices/formSlice";
import { useDispatch } from "react-redux";

export default function PatientHistoryForm() {
  const [inputs, setInputs] = useState({
    bodyPart: null,
    side: null,
    radiatingArea: null,
    symptom: null,
    durationValue: null,
    durationUnit: null,
    cause: null,
    imaging: null,
    treatment: null,
    treatmentEffect: null,
  });

  const bodyParts = [
    "NECK",
    "Shoulder",
    "Elbow",
    "Wrist/Hand",
    "Mid back",
    "Lower back",
    "Hip",
    "Knee",
    "Ankle/Foot",
  ];
  const sides = ["Lt", "Rt", "BL"];
  const radiatingAreas = ["BLE", "BUE", "LLE", "LUE"];
  const symptoms = ["tingling", "numbness", "burning", "pain"];
  const durationUnits = ["days", "months", "years"];
  const causes = [
    "MVA",
    "Fall",
    "Lifting heavy weight",
    "getting a jerk on ___",
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

  const dispatch = useDispatch();
 // Custom styles for react-select to prevent overlap
 const customSelectStyles = {
  menu: (provided) => ({
    ...provided,
    zIndex: 50, // Ensures the dropdown menu is above other elements
  }),
  container: (provided) => ({
    ...provided,
    position: 'relative', // Avoids clipping inside parent
  }),
};

  const generateSentence = () => {
    const {
      bodyPart,
      side,
      radiatingArea,
      symptom,
      durationValue,
      durationUnit,
      cause,
      imaging,
      treatment,
      treatmentEffect,
    } = inputs;

    let sentence = `Patient present with ${side || ""} ${bodyPart || "..."} ${
      radiatingArea
        ? `along with radiating to ${radiatingArea} with ${symptom || "..."},`
        : ""
    } since ${durationValue || "..."} ${durationUnit || "..."}.`;

    sentence += ` Due to ${cause || "unknown cause"},`;
    sentence += imaging ? ` patient did take ${imaging}.` : "";
    sentence += treatment
      ? ` He/she has taken ${treatment}, which has ${
          treatmentEffect +` effect` || "has no effect."
        }`
      : "";

    return sentence.trim();
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Body Part */}
      
      <Select
        options={bodyParts.map((part) => ({ value: part, label: part }))}
        onChange={(selected) => handleChange("bodyPart", selected?.value)}
        placeholder="Select Body Part"
        label="Treatment Effect"
        styles={customSelectStyles}
        className="w-full"
      />

      {/* Side */}
      <Select
        options={sides.map((side) => ({ value: side, label: side }))}
        onChange={(selected) => handleChange("side", selected?.value)}
        placeholder="Select Side (Lt/Rt/BL)"
        styles={customSelectStyles}
        className="w-full"
      />

      {/* Radiating Area */}
      <Select
        options={radiatingAreas.map((area) => ({ value: area, label: area }))}
        onChange={(selected) => handleChange("radiatingArea", selected?.value)}
        placeholder="Select Radiating Area"
        className="w-full"
        styles={customSelectStyles}
      />

      {/* Symptom */}
      <Select
        options={symptoms.map((symptom) => ({
          value: symptom,
          label: symptom,
        }))}
        onChange={(selected) => handleChange("symptom", selected?.value)}
        placeholder="Select Symptom"
        className="w-full"
        styles={customSelectStyles}
      />

      {/* Duration Value */}
      <TextField
        label="Duration Value"
        variant="outlined"
        type="number"
        fullWidth
        onChange={(e) => handleChange("durationValue", e.target.value)}
      />

      {/* Duration Unit */}
      <Select
        options={durationUnits.map((unit) => ({ value: unit, label: unit }))}
        onChange={(selected) => handleChange("durationUnit", selected?.value)}
        placeholder="Duration Unit"
        className="w-full"
        styles={customSelectStyles}
      />

      {/* Cause */}
      <Select
        options={causes.map((cause) => ({ value: cause, label: cause }))}
        onChange={(selected) => handleChange("cause", selected?.value)}
        placeholder="Cause"
        className="w-full"
        styles={customSelectStyles}
      />

      {/* Imaging */}
      <TextField
        label="Imaging (Xray/MRI)"
        variant="outlined"
        fullWidth
        onChange={(e) => handleChange("imaging", e.target.value)}
      />

      {/* Treatment */}
      <Select
        options={treatments.map((treatment) => ({
          value: treatment,
          label: treatment,
        }))}
        onChange={(selected) => handleChange("treatment", selected?.value)}
        placeholder="Treatment"
        className="w-full"
        styles={customSelectStyles}
      />

      {/* Treatment Effect */}
      <TextField
        label="Treatment Effect"
        variant="outlined"
        fullWidth
        onChange={(e) => handleChange("treatmentEffect", e.target.value)}
      />

      {/* Generate Button */}
      <div className="col-span-2 text-center">
        {/* <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md w-full"
          onClick={() => alert(generateSentence())}
        >
          Generate Sentence
        </button> */}
        {/* Display Sentence */}
        <div className="pt-4 text-lg">
          <strong>History : </strong> {generateSentence()}
        </div>
      </div>
    </div>
  );
}
