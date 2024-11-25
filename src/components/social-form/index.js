import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";

const SocialForm = ({ handleClose, GENDER, HTYPE }) => {
    // State for main fields
    const [age, setAge] = useState("");
    const [gender, setGender] = useState(null);
    const [buildingType, setBuildingType] = useState(null);

    // State for checkbox selections
    const [paragraph, setParagraph] = useState([]);
    const [stairs, setStairs] = useState("");
    const [workAs, setWorkAs] = useState("");
    const [workCondition, setWorkCondition] = useState("");
    const [hhaActivity, setHhaActivity] = useState("");
    const [checkedStates, setCheckedStates] = useState({
        stairs: false,
        work: false,
        hha: false,
    });

    // Generate main sentence
    const generateMainSentence = () => {
        if (age && gender && buildingType) {
            return `Patient is ${age} years old ${gender.value} who lives in ${buildingType.value}.`;
        }
        return "";
    };

    // Dynamically calculate if checkboxes should be enabled
    const isCheckboxEnabled = {
        stairs: stairs !== "",
        work: workAs !== "" && workCondition !== "",
        hha: hhaActivity !== "",
    };

    const handleCheckboxToggle = (field) => {
        setCheckedStates((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleCheckboxChange = (sentence, checked) => {
        if (checked) {
            setParagraph((prev) => [...prev, sentence]);
        } else {
            setParagraph((prev) => prev.filter((item) => item !== sentence));
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            aria-labelledby="patient-history-modal"
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-box w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <h2 id="patient-history-modal" className="text-2xl font-bold mb-6">
                    Social
                </h2>

                {/* Main Form */}
                <div className="pl-4 text-lg">Patient Info : </div>
                <div className="grid pl-4 pb-4 grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    {/* Age */}
                    <div className="flex items-center">
                        <TextField
                            label="Enter Age"
                            variant="standard"
                            type="number"
                            className="w-32"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Gender
                        </label>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            name="gender"
                            options={GENDER}
                            placeholder="Select Gender"
                            value={gender}
                            onChange={(selectedOption) => setGender(selectedOption)}
                        />
                    </div>

                    {/* Building Type */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Building Type
                        </label>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            name="buildingType"
                            options={HTYPE}
                            placeholder="Select Building"
                            value={buildingType}
                            onChange={(selectedOption) => setBuildingType(selectedOption)}
                        />
                    </div>
                </div>

                {/* Additional Fields */}
                <div className="space-y-4">
                    {/* Stairs */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={checkedStates.stairs}
                            onChange={(e) => {
                                handleCheckboxChange(
                                    `Patient has ${stairs} stairs to reach the apt.`,
                                    e.target.checked
                                );
                                handleCheckboxToggle("stairs");
                            }}
                            disabled={!isCheckboxEnabled.stairs}
                        />
                        <span className="text-lg">Patient has</span>
                        <input
                            type="number"
                            placeholder=""
                            className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                            value={stairs}
                            onChange={(e) => setStairs(e.target.value)}
                        />
                        <span className="text-lg">stairs to reach the apt</span>
                    </div>

                    {/* Work */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={checkedStates.work}
                            onChange={(e) => {
                                handleCheckboxChange(
                                    `Patient works as ${workAs} and has to ${workCondition}.`,
                                    e.target.checked
                                );
                                handleCheckboxToggle("work");
                            }}
                            disabled={!isCheckboxEnabled.work}
                        />
                        <span className="text-lg">Patient works as</span>
                        <input
                            type="text"
                            placeholder=""
                            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                            value={workAs}
                            onChange={(e) => setWorkAs(e.target.value)}
                        />
                        <span className="text-lg">and has to</span>
                        <input
                            type="text"
                            placeholder=""
                            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                            value={workCondition}
                            onChange={(e) => setWorkCondition(e.target.value)}
                        />
                    </div>

                    {/* HHA */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={checkedStates.hha}
                            onChange={(e) => {
                                handleCheckboxChange(
                                    `Patient has HHA, who helps with some functional activities, like ${hhaActivity}.`,
                                    e.target.checked
                                );
                                handleCheckboxToggle("hha");
                            }}
                            disabled={!isCheckboxEnabled.hha}
                        />
                        <span className="text-lg">
                            Patient has HHA, who helps with some functional activities, like
                        </span>
                        <input
                            type="text"
                            placeholder=""
                            className="w-60 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                            value={hhaActivity}
                            onChange={(e) => setHhaActivity(e.target.value)}
                        />
                    </div>
                </div>

                {/* Combined Sentence */}
                <div className="mt-6 p-4 bg-gray-100 rounded-md text-lg">
                    <strong>Generated Paragraph:</strong>
                    <p className="mt-2">
                        {generateMainSentence()} {paragraph.join(" ")}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6 space-x-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialForm;
