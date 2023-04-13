import { z } from 'zod';
import { InputTypes } from '../types';

export const getZodValidationTypeMethod = (
    type: InputTypes,
    required: boolean,
    requiredMessage?: string,
    invalidMessage?: string
) => {
    const defaultRequiredMessage = 'This field is required.';
    switch (type) {
        case 'text':
            return required
                ? z.string({ required_error: requiredMessage ?? defaultRequiredMessage })
                : z.string().optional()
        case 'multiline text':
            return required
                ? z.string({ required_error: requiredMessage ?? defaultRequiredMessage })
                : z.string().optional()
        case 'number':
            return required
                ? z.number({ required_error: requiredMessage ?? defaultRequiredMessage })
                : z.number().optional()
        case 'boolean':
            return required
                ? z.boolean({ required_error: requiredMessage ?? defaultRequiredMessage })
                : z.boolean().optional()
        case 'e-mail':
            return required
                ?
                z
                    .string({ required_error: requiredMessage ?? defaultRequiredMessage })
                    .email({ message: invalidMessage ?? 'This format is invalid.' })
                :
                z.string().email().optional()
        case 'dropdown':
            return required
                ? z.string({ required_error: requiredMessage ?? defaultRequiredMessage })
                : z.string().optional()
    }
}


