import { z } from 'zod';
import { InputInformationFromFramer } from './CustomForm2.types';
import { getZodValidationTypeMethod } from './getZodValidationTypeMethod';

export const zodSchema = (inputs: InputInformationFromFramer[]) => z.object(
    inputs.reduce((newObject: any, currentInput) => {
        newObject[currentInput.name] = getZodValidationTypeMethod(
            currentInput.inputType,
            currentInput.required,
            currentInput.errorMessage,
            currentInput.emailInvalidMessage
        )
        return newObject
    }, {})
);
