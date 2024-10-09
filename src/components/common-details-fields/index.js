import React from 'react'
import Select from '../../shared-components/Select'
import { DX } from '../../constants/data'

export default function CommonDetailsFields() {

    return (
        <React.Fragment>
            <div>
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
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-2'>
                <div>
                    <div className="text-lg font-bold mb-2">ALLERGIES</div>
                    <input type="text" placeholder="Enter Allergies" className="input input-bordered w-full max-w-xl" />
                </div>
                <div>
                    <div className="text-lg font-bold mb-2">MEDICATIONS</div>
                    <input type="text" placeholder="Enter Medications" className="input input-bordered w-full max-w-xl" />
                </div>
                <div>
                    <div className="text-lg font-bold mb-2">PMH</div>
                    <input type="text" placeholder="Enter PMH" className="input input-bordered w-full max-w-xl" />
                </div>
                <div>
                    <div className="text-lg font-bold mb-2">PSH</div>
                    <input type="text" placeholder="Enter PSH" className="input input-bordered w-full max-w-xl" />
                </div>
                <div>
                    <div className="text-lg font-bold mb-2">Social</div>
                    <input type="text" placeholder="Enter Social" className="input input-bordered w-full max-w-xl" />
                </div>
                <div>
                    <div className="text-lg font-bold mb-2">TEST RESULTS</div>
                    <input type="text" placeholder="Enter Test Results" className="input input-bordered w-full max-w-xl" />
                </div>
            </div>
            <div className='mt-2'>
                <div className="text-lg font-bold mb-2">SUBJECTIVE</div>
                <textarea className="textarea textarea-primary textarea-lg w-full" placeholder="HX"></textarea>
            </div>
            <div>
                <div className="text-lg font-bold mb-2">PLAIN SCALE: None 0-1-2-3-4-5-6-7-8-9-10 Worst</div>
                <input type="text" placeholder="Enter Scale" className="input input-bordered w-full max-w-xl" />
            </div>
        </React.Fragment>
    )
}
