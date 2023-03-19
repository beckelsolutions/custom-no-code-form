import { createContext } from 'react';
import { InputTypes } from './CustomForm/CustomForm.types';

export interface InputProps {
    label: string;
    inputType: InputTypes;
    required: boolean;
}

export interface DynamicInputPropsObject {
    [key: string]: InputProps;
}

export const InputPropsCtx = createContext<DynamicInputPropsObject>({})

// export const useInputProps = create<UseInputProps>(set => ({
//     props: {},
//     setProps: (props: InputInformationFromFramer[]) => set(state => {
//         props.forEach(it => state.props[it.name] = { label: it.label, inputType: it.inputType, required: it.required })
//         return state;
//     }),
// }));
