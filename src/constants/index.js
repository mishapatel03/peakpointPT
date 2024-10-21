export const TEXT_INPUT = 1;
export const TEXT_AREA = 2;

export const validationRules = {
    address: {
        required: true,
        errorMessage: "Address is required",
    },
    patientName: {
        required: true,
        minLength: 2,
        errorMessage: "Patient name must be at least 2 characters",
    },
    patientDOB: {
        required: true,
        errorMessage: "Date of birth is required",
    },
    currentDate: {
        required: true,
        errorMessage: "Current date is required",
    },
}