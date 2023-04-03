import styled from 'styled-components';
import { SharedInputStyle, SharedWrapperInputStyle } from '../../styles/SharedWrapperInputStyle';
import { DefaultInputStyle } from '../types';

interface StyledDefaultNumberInputProps extends DefaultInputStyle {
    error: boolean;
}

const StyledDefaultNumberInput = styled.div<StyledDefaultNumberInputProps>`
  ${SharedWrapperInputStyle}
  
  > textarea {
    resize: vertical;
  }

  > input, textarea {
    ${SharedInputStyle}
  }
`;

export { StyledDefaultNumberInput };
