import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { DefaultInputStyle, InputInformation } from '../types';
import { StyledDefaultNumberInput } from './DefaultNumberInput.style';

export interface DefaultNumberInputProps extends DefaultInputStyle, InputInformation {
    max: number;
    min: number;
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function DefaultNumberInput(props: DefaultNumberInputProps) {
    try {
        const { register, formState: { errors } } = useFormContext();

        const numberInputProps = {
            ...register(props.name),
            type: 'number',
            placeholder: props.label + (props.required ? " *" : ""),
        }

        return (
            <StyledDefaultNumberInput {...props} error={!!errors}>
                <input {...numberInputProps} min={props.min} max={props.max} />
                {!!errors && <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
            </StyledDefaultNumberInput>
        );
    } catch {
        return (
            <StyledDefaultNumberInput {...props} error={false}>
                <input type='number' placeholder='Placeholder' />
                <span>Errortext Example</span>
            </StyledDefaultNumberInput>
        )
    }
}
