import React, { useState } from "react";
import Select from "../../shared-components/Select";
import { address } from "../../constants/data";
import TextInput from "../../shared-components/TextInput";
import { TEXT_INPUT } from "../../constants";

export default function HeaderFields() {
  const [formData, setFormData] = useState({
    address: "",
    patientName: "",
    patientDOB: "",
    currentDate: "",
  });

  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleBlur = (event) => {
    console.log("Input blurred:", event.target.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col mt-4 mb-4 p-5 border border-gray-200 bg-gray-200 rounded-lg">
        <form onSubmit={handleSubmit} className="rounded-lg w-full">
          {/* First field taking full width */}
          <div className="mt-2 w-full">
            <div className="text-lg font-bold -mb-2">
              Clinic's address
            </div>
            <div className="w-full">
            <Select
              options={address}
              validation={true}
              onChange={handleChange("address")}
            /></div>
          </div>

          {/* Next two fields in a single row equally split */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div>
              <p className="text-lg font-bold -mb-2">Name</p>
              <TextInput
                type={"text"}
                placeholder={`Enter Patient's Name`}
                onBlur={handleBlur}
                inputBox={TEXT_INPUT}
                validation={true}
                onChange={handleChange("patientName")}
              />
            </div>
            <div>
              <p className="text-lg font-bold -mb-2">Date of birth</p>
              <TextInput
                type={"date"}
                placeholder={"Select a DOB"}
                onBlur={handleBlur}
                inputBox={TEXT_INPUT}
                validation={true}
                onChange={handleChange("patientDOB")}
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
