import React, { useState } from 'react'
import Select from '../../shared-components/Select'
import { DX } from '../../constants/data'
import { TEXT_AREA, TEXT_INPUT } from '../../constants'
import TextInput from '../../shared-components/TextInput'
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { setDXValues } from '../../slices/formSlice'

export default function CommonDetailsFields() {
    const dispatch = useDispatch();
    const dxValues = useSelector((state) => state.form.formData.dxValues || ['']);
    const [selectCount, setSelectCount] = useState(dxValues.length || 1);

    const handleAddDX = () => {
        if (selectCount < 6) {
            dispatch(setDXValues({ index: dxValues.length, value: '' }));
            setSelectCount((prevCount) => prevCount + 1);
        }
    };

    const handleChangeDX = (value, index) => {
        dispatch(setDXValues({ index, value }));
    };

    const handleDeleteDX = (index) => {
        const newDXValues = dxValues.filter((_, i) => i !== index);
        dispatch(setDXValues(newDXValues));
        setSelectCount((prevCount) => Math.max(prevCount - 1, 1));
    };


    return (
        <React.Fragment>
            <div className='mb-4'>
                <div className='mt-5'>
                    <div className="text-lg font-bold ">DX</div>
                    <div className="grid grid-cols-2 gap-4">
                        {dxValues.length && dxValues.map((value, index) => (
                            <div key={index} className="flex items-center">
                                <Select
                                    field={`dxValues[${index}]`}
                                    options={DX}
                                    value={value}
                                    onChange={(value) => handleChangeDX(value, index)}
                                />
                                {selectCount > 1 && <button
                                    type="button"
                                    className="ml-2 flex items-center justify-center"
                                    onClick={() => handleDeleteDX(index)}
                                    disabled={selectCount <= 1}
                                >
                                    <MdDelete color='#cb0f0f' size={32} />
                                </button>}

                            </div>

                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={handleAddDX}
                        className="btn mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        disabled={selectCount >= 6}
                    >
                        <FaPlus size={20} />
                        Add
                    </button>
                </div>
                <div className='mt-5'>
                    <div className="text-lg font-bold ">HX</div>
                    <TextInput
                        type={'date'}
                        placeholder={`Enter HX`}
                        inputBox={TEXT_AREA}
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div>
                        <div className="text-lg font-bold ">ALLERGIES</div>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter Allergies`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold ">MEDICATIONS</div><TextInput
                            type={'text'}
                            placeholder={`Enter Medication`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold ">PMH</div><TextInput
                            type={'text'}
                            placeholder={`Enter PMH`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold ">PSH</div><TextInput
                            type={'text'}
                            placeholder={`Enter PSH`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold ">Social</div><TextInput
                            type={'text'}
                            placeholder={`Enter Socials`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold ">TEST RESULTS</div><TextInput
                            type={'text'}
                            placeholder={`Enter Test results`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="text-lg font-bold ">SUBJECTIVE</div><TextInput
                        type={'date'}
                        placeholder={`Enter subjective`}
                        inputBox={TEXT_AREA}
                    />
                </div>
                <div>
                    <div className="text-lg font-bold ">PLAIN SCALE: None 0-1-2-3-4-5-6-7-8-9-10 Worst</div>
                    <TextInput
                        type={'text'}
                        placeholder={`Enter Scale`}
                        inputBox={TEXT_INPUT}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}
