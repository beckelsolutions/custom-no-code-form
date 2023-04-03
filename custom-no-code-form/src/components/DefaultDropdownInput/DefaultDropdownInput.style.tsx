import styled from 'styled-components';
import { SharedInputStyle, SharedWrapperInputStyle } from '../../styles/SharedWrapperInputStyle';
import { DefaultInputStyle } from '../types';

interface StyledDefaultDropdownInputProps extends DefaultInputStyle {
  error: boolean;
}

const StyledDefaultDropdownInput = styled.div<StyledDefaultDropdownInputProps>`
  ${SharedWrapperInputStyle}

  > select {
    ${SharedInputStyle}

    > .placeholder {
      color: ${props => props.font.placeholderColor};
    }
  }
`;

export { StyledDefaultDropdownInput };
