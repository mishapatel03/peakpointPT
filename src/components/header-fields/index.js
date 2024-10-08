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
                <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
                    <Select
                        options={address}
                        validation={true}
                        onChange={handleChange('address')}
                    />
                    <TextInput
                        type={'text'}
                        placeholder={`Enter Patient's Name`}
                        onBlur={handleBlur}
                        inputBox={TEXT_INPUT}
                        validation={true}
                        onChange={handleChange('patientName')}
                    />
                    <div className="flex space-x-2">
                        <TextInput
                            type={'date'}
                            placeholder={'Select a DOB'}
                            onBlur={handleBlur}
                            inputBox={TEXT_INPUT}
                            validation={true}
                            onChange={handleChange('patientDOB')}
                        />
                        <TextInput
                            type={'date'}
                            placeholder={`Select today's date`}
                            onBlur={handleBlur}
                            inputBox={TEXT_INPUT}
                            validation={true}
                            onChange={handleChange('currentDate')}
                        />
                    </div>
                    <button type="submit" className="btn w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
                </form>
            </div>


        </React.Fragment>
    )
}
