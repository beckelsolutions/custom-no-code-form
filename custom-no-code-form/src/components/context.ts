import { createContext } from 'react';
import { InputTypes } from './types';

export interface InputProps {
    label: string;
    inputType: InputTypes;
    required: boolean;
}

export interface DynamicInputPropsObject {
    [key: string]: InputProps;
}

export const InputPropsCtx = createContext<DynamicInputPropsObject>({})
