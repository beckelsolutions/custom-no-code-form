import { createTsForm } from '@ts-react/form';
import { Children, cloneElement, ReactElement, useEffect } from 'react';
import { z } from 'zod';
import { DynamicInputPropsObject, InputProps, InputPropsCtx } from '../context';
import { CustomFormStyle } from './CustomForm.style';
import { InputInformationFromFramer, StyleInformationFromFramer } from './CustomForm.types';
import { dropdownSchema } from './dropdownSchema';
import { zodSchema } from './zodSchema';

interface CustomFormProps {
    textInput: ReactElement;
    numberInput: ReactElement;
    booleanInput: ReactElement;
    dropdownInput: ReactElement;
    submitButton: ReactElement;
    inputs: InputInformationFromFramer[]
    style: StyleInformationFromFramer;
    sendTo: string;
    messages: {
        success: string;
        error: string;
    }
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function CustomForm(props: CustomFormProps) {
    const inputMapping = [
        [z.string(), () => props.textInput] as const,
        [z.boolean(), () => props.booleanInput] as const,
        [z.number(), () => props.numberInput] as const,
        [dropdownSchema({ required_error: '' }), () => props.dropdownInput] as const
    ] as const;
    const MyForm = createTsForm(inputMapping);

    const submit = (data: any) => {
        fetch(props.sendTo, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        })
            .then(() => alert(props.messages.success))
            .catch(() => alert(props.messages.error))
    }

    const inputProps: DynamicInputPropsObject = props.inputs.reduce(
        (newInputProps: DynamicInputPropsObject, currentInput) => {
            newInputProps[currentInput.name] = {
                label: currentInput.label,
                inputType: currentInput.inputType,
                required: currentInput.required
            }
            return newInputProps;
        },
        {} as DynamicInputPropsObject
    );

    return (
        <div>
            <InputPropsCtx.Provider value={inputProps}>
                <MyForm
                    schema={zodSchema(props.inputs)}
                    onSubmit={submit}
                    renderAfter={() =>
                        Children.map(props.submitButton, (child, index) => {
                            return cloneElement(child, {
                                key: index,
                                type: "submit",
                            })
                        })
                    }
                    formProps={{ style: { ...CustomFormStyle, gap: props.style.gap } }}
                />
            </InputPropsCtx.Provider>
        </div>
    );
}
