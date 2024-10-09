import React from 'react'
import Select from '../../shared-components/Select'
import { DX } from '../../constants/data'
import { TEXT_AREA, TEXT_INPUT } from '../../constants'
import TextInput from '../../shared-components/TextInput'

export default function CommonDetailsFields() {

    return (
        <React.Fragment>
            <div className='mb-4'>
                <div className='mt-2'>
                    <div className="text-lg font-bold mb-2">DX</div>
                    <div className="grid grid-cols-2 gap-4">
                        <Select options={DX} />
                        <Select options={DX} />
                        <Select options={DX} />
                        <Select options={DX} />
                    </div>
                </div>
                <div className='mt-2'>
                    <div className="text-lg font-bold mb-2">HX</div>
                    <TextInput
                        type={'date'}
                        placeholder={`Enter HX`}
                        inputBox={TEXT_AREA}
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    <div>
                        <div className="text-lg font-bold mb-2">ALLERGIES</div>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter Allergies`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">MEDICATIONS</div><TextInput
                            type={'text'}
                            placeholder={`Enter Medication`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">PMH</div><TextInput
                            type={'text'}
                            placeholder={`Enter PMH`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">PSH</div><TextInput
                            type={'text'}
                            placeholder={`Enter PSH`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">Social</div><TextInput
                            type={'text'}
                            placeholder={`Enter Socials`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">TEST RESULTS</div><TextInput
                            type={'text'}
                            placeholder={`Enter Test results`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                </div>
                <div className='mt-2'>
                    <div className="text-lg font-bold mb-2">SUBJECTIVE</div><TextInput
                        type={'date'}
                        placeholder={`Enter subjective`}
                        inputBox={TEXT_AREA}
                    />
                </div>
                <div>
                    <div className="text-lg font-bold mb-2">PLAIN SCALE: None 0-1-2-3-4-5-6-7-8-9-10 Worst</div>
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
