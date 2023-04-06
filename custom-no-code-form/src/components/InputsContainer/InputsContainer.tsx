import { ReactElement } from 'react';
import { InputType } from '../types';
import { StyledInputsContainer } from './InputsContainer.style';

interface InputsContainerProps extends InputType {
    inputs: ReactElement[];
    gap: number;
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
function InputsContainer(props: InputsContainerProps) {
    return (
        <StyledInputsContainer {...props}>
            {props.inputs.map(input => input)}
        </StyledInputsContainer>
    )
}

export { InputsContainer };
