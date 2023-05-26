import styled from 'styled-components';

interface StyledCustomFormProps {
    gap: number;
}

export const StyledCustomForm = styled.form<StyledCustomFormProps>`
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${props => props.gap}px;
  flex-direction: column;
`;
