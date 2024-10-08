import React from "react";
import HeaderFields from "../header-fields";
import PatinetData from "../../shared-components/PatientData";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { patientData } from "../../constants/data";

export default function BasicForm() {
  const containerStyle = {
    display: "flex",
    height: "100vh", // Full height of the viewport
  };

  const columnStyle = {
    flex: 1, // Each column takes up equal space
    padding: "20px", // Optional padding for spacing
  };
  return (
    <React.Fragment>
      <div>
        {/* <HeaderFields />
        <div className="mx-auto w-full bg-white">
   
          <PDFViewer style={{width:"100%", height:"60vh"}}>
            <PatinetData data = {patientData}/>
          </PDFViewer>
        </div> */}
        <div style={containerStyle}>
          <div style={{ ...columnStyle, backgroundColor: "#f2f2f2" }}>
          <HeaderFields />
          </div>
          <div style={{ ...columnStyle, backgroundColor: "#d9d9d9" }}>
          <PDFViewer style={{width:"100%", height:"95vh"}}>
            <PatinetData data = {patientData}/>
          </PDFViewer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
