import { ErrorMessage } from '@hookform/error-message';
import { useTsController } from '@ts-react/form';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputPropsCtx } from '../context';
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
            <StyledDefaultDropdownInput {...props} error={!!errors}>
                <select {...register(props.name)}>
                    {!getValues(props.name) && <option value={undefined}>{props.label}</option>}
                    {props.options.map(e => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
                {!!errors && <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />}
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
