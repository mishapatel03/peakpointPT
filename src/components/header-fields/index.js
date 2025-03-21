import React, { useState } from "react";
import Select from "react-select";
import { address } from "../../constants/data";
import TextInput from "../../shared-components/TextInput";
import { TEXT_INPUT } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setFormField, updateField } from "../../slices/formSlice";

export default function HeaderFields() {
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.form);
  const handleChange = (value, field) => {
    dispatch(setFormField({ field, value }));
  };

  return (
    <React.Fragment>
      <div className="flex flex-col mt-4 mb-4 p-5 bg-white shadow-lg rounded-md">
        <div className="rounded-lg w-full">
          <div className="mt-2 w-full">
            <div className="text-lg font-bold -mb-2">
              Clinic's address
            </div>
            <div className="w-full mt-7">
              <Select
                isClearable={true}
                onChange={(value) => handleChange(value, "address")}
                options={address.map((addr) => ({
                  value: addr,
                  label: `${addr.clinicName}, ${addr.addressLine1}, ${addr.addressLine2} Tel: ${addr.tel} Fax: ${addr.fax}`
                }))}
                placeholder="Select Clinic's Address"
              />

              {errors && errors.address && <span className="text-red-500">{errors.address}</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-7">
            <div>
              <p className="text-lg font-bold -mb-2">Name</p>
              <div className="mt-7">
                <TextInput
                  type={"text"}
                  placeholder={`Enter Patient's Name`}
                  inputBox={TEXT_INPUT}
                  validation={true}
                  value={formData.patientName}
                  onChange={(value) => handleChange(value, "patientName")}
                />
              </div>
              {errors && errors.patientName && <span className="text-red-500">{errors.patientName}</span>}
            </div>
            <div>
              <p className="text-lg font-bold -mb-2">Date of birth</p>
              <div className="mt-7">
                <TextInput
                  type={"date"}
                  placeholder={"Select a DOB"}
                  inputBox={TEXT_INPUT}
                  validation={true}
                  value={formData.patientDOB}
                  onChange={(value) => handleChange(value, "patientDOB")}
                />
              </div>
              {errors && errors.patientDOB && <span className="text-red-500">{errors.patientDOB}</span>}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
