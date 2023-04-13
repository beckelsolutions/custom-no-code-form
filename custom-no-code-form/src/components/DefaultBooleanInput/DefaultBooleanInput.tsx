import { ErrorMessage } from '@hookform/error-message';
import { useTsController } from '@ts-react/form';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputInformation } from '../types';
import { StyledDefaultBooleanInput } from './DefaultBooleanInput.style';

export interface DefaultBooleanInputProps extends InputInformation {
    width: number;
    height: number;
    font: {
        font: string;
        size: number;
        errorColor: string;
    }
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
function DefaultBooleanInput(props: DefaultBooleanInputProps) {
    try {
        const { register, formState: { errors } } = useFormContext();

        return (
            <StyledDefaultBooleanInput
                {...props}
                error={!!errors}
            >
                <label htmlFor={props.name}>
                    <input {...register(props.name)} type='checkbox' id={props.name} />
                    {props.label}
                </label>
                <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />
            </StyledDefaultBooleanInput>
        );
    } catch {
        return (
            <StyledDefaultBooleanInput {...props} error={false}>
                <label htmlFor={props.name}>
                    <input type="checkbox" checked={false} id={props.name} />
                    Labeltext Example
                </label>
                <span>Errortext Example</span>
            </StyledDefaultBooleanInput>
        );
    }
}

export { DefaultBooleanInput };
