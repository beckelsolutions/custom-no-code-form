import { InputTypes } from '../types';

export interface InputInformationFromFramer {
    name: string;
    label: string;
    inputType: InputTypes;
    required: boolean;
    errorMessage: string;
    emailInvalidMessage: string;
}

export interface StyleInformationFromFramer {
    gap: number;
}
