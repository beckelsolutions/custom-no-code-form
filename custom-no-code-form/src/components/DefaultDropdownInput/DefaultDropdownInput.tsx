import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { DefaultInputStyle, InputInformation } from '../types';
import { StyledDefaultDropdownInput } from './DefaultDropdownInput.style';

export interface DefaultDropdownInputProps extends DefaultInputStyle, InputInformation {
    options: string[];
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
function DefaultDropdownInput(props: DefaultDropdownInputProps) {
    try {
        const { register, getValues, formState: { errors } } = useFormContext();

        return (
            <StyledDefaultDropdownInput {...props} error={!!errors[props.name]}>
                <select {...register(props.name)}>
                    <option value={''} disabled selected>{props.label}</option>
                    {props.options.map(e => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
                {!!errors[props.name] &&
                    <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
            </StyledDefaultDropdownInput>
        );
    } catch {
        return (
            <StyledDefaultDropdownInput {...props} error={false}>
                <select value={undefined}>
                    <option value={undefined}>Placeholder</option>
                    {props.options.map(e => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
                <span>Errortext Example</span>
            </StyledDefaultDropdownInput>
        );
    }
}

export { DefaultDropdownInput };
