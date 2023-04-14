import { z } from 'zod';
import { InputTypes } from '../types';

export const getZodValidationTypeMethod = (
    type: InputTypes,
    required: boolean,
    requiredMessage?: string,
    invalidMessage?: string
) => {
    const defaultRequiredMessage = 'This field is required.';
    const defaultInvalidMessage = 'This field has the wrong format.';
    switch (type) {
        case 'text':
            return required
                ?
                z.string({ required_error: requiredMessage ?? defaultRequiredMessage })
                    .trim()
                    .min(1, { message: requiredMessage })
                :
                z.string().trim().optional()
        case 'multiline text':
            return required
                ?
                z.string({ required_error: requiredMessage ?? defaultRequiredMessage })
                    .trim()
                    .min(1, { message: requiredMessage })
                :
                z.string().trim().optional()
        case 'number':
            return required
                ?
                z.number({
                    required_error: requiredMessage ?? defaultRequiredMessage,
                    invalid_type_error: invalidMessage ?? defaultInvalidMessage
                })
                :
                z.number().optional()
        case 'boolean':
            return required
                ?
                z.literal<boolean>(true, { errorMap: () => ({ message: requiredMessage ?? defaultRequiredMessage }) })
                :
                z.boolean().optional()
        case 'e-mail':
            return required
                ?
                z
                    .string({ required_error: requiredMessage ?? defaultRequiredMessage })
                    .trim()
                    .min(1, { message: requiredMessage })
                    .email({ message: invalidMessage ?? defaultInvalidMessage })
                :
                z.string().email().optional()
        case 'dropdown':
            return required
                ?
                z.string({ required_error: requiredMessage ?? defaultRequiredMessage })
                    .trim()
                    .min(1, { message: requiredMessage })
                :
                z.string().trim().optional()
    }
}


