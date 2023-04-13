import { zodResolver } from '@hookform/resolvers/zod';
import React, { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { StyleInformationFromFramer } from './CustomForm2.types';
import { getZodValidationTypeMethod } from './getZodValidationTypeMethod';

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
            if (inputProps.inputType === 'button') return newScheme;
            if (inputProps.inputType === 'container') {
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
                    },
                    {}
                );
                return { ...newScheme, ...subScheme };
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
    const formProvider = useForm({ resolver: zodResolver(z.object(scheme)) });
    const handleSubmit = formProvider.handleSubmit;

    const submit = (data: any) => {
        console.log(data);
        // fetch(props.sendTo, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(() => alert(props.messages.success))
        //     .catch(() => alert(props.messages.error))
    }

    return (
        <FormProvider {...formProvider}>
            <form
                onSubmit={handleSubmit(submit)}
                style={{ display: 'flex', flexDirection: 'column', gap: props.style.gap + 'px' }}
            >
                {props.inputs.map(input => input)}
            </form>
        </FormProvider>
    );
}
