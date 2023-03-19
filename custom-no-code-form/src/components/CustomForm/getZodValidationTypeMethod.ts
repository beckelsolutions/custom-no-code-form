import { z } from 'zod';

export const getZodValidationTypeMethod = (
    type: string,
    required: boolean,
    errorMessage: string,
    emailInvalidMessage: string
) => {
    switch (type) {
        case "text":
            return required
                ? z.string({ required_error: errorMessage })
                : z.string().optional()
        case "multiline text":
            return required
                ? z.string({ required_error: errorMessage })
                : z.string().optional()
        case "number":
            return required
                ? z.number({ required_error: errorMessage })
                : z.number().optional()
        case "boolean":
            return required
                ? z.boolean({ required_error: errorMessage })
                : z.boolean().optional()
        case "e-mail":
            return required
                ? z.string({ required_error: errorMessage }).email({ message: emailInvalidMessage })
                : z.string().email().optional()
    }
}
