import styled from 'styled-components';
import { SharedInputStyle, SharedWrapperInputStyle } from '../../styles/SharedWrapperInputStyle';
import { DefaultInputStyle } from '../types';

interface StyledDefaultEMailInputProps extends DefaultInputStyle {
    error: boolean;
}

const StyledDefaultStringInput = styled.div<StyledDefaultEMailInputProps>`
  ${SharedWrapperInputStyle}

  > input, textarea {
    ${SharedInputStyle}
  }
`;

export { StyledDefaultStringInput };
