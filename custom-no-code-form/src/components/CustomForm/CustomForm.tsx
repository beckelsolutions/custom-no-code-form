import { zodResolver } from '@hookform/resolvers/zod';
import React, { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { StyledCustomForm } from './CustomForm.style';
import { StyleInformationFromFramer } from './CustomForm.types';
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
export function CustomForm(props: CustomForm2Props) {
    const scheme = props.inputs.reduce(
        (newScheme: any, currentInput) => {
            const inputProps = currentInput.props.children.props;
            if (inputProps.inputType === 'button') return newScheme;
            if (inputProps.inputType === 'container') {
                const subScheme = inputProps.inputs.reduce(
                    (s: any, currentSubInput: ReactElement) => {
                        const subInputProps = currentSubInput.props.children.props;
                        if (subInputProps.inputType === 'button') return s;
                        s[subInputProps.name] = getZodValidationTypeMethod(
                            subInputProps.inputType,
                            subInputProps.required,
                            subInputProps.requiredErrorMessage,
                            subInputProps.invalidErrorMessage
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
                inputProps.requiredErrorMessage,
                inputProps.invalidErrorMessage
            );
            return newScheme;
        },
        {} as any
    );

    const formProvider = useForm({ resolver: zodResolver(z.object(scheme)) });
    const handleSubmit = formProvider.handleSubmit;

    const submit = (data: any) => {
        console.log(data);
        fetch(props.sendTo, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(() => alert(props.messages.success))
            .catch(() => alert(props.messages.error))
    }

    return (
        <FormProvider {...formProvider}>
            <StyledCustomForm
                onSubmit={handleSubmit(submit)}
                gap={props.style.gap}
            >
                {props.inputs.map(input => input)}
            </StyledCustomForm>
        </FormProvider>
    );
}
