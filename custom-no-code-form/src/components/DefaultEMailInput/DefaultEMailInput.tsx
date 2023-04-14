import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { StyledDefaultStringInput } from './DefaultEMailInput.style';
import { DefaultInputStyle, InputInformation } from '../types';

export interface DefaultEMailInputProps extends DefaultInputStyle, InputInformation {}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function DefaultEMailInput(props: DefaultEMailInputProps) {
    try {
        const { register, formState: { errors } } = useFormContext();

        const stringInputProps = {
            ...register(props.name),
            type: 'email',
            placeholder: props.label + (props.required ? ' *' : ''),
        }

        return (
            <StyledDefaultStringInput {...props} error={!!errors}>
                <input {...stringInputProps} />
                {!!errors && <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
            </StyledDefaultStringInput>
        );
    } catch {
        return (
            <StyledDefaultStringInput {...props} error={false}>
                <input type='email' placeholder='Placeholder' />
                <span>Errortext Example</span>
            </StyledDefaultStringInput>
        )
    }
}
