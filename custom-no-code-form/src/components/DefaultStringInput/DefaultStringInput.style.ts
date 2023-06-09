import styled from 'styled-components';
import { SharedInputStyle, SharedWrapperInputStyle } from '../../styles/SharedWrapperInputStyle';
import { DefaultInputStyle } from '../types';

interface StyledDefaultStringInputProps extends DefaultInputStyle {
    error: boolean;
}

const StyledDefaultStringInput = styled.div<StyledDefaultStringInputProps>`
  ${SharedWrapperInputStyle}
  
  > input {
       ${SharedInputStyle}
  }
`;

export { StyledDefaultStringInput };
