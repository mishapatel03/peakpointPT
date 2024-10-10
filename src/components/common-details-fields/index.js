import React from 'react'
import Select from '../../shared-components/Select'
import { DX } from '../../constants/data'
import { TEXT_AREA, TEXT_INPUT } from '../../constants'
import TextInput from '../../shared-components/TextInput'

export default function CommonDetailsFields() {

    return (
        <React.Fragment>
            <div className='mb-4'>
                <div className='mt-5'>
                    <div className="text-lg font-bold ">DX</div>
                    <div className="grid grid-cols-2 gap-4">
                        <Select options={DX} />
                        <Select options={DX} />
                        <Select options={DX} />
                        <Select options={DX} />
                    </div>
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
