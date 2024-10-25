import React, { useState } from "react";
import { TEXT_INPUT } from "../../constants";
import TextInput from "../../shared-components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setFormField } from "../../slices/formSlice";

export default function PatientHistoryForm() {
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [duration, setDuration] = useState("");

  const { formData } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const generateHistory = () => {

    const value = `Patient ${formData.patientHistoryName}, aged ${formData.patientHistoryAge}, is suffering from ${formData.patientHistoryCondition} for ${formData.patientHistoryDuration}.`;
    const field = "patientHistoryValue";
    dispatch(setFormField({ field, value }));
    //return patientHistory;
  };

  const handleChange = (value, field) => {
    dispatch(setFormField({ field, value }));
  };

  return (
    <div className="container">
        
      <h2 className="mb-5">
        <b>Patient History Form</b>
      </h2>
      <form className="patient-form">
        <div className="form-group mb-5">
          <div className=" font-bold mb-1 ">Name</div>
          <TextInput
            type={"text"}
            placeholder={`Enter Name`}
            inputBox={TEXT_INPUT}
            onChange={(value) => handleChange(value, "patientHistoryName")}
          />
        </div>
        <div className="form-group mb-5">
          <div className=" font-bold mb-1 ">Age</div>

          <TextInput
            type={"number"}
            placeholder={`Enter Age`}
            inputBox={TEXT_INPUT}
            onChange={(value) => handleChange(value, "patientHistoryAge")}
          />
        </div>
        <div className="form-group mb-5">
          <div className=" font-bold mb-1 ">Condition</div>

          <TextInput
            type={"text"}
            placeholder={`Enter Condition`}
            inputBox={TEXT_INPUT}
            onChange={(value) => handleChange(value, "patientHistoryCondition")}
          />
        </div>
        <div className="form-group mb-5">
          <div className=" font-bold mb-1 ">Duartion</div>

          <TextInput
            type={"text"}
            placeholder={`Enter duration`}
            inputBox={TEXT_INPUT}
            onChange={(value) => handleChange(value, "patientHistoryDuration")}
          />
        </div>

        {/* <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label>Medical Condition:</label>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="Enter condition"
          />
        </div>

        <div className="form-group">
          <label>Duration of Condition:</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter duration (e.g., 3 months)"
          />
        </div> */}
      </form>

      <div className="history-output mt-2">
        {/* <h3><b>Patient History</b></h3>
          <p>{generateHistory()}</p> */}
          <form method="dialog">
        <button
          className="btn"
          onClick={() => {
            generateHistory();
          }}
        >
          Save
        </button>
        </form>
      </div>
    </div>
  );
}
