import styled from 'styled-components';

interface StyledInputsContainerProps {
    alignItems: string;
    justifyContent: string;
    gap: number;
}

const StyledInputsContainer = styled.div<StyledInputsContainerProps>`
  width: 100%;
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap}px;
`;

export { StyledInputsContainer };
