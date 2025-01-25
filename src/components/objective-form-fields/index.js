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
    const formAllData = useSelector((state) => state.form.formData || {});
    const bodyParts = useSelector((state) => state.form.formData.bodyParts || []);
    const currentJointMobsValues = useSelector((state) => state.form.formData.jointMobsValues || []);
    const symptoms = useSelector((state) => state.form.formData.symptoms || []);
    const [grades, setGrades] = useState({});
    const [sensation, setSensation] = useState("");
    const [strengthValues, setStrengthValues] = useState([]);
    const [palpationValues, setPalpationValues] = useState([]);
    const [inputs, setInputs] = useState({
        gait: "",
        posture: "Forward head, Round shoulder, ??",
        coordinate: "Static balance: Good? \n If ICD 10 has Gait abnormality, it should also come here Dynamic balance: ??",
        sensation: "",
        skin: "",
        pulse: "Normal",
        girth: "Normal??"
    });
    const [selectedValues, setSelectedValues] = useState({
        0: null,
        1: null,
        2: null,
    });
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

    useEffect(() => {
        setInputs((prev) => ({
            ...prev,
            gait: formAllData?.gait?.value || "",
            posture: formAllData?.posture || "",
            coordinate: formAllData?.coordinate || "",
            sensation: formAllData?.sensation || "",
            skin: formAllData?.skin || "",
            pulse: formAllData?.pulse || "",
            girth: formAllData?.girth || ""
        }));

        if (formAllData.arom && Object.keys(formAllData.arom).length === 0) {
            setSelectedValues({
                0: null,
                1: null,
                2: null,
            })
        }
    }, [formAllData])

    useEffect(() => {
        const uniqueStrengths = [
            ...new Set(bodyParts.map((bodyPart) => stregthDetails[bodyPart]).filter(Boolean)),
        ];
        setStrengthValues(uniqueStrengths);
        dispatch(setFormField({ field: "strengthValues", value: uniqueStrengths }));

        const uniquePalpations = [
            ...new Set(bodyParts.map((bodyPart) => palpation[bodyPart]).filter(Boolean)),
        ];
        setPalpationValues(uniquePalpations);
        dispatch(setFormField({ field: "palpationValues", value: uniquePalpations }));
    }, [bodyParts, dispatch]);

    useEffect(() => {
        if (symptoms && symptoms.length && (symptoms.includes('tingling') || symptoms.includes('numbness'))) {
            setSensation("radiating pain with numbness and tingling traveling down LLE");
        }
    }, [symptoms])

    useEffect(() => {
        setGrades({});
    }, [bodyParts]);

    const normalizeKey = (key) => key.toLowerCase();

    // Create a lookup object with normalized keys
    const normalizedBodyPartDetails = Object.keys(bodyPartDetails).reduce(
        (acc, key) => {
            acc[normalizeKey(key)] = bodyPartDetails[key];
            return acc;
        },
        {}
    );

    const uniqueParts = Array.from(
        new Set(
            bodyParts
                .map((part) => normalizedBodyPartDetails[normalizeKey(part)])
                .filter((detail) => detail)
        )
    );

    const handleInputFieldChange = (field, value) => {
        setInputs((prev) => ({
            ...prev,
            [field]: value,
        }));
        dispatch(setFormField({ field, value }));
    };

    const handleChange = (index, selected) => {
        setSelectedValues((prev) => ({ ...prev, [index]: selected?.value || null }));
    };

    const handleGradeInputChange = (bodyPart, value) => {
        setGrades((prevGrades) => ({
            ...prevGrades,
            [bodyPart]: value,
        }));
    };

    const handleJointMobsChange = (bodyPart, value) => {
        let sentenceVal = "";
        if (["C2-7", "L2-5", "Mid back"].includes(bodyPart)) {
            sentenceVal = `PA ${bodyPart} Grade ${value} > pain and guarded`;
        } else {
            sentenceVal = `All glides ${bodyPart} Grade ${value} > pain and guarded`;
        }
        const updatedJointMobsValues = currentJointMobsValues.filter(
            (sentence) => !sentence.includes(bodyPart)
        );
        updatedJointMobsValues.push(sentenceVal);
        dispatch(setFormField({ field: "jointMobsValues", value: updatedJointMobsValues }));
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
            <div className='mt-7'>
                <div className="text-lg font-bold ">Gait</div>
                <Select
                    isClearable={true}
                    value={formAllData.gait}
                    onChange={(e) => handleInputFieldChange("gait", e)}
                    options={gait.map((part) => ({ value: part, label: part }))}
                    placeholder="Please select.."
                />
            </div>

            <div className='mt-7'>
                <div className="text-lg font-bold ">Posture</div>
                <textarea
                    className="mt-2 bg-gray-100 p-4 rounded-md  border-2 rounded-[5px]"
                    value={inputs.posture}
                    placeholder={`Enter Posture details`}
                    onChange={(e) => handleInputFieldChange("posture", e.target.value)}
                    style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                />
            </div>
            <div className="bg-white mt-7 shadow-mg p-4 border-2 rounded-[5px]">
                <div className="text-lg font-bold">Arom / Active Movement</div>
                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="space-y-4">
                            <div className="border-2 rounded-[5px] ">
                                <Select
                                    value={options.find((option) => option.value === selectedValues[index]) || null}
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

            <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                    <div className="text-lg font-bold">Joint mobs</div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                {uniqueParts.map((details, index) => (
                                    <div key={index} className="mb-2">
                                        <p>
                                            {["C2-7", "L2-5", "Mid back"].includes(details) ? (
                                                <>
                                                    PA {details} Grade{" "}
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                        onChange={(e) =>
                                                            handleJointMobsChange(details, e.target.value)
                                                        }
                                                    />
                                                    &nbsp; &gt; pain and guarded
                                                </>
                                            ) : (
                                                <>
                                                    All glides {details} Grade{" "}
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                        onChange={(e) =>
                                                            handleJointMobsChange(details, e.target.value)
                                                        }
                                                    />
                                                    &nbsp; &gt; pain and guarded
                                                </>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ) : (
                            <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                                Please select any body part from the Patient History above.
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold">Strength</div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                {strengthValues.map((strength, index) => (
                                    <div key={index} className="mb-2">
                                        <p>{strength}</p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ) : (
                            <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                                Please select any body part from the Patient History above.
                            </div>
                        )}
                    </div>
                </div>


                <div>
                    <div className="text-lg font-bold">Palpation</div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                {palpationValues.map((palpationValue, index) => (
                                    <div key={index} className="mb-2">
                                        <p>{palpationValue}</p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ) : (
                            <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                                Please select any body part from the Patient History above.
                            </div>
                        )}
                    </div>
                </div>


                <div>
                    <div className="text-lg font-bold">Tone</div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                {[...new Set(bodyParts.map((bodyPart) => palpation[bodyPart]))].map((toneValue, index) => (
                                    <div key={index} className="mb-2">
                                        <p>{toneValue}</p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ) : (
                            <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                                Please select any body part from the Patient History above.
                            </div>
                        )}
                    </div>
                </div>

            </div>


            <div className='mt-7'>
                <div className="text-lg font-bold ">Co-ordination / Balance</div>
                <div className=''>
                    <textarea
                        placeholder="Add something..."
                        className="mt-2 bg-gray-100 p-4 rounded-md"
                        value={inputs.coordinate}
                        onChange={(e) => handleInputFieldChange("coordinate", e.target.value)}
                        style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                    />
                </div>
            </div>

            <div className='mt-7'>
                <div className="text-lg font-bold ">Reflexes</div>
                <div className=''>
                    Intact
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-7">

                <div className='mt-7'>
                    <div className="text-lg font-bold ">Sensation</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={inputs.sensation}
                            onChange={(e) => handleInputFieldChange("sensation", e.target.value)}
                            placeholder="Add something..."
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>

                <div className='mt-7'>
                    <div className="text-lg font-bold ">SKIN</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={inputs.skin}
                            onChange={(e) => handleInputFieldChange("skin", e.target.value)}
                            placeholder="Add something..."
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold ">Pulses</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={inputs.pulse}
                            onChange={(e) => handleInputFieldChange("pulse", e.target.value)}
                            placeholder="Add something..."
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold ">Girth</div>
                    <div className=''>
                        <textarea
                            className="mt-2 bg-gray-100 p-4 rounded-md"
                            value={inputs.girth}
                            onChange={(e) => handleInputFieldChange("girth", e.target.value)}
                            placeholder="Add something..."
                            style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                        />
                    </div>
                </div>
            </div>

            <div className='mt-7'>
                <div className='grid grid-cols-2 gap-4 mt-7'>

                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold ">Physician Certification</div>
                        <TextInput
                            type={'date'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold ">Therapist's Signature</div>
                        <TextInput
                            type={'date'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                            className="bg-white"
                        />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
