import React, { useState, useRef } from "react";
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import * as pdfjs from "pdfjs-dist";

// this import is needed in to configure a default worker for pdfjs
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs"; 
import { useDispatch } from "react-redux";
import { setFormField } from "../../slices/formSlice";
import { address } from "../../constants/data";
//pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString()

function CustomPDFParser() {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [duration, setDuration] = useState("");
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const fileReader = new FileReader();
    fileReader.onload = async () => {
      const arrayBuffer = fileReader.result;
      try {
        const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
        let extractedText = "";

        // Loop through all the pages and extract text
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const pageText = await page.getTextContent();
          const pageLines = pageText.items.map((item) => item.str).join(" ");
          extractedText += pageLines + " ";
        }

        // Extract form values from the PDF text
        extractFormValues(extractedText);
      } catch (error) {
        console.error("Error parsing PDF:", error);
      }
    };

    fileReader.readAsArrayBuffer(selectedFile);
  };

  // Extract patient-related information from the PDF
  const extractFormValues = (text) => {
    const nameMatch = text.match(/NAME\s+([A-Za-z\s]+)/); // Example pattern for name
    const ageMatch = text.match(/DOB\s+(\d{4}-\d{2}-\d{2})/); // Example pattern for DOB
    const conditionMatch = text.match(/DX\s+((?:[A-Za-z\s]+\([A-Z0-9.]+\)\s*)+)/); // Example pattern for condition
    const durationMatch = text.match(/for\s(\d+\s\w+)/); // Example pattern for duration
    const clinicMatch = text.match(/PEAK\s+POINT\s+PHYSICAL\s+THERAPY,\s+PC\s+[\d\w\s,\.]+NJ\s+\d{5}/)
    // Set extracted values into form fields
    setPatientName(nameMatch ? nameMatch[1] : "");
    let value = nameMatch[1];
    let field = "patientName";
    dispatch(setFormField({ field, value }));
    value = ageMatch[1];
    field = "patientDOB";
    dispatch(setFormField({ field, value }));
    value = address[0];
    field = "address";
    dispatch(setFormField({ field, value }));
    setAge(ageMatch ? calculateAge(ageMatch[1]) : "");
    setCondition(conditionMatch ? conditionMatch[1] : "");
    setDuration(durationMatch ? durationMatch[1] : "");
  };

  // Helper function to calculate age from DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const diff = Date.now() - birthDate.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  };

  const openFileDialog = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="container">
      <input
        type="file"
        onChange={handleFileChange}
        accept=".pdf"
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button className="btn w-48 ml-3 text-black border-black p-2 rounded" onClick={openFileDialog}>
        Upload PDF
      </button>

      {/* Form Fields */}
    
    </div>
  );
}

export default CustomPDFParser;
