import { createSlice } from "@reduxjs/toolkit";
import { validationRules } from "../constants";

const initialState = {
    formData: {
        address: "",
        patientName: "",
        patientDOB: "",
        currentDate: "",
        dxValues: ['']
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
        setDXValues: (state, action) => {
            const { index, value } = action.payload;

            if (Array.isArray(action.payload)) {
                state.formData.dxValues = action.payload;
            } else {
                const updatedDXValues = [...state.formData.dxValues];
                if (index !== undefined) {
                    updatedDXValues[index] = value;
                }
                state.formData.dxValues = updatedDXValues;
            }
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
    },
});

export const { setFormField, setDXValues, validateField, validateForm, clearErrors } = formSlice.actions;
export default formSlice.reducer;
