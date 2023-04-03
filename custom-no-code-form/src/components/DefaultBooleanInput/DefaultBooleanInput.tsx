import { useTsController } from '@ts-react/form';
import { useContext } from 'react';
import { InputPropsCtx } from '../context';
import { DefaultInputStyle } from '../types';
import { StyledDefaultBooleanInput } from './DefaultBooleanInput.style';

export interface DefaultBooleanInputProps {
    width: number;
    height: number;
    font: {
        font: string;
        size: number;
        errorColor: string;
    }
}

function DefaultBooleanInput(props: DefaultBooleanInputProps) {
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
    )
}

export { DefaultBooleanInput };
