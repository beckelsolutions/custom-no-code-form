import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { DefaultInputStyle, InputInformation } from '../types';
import { StyledDefaultTextareaInput } from './DefaultTextareaInput.style';

export interface DefaultTextareaInputProps extends DefaultInputStyle, InputInformation {}

export function DefaultTextareaInput(props: DefaultTextareaInputProps) {
    try {
        const { register, formState: { errors } } = useFormContext();

        const textareaInputProps = {
            ...register(props.name),
            placeholder: props.label + (props.required ? ' *' : ''),
        }

        return (
            <StyledDefaultTextareaInput {...props} error={!!errors[props.name]}>
                <textarea {...textareaInputProps} />
                {!!errors[props.name] &&
                    <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
            </StyledDefaultTextareaInput>
        );
    } catch {
        return (
            <StyledDefaultTextareaInput {...props} error={false}>
                <textarea placeholder={props.label} />
                <span>Errortext Example</span>
            </StyledDefaultTextareaInput>
        )
    }
}
