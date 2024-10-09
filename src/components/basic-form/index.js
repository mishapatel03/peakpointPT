import React from "react";
import HeaderFields from "../header-fields";
import PatinetData from "../../shared-components/PatientData";
import { PDFViewer } from "@react-pdf/renderer";
import { patientData } from "../../constants/data";
import CommonDetailsFields from "../common-details-fields";
import ObjectiveFormFields from "../objective-form-fields";

export default function BasicForm() {
  const containerStyle = {
    display: "flex",
    height: "100vh", // Full height of the viewport
  };

  const columnStyle = {
    flex: 1, // Each column takes up equal space
    padding: "20px", // Optional padding for spacing
    overflowY: "auto"
  };

  return (
    <React.Fragment>
      <div>
        <div style={containerStyle}>
          <div style={{ ...columnStyle, backgroundColor: "#f2f2f2" }}>
            <h1 className="text-2xl text-black text-center">PEAK POINT PT</h1>
            <HeaderFields />
            <CommonDetailsFields />
            <ObjectiveFormFields />
            {/* <button type="submit" className="btn w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button> */}
          </div>
          <div style={{ ...columnStyle, backgroundColor: "#d9d9d9" }}>
            <PDFViewer style={{ width: "100%", height: "95vh" }}>
              <PatinetData data={patientData} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
