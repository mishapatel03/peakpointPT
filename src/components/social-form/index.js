import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setFormField } from "../../slices/formSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

const SocialForm = ({ handleClose, GENDER, HTYPE }) => {
  const [generatedText, setGeneratedText] = useState("");
  const [checkedStates, setCheckedStates] = useState({
    stairs: false,
    work: false,
    hhaActivity: false,
  });
  const [inputs, setInputs] = useState({
    age: "",
    gender: "",
    buildingType: "",
    stairs: "",
    workProfession: "",
    workToDo: "",
    hhaActivity: ""
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData || {});
  const [additionalComment, setAdditionalComment] = useState("");
  const [isEditingSentence, setIsEditingSentence] = useState(false);

  const generateMainSentence = () => {
    if (inputs.age && inputs.gender && inputs.buildingType) {
      return `Patient is ${inputs.age} years old ${inputs.gender} who lives in ${inputs.buildingType}.`;
    }
    return "";
  };

  useEffect(() => {
    setInputs((prev) => ({
      ...prev,
      age: formData?.age || "",
      gender: formData?.gender || "",
      buildingType: formData?.buildingType || "",
      stairs: formData?.stairs || "",
      workProfession: formData?.workProfession || "",
      workToDo: formData?.workToDo || "",
      hhaActivity: formData?.hhaActivity || ""
    }));
    if (formData?.social == "") {
      setAdditionalComment("");
    }
  }, [formData])

  const handleSentenceChange = (e) => {
    setGeneratedText(e.target.value);
    setIsEditingSentence(true);
  };

  const updateGeneratedText = () => {
    const sentences = [];
    if (checkedStates.stairs) {
      sentences.push(`Patient has ${inputs.stairs} stairs to reach the ${inputs.buildingType || "apartment"}.`);
    }
    if (checkedStates.work) {
      sentences.push(`Patient works as ${inputs.workProfession} and has to ${inputs.workToDo}.`);
    }
    if (checkedStates.hhaActivity) {
      sentences.push(
        `Patient has HHA, who helps with some activities, like ${inputs.hhaActivity}.`
      );
    }
    setGeneratedText(`${generateMainSentence()} ${sentences.join(" ")}`.trim() + " " + additionalComment.trim());
  };

  const handleInputChange = (field, value) => {
    if (isEditingSentence) return;
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
    dispatch(setFormField({ field: field, value: value || "" }));
  }

  const resetEditing = () => {
    setIsEditingSentence(false);
    updateGeneratedText();
  };

  const handleCheckboxChange = (key, checked) => {
    if (isEditingSentence) return;
    setCheckedStates((prev) => ({ ...prev, [key]: checked }));
  };

  useEffect(() => {
    if (!isEditingSentence) {
      updateGeneratedText();
    }
  }, [inputs, additionalComment, checkedStates]);

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
      <div className="flex items-center space-x-2">
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
        className={`transition-all duration-500 ease-in-out overflow-scroll ${isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="w-full max-w-4xl bg-white p-4">
          <fieldset disabled={isEditingSentence}>
            <div className="text-lg font-bold mt-2">Patient Info :</div>
            <div className="grid pb-4 grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <TextField
                label="Enter Age"
                variant="standard"
                type="number"
                className="w-32"
                value={inputs.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
              />
              <div className="border-2 rounded-[5px] ">
                <Select
                  isClearable={true}
                  name="gender"
                  options={GENDER}
                  placeholder="Select Gender"
                  value={inputs.gender ? { value: inputs.gender, label: inputs.gender } : null}
                  onChange={(selectedOption) => handleInputChange("gender", selectedOption?.value)}
                />
              </div>
              <div className="border-2 rounded-[5px] ">
                <Select
                  isClearable={true}
                  name="buildingType"
                  options={HTYPE}
                  placeholder="Select Building"
                  value={inputs.buildingType ? { value: inputs.buildingType, label: inputs.buildingType } : null}
                  onChange={(selectedOption) => handleInputChange("buildingType", selectedOption?.value)}
                />
              </div>
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
                  value={inputs.stairs}
                  onChange={(e) =>
                    handleInputChange("stairs", e.target.value)
                  }
                  className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                />
                <span>stairs to reach the {inputs.buildingType || "apartment"}.</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={checkedStates.work}
                  onChange={(e) =>
                    handleCheckboxChange("work", e.target.checked)
                  }
                />
                <span>Patient works as</span>
                <input
                  type="text"
                  value={inputs.workProfession}
                  onChange={(e) =>
                    handleInputChange("workProfession", e.target.value)
                  }
                  className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                />
                <span>and has to</span>
                <input
                  type="text"
                  value={inputs.workToDo}
                  onChange={(e) =>
                    handleInputChange("workToDo", e.target.value)
                  }
                  className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                />
              </div>

            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={checkedStates.hhaActivity}
                  onChange={(e) =>
                    handleCheckboxChange("hhaActivity", e.target.checked)
                  }
                />
                <span>Patient has HHA, who helps with some activities, like</span>
                <input
                  type="text"
                  value={inputs.hhaActivity}
                  onChange={(e) =>
                    handleInputChange("hhaActivity", e.target.value)
                  }
                  className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                />
              </div>
            </div>

            <div className="mt-2">
              <p className="text-lg font-medium">Additional Comments</p>
              <textarea
                value={additionalComment}
                onChange={(e) => setAdditionalComment(e.target.value)}
                className="bg-gray-100 p-4 rounded-md border-2 rounded-[5px] border-gray-400"
                placeholder="Generated sentence will appear here"
                style={{ width: "100%", minHeight: "50px" }}
              />
            </div>
          </fieldset>
          <div className="mt-2">
            <strong>Generated Sentence:</strong>
            <span className="text-red-700 ml-2">(Warning: If you edit this field, all fields above will be disabled. Proceed with caution.)</span>
            <textarea
              value={generatedText}
              onChange={handleSentenceChange}
              className="bg-gray-100 p-4 rounded-md border-2 rounded-[5px] border-gray-400"
              placeholder="Generated sentence will appear here"
              style={{ width: "100%", minHeight: "50px" }}
            />
            {isEditingSentence && (
              <button
                onClick={resetEditing}
                className="mt-2 bg-blue-500 text-white p-2 rounded-md"
              >
                Reset & Enable Fields
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialForm;
