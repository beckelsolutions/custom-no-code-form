import { z } from 'zod';
import { InputTypes } from '../types';
import { dropdownSchema } from './dropdownSchema';

export const getZodValidationTypeMethod = (
    type: InputTypes,
    required: boolean,
    requiredMessage?: string,
    invalidMessage?: string
) => {
    switch (type) {
        case 'text':
            return required
                ? z.string({ required_error: requiredMessage ?? 'This field is required.' })
                : z.string().optional()
        case 'multiline text':
            return required
                ? z.string({ required_error: requiredMessage ?? 'This field is required.' })
                : z.string().optional()
        case 'number':
            return required
                ? z.number({ required_error: requiredMessage ?? 'This field is required.' })
                : z.number().optional()
        case 'boolean':
            return required
                ? z.boolean({ required_error: requiredMessage ?? 'This field is required.' })
                : z.boolean().optional()
        case 'e-mail':
            return required
                ?
                z
                    .string({ required_error: requiredMessage ?? 'This field is required.' })
                    .email({ message: invalidMessage ?? 'This format is invalid.' })
                :
                z.string().email().optional()
        case 'dropdown':
            return required
                ? dropdownSchema({ required_error: requiredMessage ?? 'This field is required.' })
                : z.string().optional()
    }
}


