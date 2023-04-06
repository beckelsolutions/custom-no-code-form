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
    // const inputMapping = [
    //     [z.string(), () => props.textInput] as const,
    //     [z.boolean(), () => props.booleanInput] as const,
    //     [z.number(), () => props.numberInput] as const,
    //     [dropdownSchema({ required_error: '' }), () => props.dropdownInput] as const
    // ] as const;
    // const MyForm = createTsForm(inputMapping);

    console.log('inputs', props.inputs)

    const scheme = props.inputs.reduce(
        (newScheme: any, currentInput) => {
            const inputProps = currentInput.props.children.props;
            if (inputProps.inputType === 'container') return newScheme;
            console.log('inputProps', inputProps);
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

    // const inputProps: DynamicInputPropsObject = props.inputs.reduce(
    //     (newInputProps: DynamicInputPropsObject, currentInput) => {
    //         newInputProps[currentInput.name] = {
    //             label: currentInput.label,
    //             inputType: currentInput.inputType,
    //             required: currentInput.required
    //         }
    //         return newInputProps;
    //     },
    //     {} as DynamicInputPropsObject
    // );

    return (
        <div>
            First version of new Custom Form. Placeholder text.
        </div>
    );
}
