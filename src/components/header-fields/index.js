import React, { useState } from 'react'
import Select from '../../shared-components/Select';
import { address } from '../../constants/data';
import TextInput from '../../shared-components/TextInput';
import { TEXT_INPUT } from '../../constants';

export default function HeaderFields() {
    const [formData, setFormData] = useState({
        address: '',
        patientName: '',
        patientDOB: '',
        currentDate: ''
    });

    const handleChange = (field) => (value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleBlur = (event) => {
        console.log('Input blurred:', event.target.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <React.Fragment>
            <div className="flex flex-col mt-4 mb-4">
                <form onSubmit={handleSubmit} className="rounded-lg w-full max-w-2xl">
                    <div className='mt-2'>
                        <div className='text-lg font-bold mb-2'>SELECT CLINIC'S ADDRESS</div>
                        <Select
                            options={address}
                            validation={true}
                            onChange={handleChange('address')}
                        />
                    </div>
                    <div className='mt-2'>
                        <p className='text-lg font-bold mb-2'>
                            PATIENT NAME
                        </p>
                        <TextInput
                            type={'text'}
                            placeholder={`Enter Patient's Name`}
                            onBlur={handleBlur}
                            inputBox={TEXT_INPUT}
                            validation={true}
                            onChange={handleChange('patientName')}
                        />
                    </div>
                    <div className='mt-2'>
                        <div>
                            <p className='text-lg font-bold mb-2'>
                                PATIENT DOB
                            </p>
                            <TextInput
                                type={'date'}
                                placeholder={'Select a DOB'}
                                onBlur={handleBlur}
                                inputBox={TEXT_INPUT}
                                validation={true}
                                onChange={handleChange('patientDOB')}
                            />
                        </div>
                        <div className='mt-2'>
                            <p className='text-lg font-bold mb-2'>
                                TODAY'S DATE
                            </p>
                            <TextInput
                                type={'date'}
                                placeholder={`Select today's date`}
                                onBlur={handleBlur}
                                inputBox={TEXT_INPUT}
                                validation={true}
                                onChange={handleChange('currentDate')}
                            />
                        </div>
                    </div>
                </form>
            </div>


        </React.Fragment>
    )
}
