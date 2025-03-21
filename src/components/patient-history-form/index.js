import React, { useEffect, useState } from "react";
import { TextField, Checkbox } from "@mui/material";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setFormField } from "../../slices/formSlice";
import { bodyParts, causes, durationUnits, radiatingAreas, symptoms } from "../../constants/data";

export default function PatientHistoryForm() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    bodyParts: [],
    radiatingArea: "",
    symptoms: [],
    durationValue: "",
    durationUnit: "",
    cause: "",
    jerkOn: "",
    imaging: "",
    imagingReason: "",
    careon: "",
    careonReason: "",
    erVisitDate: "",
    treatment: "",
    treatmentDate: "",
    treatmentEffect: "",
    treatmentType: ""
  });
  const [checkboxes, setCheckboxes] = useState({
    line1: false,
    line2: false,
    line3: false,
    line4: false,
    line5: false,
    line6: false,
    line7: false
  });
  const formData = useSelector((state) => state.form.formData || {});
  const [sentence, setSentence] = useState("");
  const [additionalComment, setAdditionalComment] = useState("");
  const [isEditingSentence, setIsEditingSentence] = useState(false);
  const [comments, setComments] = useState("None Reported");
  const [radioSelection, setRadioSelection] = useState("");

  const fieldToCheckboxMap = {
    line1: ["bodyParts", "symptoms", "radiatingArea"],
    line2: ["durationValue", "durationUnit"],
    line3: ["cause", "jerkOn"],
    line4: ["imaging", "imagingReason"],
    line5: ["careon", "careonReason"],
    line6: ["treatment", "treatmentType", "treatmentEffect"],
  };

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

  useEffect(() => {
    // Update inputs based on formData
    setInputs((prev) => ({
      ...prev,
      bodyParts: formData?.bodyParts?.length ? prev.bodyParts : [],
      radiatingArea: formData?.radiatingArea || "",
      durationValue: formData?.durationValue || "",
      symptoms: formData?.symptoms?.length ? prev.symptoms : [],
      durationUnit: formData?.durationUnit || "",
      cause: formData?.cause || "",
      jerkOn: formData?.jerkOn || "",
      imagingReason: formData?.imagingReason || "",
      imaging: formData?.imaging || "",
      careonReason: formData?.careonReason || "",
      careon: formData?.careon || "",
      treatment: formData?.treatment || "",
      treatmentType: formData?.treatmentType || "",
      treatmentEffect: formData?.treatmentEffect || "",
    }));
    if (formData?.patientHistoryValue == "") {
      setAdditionalComment("");
    }
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev };
      Object.keys(fieldToCheckboxMap).forEach((checkboxKey) => {
        const relatedFields = fieldToCheckboxMap[checkboxKey];
        const hasData = relatedFields.some((key) => {
          const value = formData?.[key];
          return Array.isArray(value) ? value.length > 0 : !!value;
        });
        updatedCheckboxes[checkboxKey] = hasData;
      });
      return updatedCheckboxes;
    });
  }, [formData]);

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
    setIsEditingSentence(true);
  };

  const resetEditing = () => {
    setIsEditingSentence(false);
    generateSentence();
  };

  const handleChange = (field, value) => {
    if (isEditingSentence) return;

    if (field === "bodyParts" || field === "symptoms") {
      setInputs((prev) => ({
        ...prev,
        [field]: value.map((item) => item.value),
      }));
      dispatch(setFormField({ field: field, value: value.map((item) => item.value) || [] }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [field]: value,
      }));
      dispatch(setFormField({ field: field, value: value || "" }));
    }

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
  }, [sentence]);

  useEffect(() => {
    if (!isEditingSentence) {
      generateSentence();
    }
  }, [inputs, checkboxes, additionalComment, radioSelection]);

  const handleCheckboxChange = (line) => {
    setCheckboxes((prev) => {
      const updatedCheckboxes = { ...prev, [line]: !prev[line] };
      return updatedCheckboxes;
    });
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setRadioSelection(value);
    setComments(value === "Yes" ? "" : "None reported"); // Reset comments when No is selected
  };

  const generateSentence = () => {
    const {
      bodyParts,
      radiatingArea,
      symptoms,
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
      let bodyPartsText = bodyParts?.length
        ? bodyParts.length === 1
          ? bodyParts[0]
          : `${bodyParts.slice(0, -1).join(", ")} and ${bodyParts[bodyParts.length - 1]}`
        : ".";

      let symptomsPartsText = symptoms?.length
        ? symptoms.length === 1
          ? `with ${symptoms[0]}`
          : `with  ${symptoms.slice(0, -1).join(", ")} and ${symptoms[symptoms.length - 1]}`
        : "";

      sentence += `Patient presents with pain in ${bodyPartsText} ${radiatingArea ? `along with radiating symptoms to ${radiatingArea}` : ""
        } ${symptomsPartsText}.`;
    }

    if (checkboxes.line2) {
      sentence += `Pain has been present since ${durationValue || ""} ${durationUnit || ""
        }. `;
    }

    if (checkboxes.line3) {
      sentence += `Due to ${cause || ""}. `;
    }

    if (checkboxes.line4) {
      sentence += `Patient did take Xray/MRI on ${imaging || ""}, which shows ${imagingReason || ""
        }. `;
    }

    if (checkboxes.line5) {
      sentence += `Patient went to ER/Urgent care on ${careon || ""} due to ${careonReason || ""
        }. `;
    }

    if (checkboxes.line6) {
      sentence += `Patient has taken ${treatment || ""} on ${treatmentType || ""
        }, which has helped ${treatmentEffect || ""}. `;
    }

    if (checkboxes.line7) {
      sentence += `Prior physical therapy history for current condition: ${radioSelection === "Yes" ? `${comments}` : "None reported"
        }`
    }

    setSentence(sentence.trim() + " " + additionalComment.trim());
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
    <div className="w-full max-w-4xl bg-white p-4">
      {/* Line 1 */}
      <fieldset disabled={isEditingSentence}>

        <div>
          <Checkbox
            style={{ paddingLeft: 0 }}
            checked={checkboxes.line1}
            onChange={() => handleCheckboxChange("line1")}
          />
          <span className="text-lg font-medium">Patient presents with pain in :</span>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border-2 rounded-[5px] border-gray-400">
              <Select
                isClearable={true}
                isMulti={true}
                value={inputs.bodyParts.map((item) => ({ value: item, label: item }))}
                options={bodyParts.map((part) => ({ value: part, label: part }))}
                onChange={(selected) => handleChange("bodyParts", selected)}
                placeholder="Body Part"
                styles={customSelectStyles}
              />
            </div>
            <div className="border-2 rounded-[5px] border-gray-400">
              <Select
                isClearable={true}
                value={inputs.radiatingArea ? { value: inputs.radiatingArea, label: inputs.radiatingArea } : null}
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
            </div>
            <div className="border-2 rounded-[5px] border-gray-400">
              <Select
                isClearable={true}
                value={inputs.symptoms.map((item) => ({ value: item, label: item }))}
                options={symptoms.map((symptom) => ({
                  value: symptom,
                  label: symptom,
                }))}
                isMulti={true}
                onChange={(selected) => handleChange("symptoms", selected)}
                placeholder="Symptoms"
                styles={customSelectStyles}
              />
            </div>
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
          <div className="mt-2 w-full">
            <div className="flex items-center space-x-4">
              <input
                value={inputs.durationValue}
                type={"number"}
                placeholder={`Duration Value`}
                onChange={(e) => handleChange("durationValue", e.target.value)}
                className="input border-2 rounded-[5px] border-gray-400 bg-white input-bordered w-full focus:border-blue-500 focus:outline-none placeholder-gray-500 py-1 h-10"
              />
              <div className="w-full border-2 rounded-[5px] border-gray-400">
                <Select
                  isClearable={true}
                  value={inputs.durationUnit ? { value: inputs.durationUnit, label: inputs.durationUnit } : null}
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
          <div className="mt-2 w-full">
            <div className="flex items-center space-x-4">
              <div className="w-full  border-2 rounded-[5px] border-gray-400">
                <Select
                  isClearable={true}
                  value={inputs.cause ? { value: inputs.cause, label: inputs.cause } : null}
                  options={causes.map((unit) => ({
                    value: unit,
                    label: unit,
                  }))}
                  onChange={(selected) => handleChange("cause", selected?.value)}
                  placeholder="Cause"
                  styles={customSelectStyles}
                />
              </div>
              {/* <input
                value={inputs.jerkOn}
                type={"text"}
                placeholder={`Jerk on`}
                onChange={(e) => handleChange("jerkOn", e.target.value)}
                className="input border-2 rounded-[5px] border-gray-400 bg-white input-bordered w-full focus:border-blue-500 focus:outline-none placeholder-gray-500 py-1 h-10"
              /> */}
            </div>
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
            value={inputs.imaging}
            type="text"
            placeholder=""
            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
            onChange={(e) => handleChange("imaging", e.target.value)}
          />
          <span className="text-lg">which shows </span>
          <input
            value={inputs.imagingReason}
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
            value={inputs.careon}
            type="text"
            placeholder=""
            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
            onChange={(e) => handleChange("careon", e.target.value)}
          />
          <span className="text-lg">Due to</span>
          <input
            value={inputs.careonReason}
            type="text"
            placeholder=""
            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
            onChange={(e) => handleChange("careonReason", e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Checkbox
              style={{ paddingLeft: 0 }}
              checked={checkboxes.line7}
              onChange={() => handleCheckboxChange("line7")}
            />

            <span className="text-lg">Prior physical therapy history for current condition</span>

            <div className="flex ml-2 gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Yes"
                  checked={radioSelection === "Yes"}
                  onChange={handleRadioChange}
                  className="mr-1"
                />
                Yes
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  value="No"
                  checked={radioSelection === "No"}
                  onChange={handleRadioChange}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </div>

          {radioSelection === "Yes" && (
            <textarea
              placeholder="Enter comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="mt-2 ml-8 p-2 border rounded-md w-full border-2 border-gray-300 focus:border-blue-500 outline-none text-lg"
            />
          )}

        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            style={{ paddingLeft: 0 }}
            checked={checkboxes.line6}
            onChange={() => handleCheckboxChange("line6")}
          />
          <span className="text-lg">Patient has taken </span>
          <Select
            isClearable={true}
            value={inputs.treatment ? { value: inputs.treatment, label: inputs.treatment } : ""}
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
            value={inputs.treatmentType}
            type="text"
            placeholder=""
            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
            onChange={(e) => handleChange("treatmentType", e.target.value)}
          />
          <span className="text-lg">which helped</span>
          <input
            value={inputs.treatmentEffect}
            type="text"
            placeholder=""
            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
            onChange={(e) => handleChange("treatmentEffect", e.target.value)}
          />
        </div>

        {/* Display Sentence */}
        <div>
          <p className="text-lg font-medium">Additional Comments</p>
          <textarea
            value={additionalComment}
            onChange={(e) => setAdditionalComment(e.target.value)}
            className="bg-gray-100 p-4 rounded-md border-2 rounded-[5px] border-gray-400"
            placeholder="Enter Comments"
            style={{ width: "100%", minHeight: "50px" }}
          />
        </div>
      </fieldset>

      <div className="">
        <strong>Generated Sentence:</strong>
        <span className="text-red-700 ml-2">(Warning: If you edit this field, all fields above will be disabled. Proceed with caution.)</span>
        <textarea
          value={sentence}
          onChange={handleSentenceChange}
          className="bg-gray-100 p-4 rounded-md border-2 rounded-[5px] border-gray-400"
          placeholder="Generated sentence will appear here"
          style={{ width: "100%", minHeight: "50px" }}
        />
        {isEditingSentence && (<button
          onClick={resetEditing}
          className="mt-2 bg-blue-500 text-white p-2 rounded-md"
        >
          Reset & Enable Fields
        </button>)}
      </div>


    </div>
  );
}
