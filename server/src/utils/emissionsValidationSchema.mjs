import { checkSchema } from 'express-validator';

export const emissionsValidationSchema = checkSchema({
    energy: {
        in: ['body'],
        exists: {
            errorMessage: 'Energy is required.'
        },
        isFloat: {
            errorMessage: 'Energy must be a number (integer or float).'
        },
    },
    unit: {
        exists: {
            errorMessage: "'unit' is required.",
        },
        isString: {
            errorMessage: "'unit' must be a string.",
        },
        isIn: {
            options: [['kWh', 'MWh', 'GJ', 'MJ']],
            errorMessage: "'unit' must be one of 'kWh', 'MWh', 'GJ', or 'MJ'.",
        },
    },
});