import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setFormField } from "../../slices/formSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

const SocialForm = ({ handleClose, GENDER, HTYPE }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(null);
  const [buildingType, setBuildingType] = useState(null);
  const [stairs, setStairs] = useState("");
  const [workAs, setWorkAs] = useState("");
  const [workCondition, setWorkCondition] = useState("");
  const [hhaActivity, setHhaActivity] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [checkedStates, setCheckedStates] = useState({
    stairs: false,
    work: false,
    hha: false,
  });
  const [isExpanded, setIsExpanded] = useState(false); // Manage expand/collapse
  const dispatch = useDispatch();

  const generateMainSentence = () => {
    if (age && gender && buildingType) {
      return `Patient is ${age} years old ${gender.value} who lives in ${buildingType.value}.`;
    }
    return "";
  };

  const updateGeneratedText = () => {
    const sentences = [];
    if (checkedStates.stairs && stairs) {
      sentences.push(`Patient has ${stairs} stairs to reach the apt.`);
    }
    if (checkedStates.work && workAs && workCondition) {
      sentences.push(`Patient works as ${workAs} and has to ${workCondition}.`);
    }
    if (checkedStates.hha && hhaActivity) {
      sentences.push(
        `Patient has HHA, who helps with some functional activities, like ${hhaActivity}.`
      );
    }
    setGeneratedText(`${generateMainSentence()} ${sentences.join(" ")}`.trim());
  };

  const handleInputChange = (field, value, key) => {
    switch (key) {
      case "stairs":
        setStairs(value);
        setCheckedStates((prev) => ({ ...prev, stairs: Boolean(value) }));
        break;
      case "workAs":
        setWorkAs(value);
        setCheckedStates((prev) => ({
          ...prev,
          work: Boolean(value && workCondition),
        }));
        break;
      case "workCondition":
        setWorkCondition(value);
        setCheckedStates((prev) => ({
          ...prev,
          work: Boolean(workAs && value),
        }));
        break;
      case "hhaActivity":
        setHhaActivity(value);
        setCheckedStates((prev) => ({ ...prev, hha: Boolean(value) }));
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (key, checked) => {
    setCheckedStates((prev) => ({ ...prev, [key]: checked }));
  };

  // Update generatedText whenever relevant fields change
  useEffect(() => {
    updateGeneratedText();
  }, [
    age,
    gender,
    buildingType,
    stairs,
    workAs,
    workCondition,
    hhaActivity,
    checkedStates,
  ]);

  // Automatically save generatedText to form field whenever it changes
  useEffect(() => {
    if (generatedText) {
      dispatch(setFormField({ field: "social", value: generatedText }));
    }
  }, [generatedText, dispatch]);

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
        <div className="text-lg font-bold">Social</div>
      </div>

      {/* Animated form container */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="w-full max-w-4xl bg-white rounded-lg p-4">
          <div className="text-lg font-bold mt-2">Patient Info :</div>
          <div className="grid pb-4 grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <TextField
              label="Enter Age"
              variant="standard"
              type="number"
              className="w-32"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Select
              name="gender"
              options={GENDER}
              placeholder="Select Gender"
              value={gender}
              onChange={(selectedOption) => setGender(selectedOption)}
            />
            <Select
              name="buildingType"
              options={HTYPE}
              placeholder="Select Building"
              value={buildingType}
              onChange={(selectedOption) => setBuildingType(selectedOption)}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={checkedStates.stairs}
                onChange={(e) =>
                  handleCheckboxChange("stairs", e.target.checked)
                }
              />
              <span>Patient has</span>
              <input
                type="number"
                value={stairs}
                onChange={(e) =>
                  handleInputChange("stairs", e.target.value, "stairs")
                }
                className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
              />
              <span>stairs to reach the apt.</span>
            </div>
            {/* Other form fields */}
          </div>

          <div className="pt-4">
            <strong>Generated Sentence:</strong>
            <textarea
              value={generatedText}
              className="mt-2 bg-gray-100 p-4 rounded-md"
              onChange={(e) => setGeneratedText(e.target.value)}
              placeholder="Generated sentence will appear here"
              style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default SocialForm;
