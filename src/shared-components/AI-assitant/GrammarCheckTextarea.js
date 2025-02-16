import React, { useState } from "react";
import axios from "axios";
import { FaLightbulb } from "react-icons/fa";

const GrammarCheckTextarea = ({ value, onChange, placeholder, fieldName }) => {
    const [loading, setLoading] = useState(false);
    const [correctedText, setCorrectedText] = useState("");

    const checkGrammar = async () => {
        setLoading(true);

        try {
            const response = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + process.env.REACT_APP_GEMINI_API_KEY,
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Paraphrase the following sentence with correct grammar: ${value}`,
                                },
                            ],
                        },
                    ],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const correctedValue = response?.data.candidates[0]?.content?.parts[0]?.text.trim();
            onChange(fieldName, correctedValue); // Update the parent state
            setCorrectedText(correctedValue);
        } catch (error) {
            console.error("Error correcting grammar:", error);
            setCorrectedText("Error: Unable to correct grammar.");
        }

        setLoading(false);
    };

    return (
        <div className="mt-7">
            <div className="flex items-center text-lg font-bold">
                <span>{placeholder}</span>
                <span className="cursor-pointer text-gray-600 hover:text-black ml-2">
                    <FaLightbulb size={15} onClick={checkGrammar} title="AI Assistance" />
                </span>
            </div>
            <textarea
                value={value}
                type="text"
                style={{ width: "100%", minHeight: "50px", margin: "10px 0" }}
                placeholder={placeholder}
                onChange={(e) => onChange(fieldName, e.target.value)}
                className="bg-white p-4 rounded-md border-2 rounded-[5px]"
            />
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default GrammarCheckTextarea;