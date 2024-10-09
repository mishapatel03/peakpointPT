import React from 'react'
import { MVMT, balance, days, duration, functionalStatus, gait, goals, specialTest, testResult, yesNo } from '../../constants/data'
import Select from '../../shared-components/Select'
import { TEXT_AREA, TEXT_INPUT } from '../../constants'
import TextInput from '../../shared-components/TextInput'

export default function ObjectiveFormFields() {
    return (
        <React.Fragment>
            <div className="text-xl font-bold mt-2">OBJECTIVE</div>
            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">Gait</div>
                <Select
                    options={gait}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">Posture</div>
                <TextInput
                    type={'text'}
                    placeholder={`Enter Posture details`}
                    inputBox={TEXT_INPUT}
                />
            </div>
            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">AROM / ACTIVE MVMT</div>
                <div className='grid grid-cols-3 gap-4'>
                    <Select options={gait} />
                    <Select options={gait} />
                    <Select options={gait} />
                </div>
                <div className='mt-2'>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='grid grid-cols-1 gap-4'>
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
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
                            <TextInput
                                type={'text'}
                                placeholder={`Enter something`}
                                inputBox={TEXT_INPUT}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
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
                            <TextInput
                                type={'text'}
                                placeholder={`Enter something`}
                                inputBox={TEXT_INPUT}
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
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
                            <TextInput
                                type={'text'}
                                placeholder={`Enter something`}
                                inputBox={TEXT_INPUT}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">PROM</div>
                <div className='grid grid-cols-2 gap-4'>
                    <Select options={gait} />
                    <Select options={gait} />
                </div>
            </div>

            <div className='mt-2'>
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
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">JOINT MOBS</div>
                <TextInput
                    type={'text'}
                    placeholder={`Enter Posture details`}
                    inputBox={TEXT_INPUT}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">STRENGTH</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter HX`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">SPECIAL TEST</div>
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
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">PALPATION</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter PALPATION`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">TONE</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter Tone`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">COORDINATION / BALANCE</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">REFLEXES</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">SENSATION</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">SKIN</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">PULSES</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">GIRTH</div>
                <div className=''>
                    <Select options={balance} />
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">FUNCTIONAL STATUS - (i.e. Bed Mobility, Transfers, Balance, Gait, Endurance)
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

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">PRIOR FUNCTIONAL STATUS</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter PRIOR FUNCTIONAL STATUS`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">ASSESSMENT</div>
                <TextInput
                    type={'date'}
                    placeholder={`Enter ASSESSMENT`}
                    inputBox={TEXT_AREA}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">GOALS</div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-3 items-center gap-4'>
                        <div className="flex items-center text-lg font-bold mb-2">Short Term</div>
                        <TextInput
                            type={'number'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                        <Select options={days} />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-4'>
                        <div className="flex items-center text-lg font-bold mb-2">Long Term</div>
                        <TextInput
                            type={'number'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                        <Select options={days} />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-2'>
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

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">PLAN</div>
                <div className='grid grid-cols-2 gap-4 mt-2'>
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

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">FREQUENCY OF TREATMENT </div>
                <Select options={duration} />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">Patient /Family advised of findings and has agreed to participate in Treatment Plan:</div>
                <Select options={yesNo} />
            </div>

            <div className='mt-2'>
                <div className='grid grid-cols-2 gap-4 mt-2'>

                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold mb-2">PHYSICIAN CERTIFICATION</div>
                        <TextInput
                            type={'date'}
                            placeholder={`Enter Posture details`}
                            inputBox={TEXT_INPUT}
                        />
                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold mb-2">THERAPIST'S SIGNATURE</div>
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
