import { useTsController } from '@ts-react/form';
import { ChangeEvent, useContext } from 'react';
import { InputPropsCtx } from '../context';
import { StyledDefaultStringInput } from '../DefaultStringInput/DefaultStringInput.style';
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
        const {
            field: { name, onChange },
            error
        } = useTsController<number>();
        const inputProps = useContext(InputPropsCtx)[name];

        const stringInputProps = {
            type: 'number',
            name: name,
            placeholder: inputProps.label + (inputProps.required ? " *" : ""),
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.valueAsNumber;
                onChange(value !== undefined && !isNaN(value) ? value : undefined)
            }
        }

        return (
            <StyledDefaultNumberInput {...props} error={!!error}>
                <input {...stringInputProps} min={props.min} max={props.max} />
                {!!error && !!error.errorMessage && error.errorMessage.length > 0 &&
                    <span>{error.errorMessage}</span>}
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
