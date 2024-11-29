import React, { useEffect, useState } from "react";
import { TextField, Checkbox } from "@mui/material";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setFormField } from "../../slices/formSlice";
import { bodyParts, causes, durationUnits, radiatingAreas, symptoms } from "../../constants/data";

export default function PatientHistoryForm() {
  const dispatch = useDispatch();
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
  const formData = useSelector((state) => state.form.formData || [""]);
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    if (formData?.patientHistoryValue !== undefined) {
      setSentence(formData.patientHistoryValue)
    }
  }, [formData?.patientHistoryValue]);
  useEffect(() => {
    if (formData?.patientHistoryValue !== undefined) {
      setSentence(formData.patientHistoryValue)
    }
  }, []);

  const handleChange = (field, value) => {
    if (field === "bodyPart" || field === "symptom") {
      setInputs((prev) => ({
        ...prev,
        [field]: value.map((item) => item.value),
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [field]: value,
      }));
    }

    const fieldToCheckboxMap = {
      line1: ["bodyPart", "symptom", "radiatingArea"],
      line2: ["durationValue", "durationUnit"],
      line3: ["cause", "jerkOn"],
      line4: ["imaging", "imagingReason"],
      line5: ["careon", "careonReason"],
      line6: ["treatment", "treatmentType", "treatmentEffect"],
    };

    Object.keys(fieldToCheckboxMap).forEach((checkboxKey) => {
      if (fieldToCheckboxMap[checkboxKey].includes(field)) {
        setCheckboxes((prev) => ({
          ...prev,
          [checkboxKey]: fieldToCheckboxMap[checkboxKey].some(
            (key) => inputs[key] || key === field && value
          ),
        }));
      }
    });
  };
  
  useEffect(() => {
    if (sentence.trim()) {
      dispatch(setFormField({ field: "patientHistoryValue", value: sentence }));
    }
  }, [sentence, dispatch]);



  useEffect(() => {
    generateSentence();
  }, [inputs, checkboxes]);

  const handleCheckboxChange = (line) => {
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [line]: !prev[line] };
      return updatedCheckboxes;
    });
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
      treatment,
      treatmentEffect,
      treatmentType,
    } = inputs;

    let sentence = "";

    if (checkboxes.line1) {
      let bodyPartsText = bodyPart?.length
        ? bodyPart.length === 1
          ? bodyPart[0]
          : `${bodyPart.slice(0, -1).join(", ")} and ${bodyPart[bodyPart.length - 1]}`
        : "___";

      let symptomsPartsText = symptom?.length
        ? symptom.length === 1
          ? symptom[0]
          : `${symptom.slice(0, -1).join(", ")} and ${symptom[symptom.length - 1]}`
        : "___";

      sentence += `Patient presents with ${bodyPartsText} ${radiatingArea ? `along with radiating to ${radiatingArea}` : ""
        } with ${symptomsPartsText}. `;
    }

    if (checkboxes.line2) {
      sentence += `Pain has been present since ${durationValue || "___"} ${durationUnit || "___"
        }. `;
    }

    if (checkboxes.line3) {
      sentence += `Due to ${cause || "___"} ${inputs.jerkOn ? `getting a jerk on ${inputs.jerkOn}` : "without any injury"
        }. `;
    }

    if (checkboxes.line4) {
      sentence += `Patient did take Xray/MRI on ${imaging || "___"}, which shows ${imagingReason || "___"
        }. `;
    }

    if (checkboxes.line5) {
      sentence += `Patient went to ER/Urgent care on ${careon || "___"} due to ${careonReason || "___"
        }. `;
    }

    if (checkboxes.line6) {
      sentence += `Patient has taken ${treatment || "___"} on ${treatmentType || "___"
        }, which has helped ${treatmentEffect || "___"}. `;
    }

    setSentence(sentence.trim());
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
    <div className="grid grid-cols-1 gap-6 mt-4">
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
            isMulti={true}
            options={bodyParts.map((part) => ({ value: part, label: part }))}
            onChange={(selected) => handleChange("bodyPart", selected)}
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
            isMulti={true}
            onChange={(selected) => handleChange("symptom", selected)}
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

      {/* Display Sentence */}
      <div className="pt-4">
        <strong>Generated Sentence:</strong>
        <textarea
          key={sentence}
          className="mt-2 bg-gray-100 p-4 rounded-md"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="Generated sentence will appear here"
          style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
        />

      </div>
    </div>
  );
}
