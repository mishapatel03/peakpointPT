import { createSlice } from "@reduxjs/toolkit";
import { validationRules } from "../constants";

const initialState = {
    formData: {
        address: "",
        patientName: "",
        patientDOB: "",
        currentDate: "",
        bodyParts: [],
        patientHistoryName: "",
        patientHistoryAge: "",
        patientHistoryCondition: "",
        patientHistoryDuration: "",
        patientHistoryValue: "",
        durationValue: "",
        durationUnit: "",
        cause: "",
        social: "",
        testResults: "",
        arom: {},
        aromKeys: {},
        gait: "",
        DX: [],
        symptoms: [],
        radiatingArea: "",
        careonReason: "",
        careon: "",
        imagingReason: "",
        imaging: "",
        jerkOn: "",
        treatment: "",
        treatmentType: "",
        treatmentEffect: "",
        allergies: "",
        medications: "",
        pmh: [],
        psh: "",
        subjective: "",
        painScale: "",
        coordinate: "",
        sensation: "",
        skin: "",
        pulse: "",
        girth: "",
        jointMobsValues: []
    },
    errors: {},
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setFormField: (state, action) => {
            const { field, value } = action.payload;
            state.formData[field] = value;

            const rules = validationRules[field];
            const errors = { ...state.errors };

            if (rules && rules.required && !value) {
                errors[field] = rules.errorMessage;
            }
            else if (rules && rules.minLength && value.length < rules.minLength) {
                errors[field] = rules.errorMessage;
            } else {
                delete errors[field];
            }

            state.errors = errors;
        },
        validateField: (state, field, value) => {
            const rules = validationRules[field];
            const errors = { ...state.errors };

            if (rules && rules.required && !value) {
                errors[field] = rules.errorMessage;
            } else if (rules && rules.minLength && value.length < rules.minLength) {
                errors[field] = rules.errorMessage;
            } else {
                delete errors[field];
            }

            state.errors = errors;
        },
        validateForm: (state) => {
            const errors = {};
            Object.keys(validationRules).forEach((field) => {
                const rules = validationRules[field];
                const value = state.formData[field];

                if (rules.required && !value) {
                    errors[field] = rules.errorMessage;
                } else if (rules.minLength && value.length < rules.minLength) {
                    errors[field] = rules.errorMessage;
                }
            });

            state.errors = errors;
        },
        clearErrors: (state) => {
            state.errors = {};
        },
        resetForm: (state) => {
            state.formData = { ...initialState.formData };
            state.errors = {};
        },
    },
});

export const { setFormField, validateField, validateForm, clearErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;
