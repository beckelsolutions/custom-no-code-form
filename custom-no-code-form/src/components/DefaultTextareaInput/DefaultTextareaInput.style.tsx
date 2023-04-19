import styled from 'styled-components';
import { SharedInputStyle, SharedWrapperInputStyle } from '../../styles/SharedWrapperInputStyle';
import { DefaultInputStyle } from '../types';

interface StyledDefaultTextareaInputProps extends DefaultInputStyle {
    error: boolean;
}

const StyledDefaultTextareaInput = styled.div<StyledDefaultTextareaInputProps>`
  ${SharedWrapperInputStyle}
  
  > textarea {
    resize: vertical;
    ${SharedInputStyle}
  }
`;

export { StyledDefaultTextareaInput };
