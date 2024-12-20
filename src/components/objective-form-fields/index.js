import React, { useEffect, useState } from 'react'
import { MVMT, arom, balance, bodyPartConfig, days, duration, functionalStatus, gait, goals, palpation, specialTest, stregthDetails, testResult, yesNo } from '../../constants/data'
import Select from "react-select";
import { TEXT_AREA, TEXT_INPUT } from '../../constants';
import TextInput from '../../shared-components/TextInput';
import { TextField, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { setFormField } from '../../slices/formSlice';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { bodyPartDetails } from "../../constants/data"

const options = [
    { value: "Mid back", label: "Mid back" },
    { value: "LB", label: "LB" },
    { value: "Lumbar spine", label: "Lumbar spine" },
    { value: "Toes", label: "Toes" },
    { value: "Shoulder", label: "Shoulder" },
    { value: "Neck", label: "Neck" },
    { value: "Cervical spine", label: "Cervical spine" },
    { value: "Thoracic spine", label: "Thoracic spine" },
    { value: "Finger", label: "Finger" },
    { value: "Hip", label: "Hip" },
    { value: "Knee", label: "Knee" },
    { value: "Elbow", label: "Elbow" },
    { value: "Ankle", label: "Ankle" },
    { value: "Wrist", label: "Wrist" },
];

export default function ObjectiveFormFields() {
    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle visibility
    const bodyParts = useSelector((state) => state.form.formData.bodyParts || []);
    const symptoms = useSelector((state) => state.form.formData.symptoms || []);
    const [grades, setGrades] = useState({});
    const [coordinate, setCoordinate] = useState("Static balance: Good? \n If ICD 10 has Gait abnormality, it should also come here Dynamic balance: ??	")
    const [sensation, setSensation] = useState("");
    const [skin, setSkin] = useState("");
    const [pulse, setPulse] = useState("Normal");
    const [girth, setGirth] = useState("Normal??");
    const [posture, setPosture] = useState("Forward head, Round shoulder, ??");

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

    const [selectedValues, setSelectedValues] = useState({
        0: null,
        1: null,
        2: null,
    });

    useEffect(() => {
        if (symptoms && symptoms.length && (symptoms.includes('tingling') || symptoms.includes('numbness'))) {
            setSensation("radiating pain with numbness and tingling traveling down LLE");
        }
    }, [symptoms])


    useEffect(() => {
        setGrades({});
    }, [bodyParts]);

    const [formData, setFormData] = useState({
        "Neck": {},
        "LB": {},
        "Mid back": {},
        "Cervical spine": {},
        "Lumbar spine": {},
        "Thoracic spine": {},
        "Finger": {},
        "Toes": {},
        "Shoulder": {},
        "Hip": {},
        "Knee": {},
        "Elbow": {},
        "Ankle": {},
        "Wrist": {}
    });

    const handleChange = (index, selected) => {
        setSelectedValues((prev) => ({ ...prev, [index]: selected?.value || null }));
    };

    const handleGradeInputChange = (bodyPart, value) => {
        setGrades((prevGrades) => ({
            ...prevGrades,
            [bodyPart]: value,
        }));
    };

    const handleInputChange = (bodyPart, movement, value) => {
        setFormData((prev) => {
            const updatedFormData = {
                ...prev,
                [bodyPart]: {
                    ...prev[bodyPart],
                    [movement]: value,
                },
            };

            // Automatically dispatch the updated formData to Redux store
            const output = Object.keys(updatedFormData).reduce((result, bodyPart) => {
                const movements = updatedFormData[bodyPart];
                result[bodyPart] = Object.keys(movements).reduce((movResult, movement) => {
                    movResult[movement] = movements[movement] || "";
                    return movResult;
                }, {});
                return result;
            }, {});

            dispatch(setFormField({ field: "arom", value: output }));

            return updatedFormData;
        });
    };

    return (
        <React.Fragment>
            <div className="text-xl font-bold bg-gray-200 p-2 rounded-[5px]">OBJECTIVE</div>
            <div className='mt-5'>
                <div className="text-lg font-bold ">Gait</div>
                <Select
                    options={gait.map((part) => ({ value: part, label: part }))}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">Posture</div>
                <textarea
                    className="mt-2 bg-gray-100 p-4 rounded-md border-gray-400 border-2 rounded-[5px]"
                    value={posture}
                    placeholder={`Enter Posture details`}
                    onChange={(e) => setPosture(e.target.value)}
                    style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                />
            </div>
            <div className="mt-5 border rounded-lg p-4 border-gray-400 border-2 rounded-[5px]">
                {/* Header with toggle button */}
                <div className="text-lg font-bold">AROM / ACTIVE MVMT</div>

                {/* Collapsible content with animation */}

                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="space-y-4">
                            <div className="border-2 rounded-[5px] border-gray-400">
                                <Select
                                    isClearable={true}
                                    options={options}
                                    onChange={(selected) => handleChange(index, selected)}
                                    placeholder="Select Body Part"
                                /></div>
                            {selectedValues[index] &&
                                bodyPartConfig[selectedValues[index]].map(({ movement, showPostfix, postfixVal }) => (
                                    <div key={movement} className="flex items-center space-x-2">
                                        <span className="text-lg font-medium">{movement}</span>
                                        {showPostfix ? (
                                            <>
                                                <input
                                                    type="number"
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            selectedValues[index],
                                                            movement,
                                                            e.target.value + postfixVal
                                                        )
                                                    }
                                                    className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                />
                                                <span className="text-lg font-medium">{postfixVal}</span>
                                            </>
                                        ) : (
                                            <input
                                                type="text"
                                                onChange={(e) =>
                                                    handleInputChange(selectedValues[index], movement, e.target.value)
                                                }
                                                className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                            />
                                        )}
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                    <div className="text-lg font-bold">Joint mobs</div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        {bodyParts && bodyParts.length ? <React.Fragment>{
                            bodyParts.map((bodyPart, index) => (
                                <div key={index} className="mb-2">
                                    <p>
                                        {bodyPart === "NECK" || bodyPart === "Lower back" || bodyPart === "Mid back" ? (
                                            <>
                                                All glides {bodyPartDetails[bodyPart]} Grade{" "}
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                    onChange={(e) => handleInputChange(bodyPart, e.target.value)}
                                                />
                                                &nbsp; &gt; pain and guarded
                                            </>
                                        ) : (
                                            <>
                                                PA {bodyPartDetails[bodyPart]} Grade{" "}
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                    onChange={(e) => handleInputChange(bodyPart, e.target.value)}
                                                />
                                                &nbsp; &gt; pain and guarded
                                            </>
                                        )}
                                    </p>
                                </div>
                            ))
                        }</React.Fragment> : <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                            Please select any body part from the Patient History above.
                        </div>}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold">Strength</div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        {bodyParts && bodyParts.length ? <React.Fragment>
                            {bodyParts.map((bodyPart, index) => (
                                <div key={index} className="mb-2">
                                    <p>{stregthDetails[bodyPart]}</p>
                                </div>
                            ))}</React.Fragment> : <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                            Please select any body part from the Patient History above.
                        </div>}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold">Palpation</div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        {bodyParts && bodyParts.length ? <React.Fragment>
                            {bodyParts.map((bodyPart, index) => (
                                <div key={index} className="mb-2">
                                    <p>{palpation[bodyPart]}</p>
                                </div>
                            ))}</React.Fragment> : <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                            Please select any body part from the Patient History above.
                        </div>}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold">Tone</div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        {bodyParts && bodyParts.length ? <React.Fragment>
                            {bodyParts.map((bodyPart, index) => (
                                <div key={index} className="mb-2">
                                    <p>{palpation[bodyPart]}</p>
                                </div>
                            ))}</React.Fragment> : <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                            Please select any body part from the Patient History above.
                        </div>}
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                <div className="text-lg font-bold ">COORDINATION / BALANCE</div>
                <div className=''>
                    <textarea
                        className="mt-2 bg-gray-100 p-4 rounded-md"
                        value={coordinate}
                        onChange={(e) => setCoordinate(e.target.value)}
                        placeholder=""
                        style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                    />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">REFLEXES</div>
                <div className=''>
                    Intact
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5">

                <div className='mt-5'>
                    <div className="text-lg font-bold ">SENSATION</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={sensation}
                            onChange={(e) => setSensation(e.target.value)}
                            placeholder=""
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>

                <div className='mt-5'>
                    <div className="text-lg font-bold ">SKIN</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={skin}
                            onChange={(e) => setSkin(e.target.value)}
                            placeholder=""
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold ">PULSES</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={pulse}
                            onChange={(e) => setPulse(e.target.value)}
                            placeholder=""
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold ">GIRTH</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={girth}
                            onChange={(e) => setGirth(e.target.value)}
                            placeholder=""
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='grid grid-cols-2 gap-4 mt-5'>

                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold ">PHYSICIAN CERTIFICATION</div>
                        <TextInput
                            type={'date'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold ">THERAPIST'S SIGNATURE</div>
                        <TextInput
                            type={'date'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
