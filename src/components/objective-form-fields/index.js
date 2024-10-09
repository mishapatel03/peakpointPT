import React from 'react'
import { MVMT, balance, days, duration, functionalStatus, gait, goals, specialTest, testResult, yesNo } from '../../constants/data'
import Select from '../../shared-components/Select'

export default function ObjectiveFormFields() {
    return (
        <React.Fragment>
            <div className="text-2xl font-bold mt-2">OBJECTIVE</div>
            <hr />
            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">Gait</div>
                <Select
                    options={gait}
                />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">Posture</div>
                <input type="text" placeholder="Enter Posture details" className="input input-bordered w-full max-w-lg" />
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
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                            <Select options={MVMT} className="w-24" />
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                            <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
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
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Select options={MVMT} />
                        <Select options={MVMT} />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                        <input type="text" placeholder="Enter something" className="input input-bordered w-full max-w-md" />
                    </div>
                </div>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">JOINT MOBS</div>
                <input type="text" placeholder="Enter Posture details" className="input input-bordered w-full" />
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">STRENGTH</div>
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
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
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">Tone</div>
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
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
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">ASSESSMENT</div>
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
            </div>

            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">GOALS</div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-3 items-center gap-4'>
                        <div className="flex items-center text-lg font-bold mb-2">Short Term</div>
                        <input type="number" placeholder="" className="input input-bordered w-full" />
                        <Select options={days} />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-4'>
                        <div className="flex items-center text-lg font-bold mb-2">Long Term</div>
                        <input type="number" placeholder="" className="input input-bordered w-full" />
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
                        <input type="date" placeholder="Enter Posture details" className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className='grid grid-cols-1 items-center gap-4'>
                        <div className="text-lg font-bold mb-2">THERAPIST'S SIGNATURE</div>
                        <input type="text" placeholder="Enter Posture details" className="input input-bordered w-full max-w-lg" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
