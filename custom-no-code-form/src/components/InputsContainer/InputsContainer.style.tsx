import styled from 'styled-components';

interface StyledInputsContainerProps {
    gap: number;
}

const StyledInputsContainer = styled.div<StyledInputsContainerProps>`
  display: flex;
  gap: ${props => props.gap}px;
`;

export { StyledInputsContainer };
