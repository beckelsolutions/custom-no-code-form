import { useTsController } from '@ts-react/form';
import { useContext } from 'react';
import { InputPropsCtx } from '../context';
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
        const {
            field: { onChange, value, name },
            error,
        } = useTsController<boolean>()
        const inputProps = useContext(InputPropsCtx)[name];

        return (
            <StyledDefaultBooleanInput
                {...props}
                error={!!error}
                onClick={() => onChange(value === true ? undefined : true)}
            >
                <label>
                    <input type="checkbox" checked={value} />
                    {inputProps.label}
                </label>
                {!!error &&
                    !!error.errorMessage &&
                    error.errorMessage.length > 0 && (
                        <span>{error.errorMessage}</span>
                    )}
            </StyledDefaultBooleanInput>
        );
    } catch {
        return (
            <StyledDefaultBooleanInput {...props} error={false}>
                <label>
                    <input type="checkbox" checked={false} />
                    Labeltext Example
                </label>
                <span>Errortext Example</span>
            </StyledDefaultBooleanInput>
        );
    }
}

export { DefaultBooleanInput };
