import { ErrorMessage } from '@hookform/error-message';
import { useTsController } from '@ts-react/form';
import { ChangeEvent, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
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
        // const {
        //     field: { name, onChange },
        //     error
        // } = useTsController<string>();
        // const inputProps = useContext(InputPropsCtx)[name];
        const { register, formState: { errors } } = useFormContext();

        const stringInputProps = {
            ...register(props.name),
            type: "text",
            placeholder: props.label + (props.required ? " *" : ""),
        }

        let inputJsx = <input {...stringInputProps} />;
        if (props.inputType === 'multiline text') {
            inputJsx = <textarea {...stringInputProps} />
        }

        return (
            <StyledDefaultStringInput {...props} error={!!errors}>
                {inputJsx}
                <ErrorMessage errors={errors} name={props.name} render={({ message }) => <span>{message}</span>} />
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
