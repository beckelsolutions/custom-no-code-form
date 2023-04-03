export interface InputInformationFromFramer {
    name: string;
    label: string;
    inputType: InputTypes;
    required: boolean;
    errorMessage: string;
    emailInvalidMessage: string;
}

export type InputTypes = 'text' | 'multiline text' | 'number' | 'boolean' | 'e-mail'  | 'dropdown';

export interface StyleInformationFromFramer {
    gap: number;
}
