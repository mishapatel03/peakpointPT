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
            <div className="flex flex-col items-center mt-4">
                <form onSubmit={handleSubmit} className="p-6 rounded-lg w-full max-w-2xl">
                    <div>
                        <div className='p-2'>Select Clinic's Address</div>
                        <Select
                            options={address}
                            validation={true}
                            onChange={handleChange('address')}
                        />
                    </div>



                    <div>
                        <p className='p-2'>
                            Patient Name
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


                    <div className="">
                        <div>
                            <p className='p-2'>
                                Patient DOB
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
                        <div>
                            <p className='p-2'>
                                Today's Date
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
