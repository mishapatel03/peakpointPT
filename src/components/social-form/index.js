import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setFormField } from "../../slices/formSlice";

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
            sentences.push(`Patient has HHA, who helps with some functional activities, like ${hhaActivity}.`);
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
                setCheckedStates((prev) => ({ ...prev, work: Boolean(value && workCondition) }));
                break;
            case "workCondition":
                setWorkCondition(value);
                setCheckedStates((prev) => ({ ...prev, work: Boolean(workAs && value) }));
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

    useEffect(() => {
        updateGeneratedText();
    }, [age, gender, buildingType, stairs, workAs, workCondition, hhaActivity, checkedStates]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="modal-box w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Social</h2>

                <div className="pl-4 text-lg">Patient Info :</div>
                <div className="grid pl-4 pb-4 grid-cols-1 md:grid-cols-4 gap-4 items-center">
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
                            onChange={(e) => handleCheckboxChange("stairs", e.target.checked)}
                        />
                        <span>Patient has</span>
                        <input
                            type="number"
                            value={stairs}
                            onChange={(e) => handleInputChange("stairs", e.target.value, "stairs")}
                            className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                        />
                        <span>stairs to reach the apt.</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={checkedStates.work}
                            onChange={(e) => handleCheckboxChange("work", e.target.checked)}
                        />
                        <span>Patient works as</span>
                        <input
                            type="text"
                            value={workAs}
                            onChange={(e) => handleInputChange("work", e.target.value, "workAs")}
                            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                        />
                        <span>and has to</span>
                        <input
                            type="text"
                            value={workCondition}
                            onChange={(e) => handleInputChange("work", e.target.value, "workCondition")}
                            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={checkedStates.hha}
                            onChange={(e) => handleCheckboxChange("hha", e.target.checked)}
                        />
                        <span>Patient has HHA, who helps with activities like</span>
                        <input
                            type="text"
                            value={hhaActivity}
                            onChange={(e) => handleInputChange("hha", e.target.value, "hhaActivity")}
                            className="w-60 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <textarea
                        className="w-full p-2 border rounded"
                        rows="4"
                        value={generatedText}
                        onChange={(e) => setGeneratedText(e.target.value)}
                    ></textarea>
                </div>

                <div className="flex justify-end mt-6 space-x-4">
                    <button
                        onClick={handleClose}
                        className="bg-gray-200 px-4 py-2 rounded"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => {
                            dispatch(setFormField({ field: "social", value: generatedText }));
                            handleClose();
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialForm;
