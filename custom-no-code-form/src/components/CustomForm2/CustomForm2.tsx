import { zodResolver } from '@hookform/resolvers/zod';
import { createTsForm } from '@ts-react/form';
import React, { Children, cloneElement, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodObject, ZodSchema } from 'zod';
import { DynamicInputPropsObject, InputPropsCtx } from '../context';
import { CustomForm2Style } from './CustomForm2.style';
import { InputInformationFromFramer, StyleInformationFromFramer } from './CustomForm2.types';
import { dropdownSchema } from './dropdownSchema';
import { getZodValidationTypeMethod } from './getZodValidationTypeMethod';
import { zodSchema } from './zodSchema';

interface CustomForm2Props {
    inputs: ReactElement[]
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
export function CustomForm2(props: CustomForm2Props) {
    const scheme = props.inputs.reduce(
        (newScheme: any, currentInput) => {
            const inputProps = currentInput.props.children.props;
            if (inputProps.inputType === 'container') {
                console.log('subInputProps', inputProps);
                const subScheme = inputProps.inputs.reduce(
                    (s: any, currentSubInput: ReactElement) => {
                        const subInputProps = currentSubInput.props.children.props;
                        s[subInputProps.name] = getZodValidationTypeMethod(
                            subInputProps.inputType,
                            subInputProps.required,
                            subInputProps.requiredMessage,
                            subInputProps.invalidMessage
                        );
                        return s;
                    }
                );
                return {...newScheme, ...subScheme};
            }
            newScheme[inputProps.name] = getZodValidationTypeMethod(
                inputProps.inputType,
                inputProps.required,
                inputProps.requiredMessage,
                inputProps.invalidMessage
            );
            return newScheme;
        },
        {} as any
    );
    console.log('scheme', scheme);
    const {} = useForm({ resolver: zodResolver(z.object(scheme))});

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

    return (
        <form>
            {props.inputs.map(input => input)}
        </form>
    );
}
