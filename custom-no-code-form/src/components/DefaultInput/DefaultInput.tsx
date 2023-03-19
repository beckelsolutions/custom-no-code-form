import { useTsController } from '@ts-react/form';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { InputPropsCtx } from '../context';
import StyledDefaultInput from './DefaultInput.style';

export function DefaultInput() {
    try
    {
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
            <StyledDefaultInput>
                {inputJsx}
                {!!error && !!error.errorMessage && error.errorMessage.length > 0 &&
                    <span>{error.errorMessage}</span>}
            </StyledDefaultInput>
        );
    }
    catch {
        return (
            <StyledDefaultInput>
                <input type="text" placeholder="Placeholder" />
                <span>Errortext Example</span>
            </StyledDefaultInput>
        )
    }
}
