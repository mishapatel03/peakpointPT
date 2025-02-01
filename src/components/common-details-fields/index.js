import React, { useEffect, useState } from "react";
import Select from "react-select";
import { TextField } from "@mui/material";
import { DX, GENDER, HTYPE, PMH, testResults } from "../../constants/data";
import { TEXT_AREA, TEXT_INPUT } from "../../constants";
import TextInput from "../../shared-components/TextInput";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import { FaLightbulb, FaMicrochip, FaPencil, FaRobot } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import PatientHistory from "../pateint-history";
import CreatableSelect from "react-select/creatable";
import { setFormField } from "../../slices/formSlice";
import SocialForm from "../social-form";
import axios from "axios";
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

export default function CommonDetailsFields() {
  const dispatch = useDispatch();
  const dxValues = useSelector((state) => state.form.formData.DX || []);
  const pmhValues = useSelector((state) => state.form.formData.pmh || []);
  const formData = useSelector((state) => state.form.formData || {});
  const [open, setOpen] = React.useState(false);
  const [selectedDXOptions, setSelectedDXOptions] = useState([]);
  const [selectedPMHoptions, setSelectedPMHOptions] = useState([]);
  const [isChange, setChange] = useState(false);
  const [inputs, setInputs] = useState({
    allergies: "",
    medications: "",
    psh: "",
    testResults: "",
    subjective: "",
    painScale: "",
  });

  const [correctedText, setCorrectedText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (dxValues.length === 0) {
      setSelectedDXOptions([]);
    }
    if (pmhValues.length === 0) {
      setSelectedPMHOptions([]);
    }
    setInputs((prev) => ({
      ...prev,
      allergies: formData?.allergies || "",
      medications: formData?.medications || "",
      psh: formData?.psh || "",
      testResults: formData?.testResults || "",
      subjective: formData?.subjective || "",
      painScale: formData?.painScale || "",
    }));
  }, [dxValues, formData, pmhValues]);

  const handleDXChange = (selected) => {
    setSelectedDXOptions(selected);
    setChange(true)
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

  const handleSelectChange = (selectedOption) => {
    handleChange("testResults", selectedOption ? { label: selectedOption.label, value: selectedOption.label } : null);
  };

  const CustomOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", cursor: "pointer" }}
      >
        <span>{data.label}</span>
        <a href={data.value} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "blue", textDecoration: "underline" }} onClick={(e) => e.stopPropagation()}>
          Open
        </a>
      </div>
    );
  };

  const checkGrammar = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + process.env.REACT_APP_GEMINI_API_KEY,
        {
          contents: [
            {
              parts: [
                {
                  text: `Paraphrase the following sentence with correct grammar: ${inputs.subjective}`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const field = "subjective";
      const value =
        response?.data.candidates[0]?.content?.parts[0]?.text.trim();
      setInputs((prev) => ({
        ...prev,
        [field]: value,
      }));
      dispatch(setFormField({ field, value }));
      setCorrectedText(
        response?.data.candidates[0]?.content?.parts[0]?.text.trim()
      );
    } catch (error) {
      console.error("Error correcting grammar:", error);
      setCorrectedText("Error: Unable to correct grammar.");
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="mb-4">
        <div className="mt-7">
          <div className="text-lg font-bold mb-2 ">DX</div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="items-center border-2 rounded-[5px]">
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
              {selectedDXOptions && selectedDXOptions.length < 2 && isChange && (<p style={{ color: "red" }}>Please select at least 2 DX</p>)}
            </div>
          </div>
        </div>
        <div className="mt-7 border-2 rounded-lg p-4 bg-white shadow-md">
          <PatientHistory />
          {/* // <div className="mt-2 text-lg">{formData?.patientHistoryValue}</div> */}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-7">
          <div>
            <div className="text-lg font-bold mb-2 ">Allergies</div>
            <input
              value={inputs.allergies}
              type={"text"}
              placeholder={`Enter Allergies`}
              onChange={(e) => handleChange("allergies", e.target.value)}
              className="input border-2 rounded-[5px]  bg-white input-bordered w-full focus:border-blue-500 focus:outline-none placeholder-gray-500 py-1 h-10"
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2 ">Medications</div>
            <input
              value={inputs.medications}
              type={"text"}
              placeholder={`Enter Medication`}
              onChange={(e) => handleChange("medications", e.target.value)}
              className="input border-2 rounded-[5px]  bg-white input-bordered w-full focus:border-blue-500 focus:outline-none placeholder-gray-500 py-1 h-10"
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">PMH</div>
            <div className="w-full  border-2 rounded-[5px]">
              <CreatableSelect
                value={selectedPMHoptions}
                onChange={handlePMHChange}
                isMulti
                name="colors"
                options={PMH.map((option) => ({
                  label: option,
                  value: option,
                }))}
                className="max-w-lg basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
          <div>
            <div className="text-lg font-bold mb-2">PSH</div>
            <input
              value={inputs.psh}
              type={"text"}
              placeholder={`Enter PSH`}
              onChange={(e) => handleChange("psh", e.target.value)}
              className="input border-2 rounded-[5px]  bg-white input-bordered w-full focus:border-blue-500 focus:outline-none placeholder-gray-500 py-1 h-10"
            />
          </div>
        </div>
        <div className="mt-7 bg-white">
          <div className="mt-7  p-4 shadow-md">
            <SocialForm
              handleClose={handleClose}
              GENDER={GENDER}
              HTYPE={HTYPE}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="mt-7">
            <div className="text-lg font-bold mb-2">Test Results</div>

            <Select
              value={formData.testResults}
              isClearable={true}
              onChange={handleSelectChange}
              options={testResults}
              placeholder="Please select.."
              components={{ Option: CustomOption }}
              getOptionLabel={(e) => e.label}
            />
          </div>

          <div className="mt-7">
            <div className="text-lg font-bold mb-2 ">
              Pain scale: None 0-1-2-3-4-5-6-7-8-9-10 Worst
            </div>
            <input
              value={inputs.painScale}
              type={"text"}
              placeholder={`Enter Scale`}
              onChange={(e) => handleChange("painScale", e.target.value)}
              className="input border-2 rounded-[5px  bg-white input-bordered w-full focus:border-blue-500 focus:outline-none placeholder-gray-500 py-1 h-10"
            />
          </div>
        </div>
        <div className="mt-7">
          <div className="flex items-center text-lg font-bold">
            <span>Subjective</span>
            <span className="cursor-pointer text-gray-600 hover:text-black ml-2">
              <FaLightbulb size={15} onClick={checkGrammar} title="AI Assistance" />
            </span>
          </div>
          <textarea
            value={inputs.subjective}
            type="text"
            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
            placeholder="Enter subjective"
            onChange={(e) => handleChange("subjective", e.target.value)}
            className="bg-white p-4 rounded-md  border-2 rounded-[5px]"
          />
        </div>
      </div>
      {open && (
        <SocialForm handleClose={handleClose} GENDER={GENDER} HTYPE={HTYPE} />
      )}
    </React.Fragment>
  );
}
