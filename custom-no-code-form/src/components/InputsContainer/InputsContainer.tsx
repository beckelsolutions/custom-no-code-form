import { ReactElement } from 'react';
import { InputInformation } from '../types';
import { StyledInputsContainer } from './InputsContainer.style';

interface InputsContainerProps extends InputInformation {
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
