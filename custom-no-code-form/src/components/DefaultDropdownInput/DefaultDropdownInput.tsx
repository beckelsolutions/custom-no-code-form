import { useTsController } from '@ts-react/form';
import { useContext } from 'react';
import { InputPropsCtx } from '../context';
import { DefaultInputStyle } from '../types';
import { StyledDefaultDropdownInput } from './DefaultDropdownInput.style';

export interface DefaultDropdownInputProps extends DefaultInputStyle {
    options: string[];
}

function DefaultDropdownInput(props: DefaultDropdownInputProps) {
    try {
        const {
            field: { value, name, onChange },
            error
        } = useTsController<string>();
        const inputProps = useContext(InputPropsCtx)[name];

        return (
            <StyledDefaultDropdownInput {...props} error={!!error}>
                <select
                    value={!!value ? value : undefined}
                    onChange={e => onChange(e.target.value)}
                >
                    {!value && <option value={undefined}>{inputProps.label}</option>}
                    {props.options.map(e => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}
                </select>
                <span>{error?.errorMessage && error.errorMessage}</span>
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
