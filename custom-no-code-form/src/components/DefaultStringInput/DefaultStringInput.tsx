import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { StyledDefaultStringInput } from './DefaultStringInput.style';
import { DefaultInputStyle, InputInformation } from '../types';

export interface DefaultStringInputProps extends DefaultInputStyle, InputInformation {}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function DefaultStringInput(props: DefaultStringInputProps) {
    try {
        const { register, formState: { errors } } = useFormContext();

        const stringInputProps = {
            ...register(props.name),
            type: 'text',
            placeholder: props.label + (props.required ? ' *' : ''),
        }

        return (
            <StyledDefaultStringInput {...props} error={!!errors[props.name]}>
                <input {...stringInputProps} />
                {!!errors[props.name] &&
                    <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
            </StyledDefaultStringInput>
        );
    } catch {
        return (
            <StyledDefaultStringInput {...props} error={false}>
                <input type='text' placeholder={props.label} />
                <span>Errortext Example</span>
            </StyledDefaultStringInput>
        )
    }
}
