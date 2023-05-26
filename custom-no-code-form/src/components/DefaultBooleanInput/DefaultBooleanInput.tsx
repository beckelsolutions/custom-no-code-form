import { ErrorMessage } from '@hookform/error-message';
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

        console.log('in boolean input req: ', props.requiredErrorMessage)
        console.log('in boolean input invalid: ', props.invalidErrorMessage)

        return (
            <StyledDefaultBooleanInput
                {...props}
                error={!!errors[props.name]}
            >
                <label htmlFor={props.name}>
                    <input {...register(props.name)} type='checkbox' id={props.name} />
                    {props.label}
                </label>
                {!!errors[props.name] &&
                    <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
            </StyledDefaultBooleanInput>
        );
    } catch {
        return (
            <StyledDefaultBooleanInput {...props} error={false}>
                <label htmlFor={props.name}>
                    <input type="checkbox" checked={false} id={props.name} />
                    {props.label}
                </label>
                <span>Errortext Example</span>
            </StyledDefaultBooleanInput>
        );
    }
}

export { DefaultBooleanInput };
