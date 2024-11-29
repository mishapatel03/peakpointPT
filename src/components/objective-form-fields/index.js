import React, { useState } from 'react'
import { MVMT, arom, balance, bodyPartConfig, days, duration, functionalStatus, gait, goals, specialTest, testResult, yesNo } from '../../constants/data'
import Select from "react-select";
import { TEXT_AREA, TEXT_INPUT } from '../../constants';
import TextInput from '../../shared-components/TextInput';
import { TextField, Checkbox } from "@mui/material";

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

    const handleChange = (index, selected) => {
        setSelectedValues((prev) => ({ ...prev, [index]: selected?.value || null }));
    };

    const handleInputChange = (bodyPart, movement, value) => {
        setFormData((prev) => ({
            ...prev,
            [bodyPart]: {
                ...prev[bodyPart],
                [movement]: value,
            },
        }));
    };

    const handleSave = () => {
        // Convert formData to the desired format and print to console
        const output = Object.keys(formData).reduce((result, bodyPart) => {
            const movements = formData[bodyPart];
            result[bodyPart] = Object.keys(movements).reduce((movResult, movement) => {
                movResult[movement] = movements[movement] || "";
                return movResult;
            }, {});
            return result;
        }, {});
        console.log(output);
    };

    return (
        <React.Fragment>
            <div className="text-xl font-bold mt-5">OBJECTIVE</div>
            <div className='mt-5'>
                <div className="text-lg font-bold ">Gait</div>
                <Select
                    options={gait}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">Posture</div>
                <TextInput
                    type={'text'}
                    placeholder={`Enter Posture details`}
                    inputBox={TEXT_INPUT}
                />
            </div>
            <div className="mt-5">
                <div className="text-lg font-bold">AROM / ACTIVE MVMT</div>

                <div>
                    <div className="grid grid-cols-3 gap-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="space-y-4">
                                {/* Select Dropdown */}
                                <Select
                                    options={options}
                                    onChange={(selected) => handleChange(index, selected)}
                                    placeholder="Select Body Part"
                                />

                                {/* Dynamically Render Sections */}
                                {selectedValues[index] &&
                                    bodyPartConfig[selectedValues[index]].map(({ movement, showPostfix, postfixVal }) => (
                                        <div key={movement} className="flex items-center space-x-2">
                                            <span className="text-lg font-medium">{movement}</span>
                                            {showPostfix && (
                                                <>
                                                    <input
                                                        type="number"
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                selectedValues[index],
                                                                movement,
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-16 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-center text-lg"
                                                    />
                                                    <span className="text-lg font-medium">{postfixVal}</span>
                                                </>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>

                    {/* Save Button */}
                    <button
                        onClick={handleSave}
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                    >
                        Save
                    </button>
                </div>

            </div>

            {/* <div className='mt-5'>
                <div className="text-lg font-bold ">PROM</div>
                <div className='grid grid-cols-2 gap-4'>
                    <Select options={gait} />
                    <Select options={gait} />
                </div>
            </div>

            <div className='mt-5'>
                <div className='grid grid-cols-9 gap-4'>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                        <TextInput
                            type={'text'}
                            placeholder={`Enter something`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                </div>
            </div> */}

            {/* <div className='mt-5'>
                <div className="text-lg font-bold ">JOINT MOBS</div>
                <TextInput
                    type={'text'}
                    placeholder={`Enter Posture details`}
                    inputBox={TEXT_INPUT}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">STRENGTH</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter HX`}
                    inputBox={TEXT_AREA}
                />
            </div> */}

            {/* <div className='mt-5'>
                <div className="text-lg font-bold ">SPECIAL TEST</div>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={specialTest} />
                        <Select options={specialTest} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={testResult} />
                        <Select options={testResult} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={specialTest} />
                        <Select options={specialTest} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={testResult} />
                        <Select options={testResult} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={specialTest} />
                        <Select options={specialTest} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={testResult} />
                        <Select options={testResult} />
                    </div>
                </div>
            </div> */}

            {/* <div className='mt-5'>
                <div className="text-lg font-bold ">PALPATION</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter PALPATION`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">TONE</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter Tone`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">COORDINATION / BALANCE</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">REFLEXES</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">SENSATION</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">SKIN</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">PULSES</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">GIRTH</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">FUNCTIONAL STATUS - (i.e. Bed Mobility, Transfers, Balance, Gait, Endurance)
                    Patient has difficulties with functional activities such as</div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={functionalStatus} />
                        <Select options={functionalStatus} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={functionalStatus} />
                        <Select options={functionalStatus} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={functionalStatus} />
                        <Select options={functionalStatus} />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">PRIOR FUNCTIONAL STATUS</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter PRIOR FUNCTIONAL STATUS`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">ASSESSMENT</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter ASSESSMENT`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">GOALS</div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-3 items-center gap-4'>
                        <div className="flex items-center text-lg font-bold ">Short Term</div>
                        <TextInput
                            type={'number'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                        <Select options={days} />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-4'>
                        <div className="flex items-center text-lg font-bold ">Long Term</div>
                        <TextInput
                            type={'number'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                        <Select options={days} />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">PLAN</div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                        <Select options={goals} />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">FREQUENCY OF TREATMENT </div>
                <Select options={duration} />
            </div>

            <div className='mt-5'>
                <div className="text-lg font-bold ">Patient /Family advised of findings and has agreed to participate in Treatment Plan:</div>
                <Select options={yesNo} />
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
            </div>*/}

        </React.Fragment>
    )
}
