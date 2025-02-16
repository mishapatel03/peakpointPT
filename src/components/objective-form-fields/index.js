import React, { useEffect, useState } from 'react'
import { bodyPartConfig, gait, palpation, posture, stregthDetails } from '../../constants/data'
import Select from "react-select";
import { TEXT_INPUT } from '../../constants';
import TextInput from '../../shared-components/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { setFormField } from '../../slices/formSlice';
import { bodyPartDetails, PLAN_OPTIONS, options } from "../../constants/data"
import GrammarCheckTextarea from '../../shared-components/AI-assitant/GrammarCheckTextarea';

export default function ObjectiveFormFields() {
    const dispatch = useDispatch();
    const formAllData = useSelector((state) => state.form.formData || {});
    const bodyParts = useSelector((state) => state.form.formData.bodyParts || []);
    const currentJointMobsValues = useSelector((state) => state.form.formData.jointMobsValues || []);
    const [strengthValues, setStrengthValues] = useState("");
    const [palpationValues, setPalpationValues] = useState("");
    const [toneValue, setToneValue] = useState("");
    const selectedPlans = useSelector((state) => state.form.formData.plan || []);
    const [checkedPlans, setCheckedPlans] = useState(selectedPlans);
    const storedSignature = useSelector((state) => state.form.formData.therapistSignature || null);
    const [preview, setPreview] = useState(storedSignature || "");
    const [selectedParts, setSelectedParts] = useState({});
    const [additionalComment, setAdditionalComment] = useState("");

    const [inputs, setInputs] = useState({
        posture: "",
        coordinate: "Static balance: Good? \n If ICD 10 has Gait abnormality, it should also come here Dynamic balance: ??",
        sensation: "",
        skin: "",
        pulse: "Normal",
        girth: "Normal??",
        assessment: ""
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
        "Left shoulder": {},
        "Right shoulder": {},
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

    const handleFourValInput = (field, value) => {
        switch (field) {
            case "strengthValues":
                setStrengthValues(value); // Update local state for strengthValues
                break;
            case "palpationValues":
                setPalpationValues(value); // Update local state for palpationValues
                break;
            case "toneValue":
                setToneValue(value); // Update local state for palpationValues
                break;
            default:
                break;
        }
        dispatch(setFormField({ field, value })); // Update Redux store
    };

    useEffect(() => {
        const uniqueStrengths = [
            ...new Set(bodyParts.map((bodyPart) => stregthDetails[bodyPart]).filter(Boolean)),
        ];
        setStrengthValues(uniqueStrengths.toString());
        dispatch(setFormField({ field: "strengthValues", value: uniqueStrengths.toString() }));

        const uniquePalpations = [
            ...new Set(bodyParts.map((bodyPart) => palpation[bodyPart]).filter(Boolean)),
        ];
        setPalpationValues(uniquePalpations.toString());
        dispatch(setFormField({ field: "palpationValues", value: uniquePalpations.toString() }));

        setToneValue(uniquePalpations.toString());
        dispatch(setFormField({ field: "toneValue", value: uniquePalpations.toString() }));

    }, [bodyParts, dispatch]);

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
        let formattedValue = value;
        if (field === "ptCertificate" && value) {
            formattedValue = new Date(value).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
            });
        }
        setInputs((prev) => ({
            ...prev,
            [field]: formattedValue,
        }));
        dispatch(setFormField({ field, value: formattedValue }));
    };

    const handleJMCheckboxChange = (part) => {
        setSelectedParts((prev) => ({
            ...prev,
            [part]: prev[part] ? null : "", // Toggle checkbox and reset grade if unchecked
        }));
    };

    const handleGaitinput = (field, value) => {
        setInputs((prev) => ({
            ...prev,
            [field]: value,
        }));
        dispatch(setFormField({ field, value }));
    }

    const handleChange = (index, selected) => {
        const previousValue = selectedValues[index]; // Get the previously selected body part
        const newSelectedValues = { ...selectedValues, [index]: selected?.value || null };

        // If a body part was previously selected and is now being removed, delete it from formData
        if (previousValue && !selected) {
            setFormData((prev) => {
                const updatedFormData = { ...prev };
                delete updatedFormData[previousValue]; // Remove the body part from formData
                dispatch(setFormField({ field: "arom", value: updatedFormData })); // Update Redux store
                return updatedFormData;
            });
        }
        console.log("selected", newSelectedValues);
        setSelectedValues(newSelectedValues);
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

    const handleJointMobsv2Change = (part, value) => {
        setSelectedParts((prev) => ({
            ...prev,
            [part]: value,
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

    const handleAdditionalComments = (comment) => {
        setAdditionalComment(comment);
    };

    const handleBlur = () => {
        const updatedJointMobsValues = [...currentJointMobsValues, additionalComment];
        dispatch(setFormField({ field: "jointMobsValues", value: updatedJointMobsValues }));
    };

    const handleCheckboxChange = (plan) => {
        let updatedPlans = checkedPlans.includes(plan)
            ? checkedPlans.filter((item) => item !== plan)
            : [...checkedPlans, plan];

        setCheckedPlans(updatedPlans);
        dispatch(setFormField({ field: "plan", value: updatedPlans }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const signatureData = reader.result;
                setPreview(signatureData);
                dispatch(setFormField({ field: "therapistSignature", value: signatureData })); // Save to Redux
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <React.Fragment>
            <div className="text-xl font-bold bg-gray-200 p-2 rounded-[5px]">OBJECTIVE</div>
            <div className='mt-7'>
                <div className="text-lg font-bold ">Gait</div>
                <Select
                    className='mt-2'
                    isClearable={true}
                    onChange={(e) => handleGaitinput("gait", e)}
                    options={gait.map((part) => ({ value: part, label: part }))}
                    placeholder="Please select.."
                />

                <div className="mt-2">
                    <strong>Generated Sentence:</strong>
                    <textarea
                        className="mt-2 bg-white p-4 rounded-md  border-2 rounded-[5px]"
                        value={inputs.gait?.value}
                        placeholder={`Enter Posture details`}
                        onChange={(e) => handleGaitinput("gait", e.target.value)}
                        style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                    />
                </div>
            </div>

            <div className='mt-7'>
                <div className="text-lg font-bold ">Posture</div>
                <Select
                    isMulti={true}
                    className='mt-2'
                    isClearable={true}
                    onChange={(e) => handleInputFieldChange("posture", e)}
                    options={posture.map((part) => ({ value: part, label: part }))}
                    placeholder="Please select.."
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
                            {selectedValues[index] && bodyPartConfig[selectedValues[index]]?.map(({ movement, showPostfix, postfixVal }) => (
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


            <div className='mt-4'>
                <div className="text-lg font-bold">Joint mobs</div>
                <div className="bg-gray-100 p-4 rounded-md">
                    {bodyParts && bodyParts.length ? (
                        <React.Fragment>
                            {uniqueParts.map((details, index) => (
                                <div key={index} className="mb-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={!!selectedParts[details]} // Check if the part is selected
                                            onChange={() => handleJMCheckboxChange(details)}
                                            className="mr-2"
                                        />
                                        <p>
                                            {["C2-7", "L2-5", "Mid back"].includes(details) ? (
                                                <>
                                                    PA {details} Grade{" "}
                                                    {selectedParts[details] !== null && (
                                                        <input
                                                            type="text"
                                                            placeholder=""
                                                            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                            value={selectedParts[details] || ""}
                                                            onChange={(e) => {
                                                                handleJointMobsChange(details, e.target.value); handleJointMobsv2Change(details, e.target.value)
                                                            }

                                                            }
                                                        />
                                                    )}
                                                    &nbsp; &gt; pain and guarded
                                                </>
                                            ) : (
                                                <>
                                                    All glides {details} Grade{" "}
                                                    {selectedParts[details] !== null && (
                                                        <input
                                                            type="text"
                                                            placeholder=""
                                                            className="w-40 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                            value={selectedParts[details] || ""}
                                                            onChange={(e) => { handleJointMobsChange(details, e.target.value); handleJointMobsv2Change(details, e.target.value) }
                                                            }
                                                        />
                                                    )}
                                                    &nbsp; &gt; pain and guarded
                                                </>
                                            )}
                                        </p>
                                    </label>
                                </div>
                            ))}
                        </React.Fragment>
                    ) : (
                        <div className="bg-gray-100 p-4 rounded text-center text-gray-500">
                            Please select any body part from the Patient History above.
                        </div>
                    )}

                    <p className="text-lg font-medium">Additional Comments</p>
                    <textarea
                        value={additionalComment}
                        onChange={(e) => handleAdditionalComments(e.target.value)}
                        onBlur={handleBlur} // Add this line
                        className="bg-white p-4 rounded-md border-2 rounded-[5px] border-gray-400"
                        placeholder="Generated sentence will appear here"
                        style={{ width: "100%", minHeight: "50px" }}
                    />

                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                    <div className="text-lg font-bold">Strength</div>
                    <div className="rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                <textarea
                                    className="bg-white p-4 rounded-md"
                                    value={strengthValues}
                                    onChange={(e) => handleFourValInput("strengthValues", e.target.value)}
                                    placeholder="Add something..."
                                    style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                                />
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
                    <div className="rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                <textarea
                                    className="bg-white p-3 rounded-md"
                                    value={palpationValues}
                                    onChange={(e) => handleFourValInput("palpationValues", e.target.value)}
                                    placeholder="Add something..."
                                    style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                                />
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
                    <div className="rounded-md">
                        {bodyParts && bodyParts.length ? (
                            <React.Fragment>
                                <textarea
                                    className="bg-white p-3 rounded-md"
                                    value={toneValue}
                                    onChange={(e) => handleFourValInput("toneValue", e.target.value)}
                                    placeholder="Add something..."
                                    style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                                />
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

            <div className="mt-5">
                <GrammarCheckTextarea
                    value={inputs.assessment}
                    onChange={handleInputFieldChange}
                    placeholder="Assessment"
                    fieldName="assessment"
                />

            </div>

            <div className="mt-5">
                <div className="text-lg font-bold">Plan</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-3">
                    {PLAN_OPTIONS.map((plan, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={checkedPlans.includes(plan)}
                                onChange={() => handleCheckboxChange(plan)}
                                className="w-5 h-5"
                            />
                            <span>{plan}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className='mt-7 mb-2'>
                <div className='grid grid-cols-2 gap-4 mt-7'>

                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold ">Physician Certification</div>
                        <TextInput
                            type={'date'}
                            onChange={(e) => handleInputFieldChange("ptCertificate", e)}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold ">Therapist's Signature</div>
                        <input
                            type="file"
                            accept="image/*"
                            className="border p-2 rounded"
                            onChange={handleFileChange}
                        />

                        {preview && (
                            <div className="mt-2">
                                <img src={preview} alt="Therapist Signature" className="w-40 h-auto border rounded shadow" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
