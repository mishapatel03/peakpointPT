import React, { useState } from "react";
import Select from "../../shared-components/Select";
import { DX } from "../../constants/data";
import { TEXT_AREA, TEXT_INPUT } from "../../constants";
import TextInput from "../../shared-components/TextInput";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import PatientHistory from "../pateint-history";
import CreatableSelect from 'react-select/creatable';
import { setFormField } from "../../slices/formSlice";

export default function CommonDetailsFields() {
  const dispatch = useDispatch();
  const dxValues = useSelector((state) => state.form.formData.dxValues || [""]);
  const [selectedDXOptions, setSelectedDXOptions] = useState([]);
  const formData = useSelector((state) => state.form.formData || [""]);

  const handleDXChange = (selected) => {
    setSelectedDXOptions(selected);
    const formattedValues = selected.map(option => option.value);
    dispatch(setFormField({ field: 'DX', value: formattedValues }));
  };

  return (
    <React.Fragment>
      <div className="mb-4">
        <div className="mt-5">
          <div className="text-lg font-bold mb-2 ">DX</div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {dxValues.length &&
              dxValues.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CreatableSelect
                    isMulti
                    placeholder={"Select or Add new DX"}
                    options={DX.map(option => ({ label: option, value: option }))}
                    value={selectedDXOptions}
                    className="w-96 border-2 border-gray-400 rounded-[5px]"
                    onChange={handleDXChange}
                  />
                </div>
              ))}
          </div>

        </div>
        <div className="mt-5">
          <PatientHistory />
          <div className="mt-2 text-lg">{formData?.patientHistoryValue}</div>

        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <div className="text-lg font-bold mb-2 ">Allergies</div>
            <TextInput
              type={"text"}
              placeholder={`Enter Allergies`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2 ">Medications</div>
            <TextInput
              type={"text"}
              placeholder={`Enter Medication`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">PMH</div>
            <TextInput
              type={"text"}
              placeholder={`Enter PMH`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">PSH</div>
            <TextInput
              type={"text"}
              placeholder={`Enter PSH`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">Social</div>
            <TextInput
              type={"text"}
              placeholder={`Enter Socials`}
              inputBox={TEXT_INPUT}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2  ">Test Results</div>
            <TextInput
              type={"text"}
              placeholder={`Enter Test results`}
              inputBox={TEXT_INPUT}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="text-lg font-bold mb-2 ">Subjective</div>
          <TextInput
            type={"date"}
            placeholder={`Enter subjective`}
            inputBox={TEXT_AREA}
          />
        </div>
        <div>
          <div className="text-lg font-bold mb-2 ">
            Pain scale: None 0-1-2-3-4-5-6-7-8-9-10 Worst
          </div>
          <TextInput
            type={"text"}
            placeholder={`Enter Scale`}
            inputBox={TEXT_INPUT}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
