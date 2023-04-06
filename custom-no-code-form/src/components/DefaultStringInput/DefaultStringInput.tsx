import { useTsController } from '@ts-react/form';
import { ChangeEvent, useContext } from 'react';
import { InputPropsCtx } from '../context';
import { StyledDefaultStringInput } from './DefaultStringInput.style';
import { DefaultInputStyle, InputInformation } from '../types';

export interface DefaultStringInputProps extends DefaultInputStyle, InputInformation {}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function DefaultStringInput(props: DefaultStringInputProps) {
    try {
        const {
            field: { name, onChange },
            error
        } = useTsController<string>();
        const inputProps = useContext(InputPropsCtx)[name];

        const stringInputProps = {
            type: "text",
            name: name,
            placeholder: inputProps.label + (inputProps.required ? " *" : ""),
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const value = e.target.value
                onChange(value.length > 0 ? value : undefined)
            }
        }

        let inputJsx = <input {...stringInputProps} />;
        if (inputProps.inputType === 'multiline text') {
            inputJsx = <textarea {...stringInputProps} />
        }

        return (
            <StyledDefaultStringInput {...props} error={!!error}>
                {inputJsx}
                {!!error && !!error.errorMessage && error.errorMessage.length > 0 &&
                    <span>{error.errorMessage}</span>}
            </StyledDefaultStringInput>
        );
    } catch {
        return (
            <StyledDefaultStringInput {...props} error={false}>
                <input type="text" placeholder="Placeholder" />
                <span>Errortext Example</span>
            </StyledDefaultStringInput>
        )
    }
}
