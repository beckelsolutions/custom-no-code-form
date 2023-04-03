import styled from 'styled-components';
import { DefaultInputStyle } from '../types';

interface StyledDefaultBooleanInputProps {
    width: number;
    height: number;
    font: {
        font: string;
        size: number;
        errorColor: string;
    };
    error: boolean;
}

const StyledDefaultBooleanInput = styled.div<StyledDefaultBooleanInputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > label {
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
    font-family: ${(props) => props.font.font};
    font-size: ${(props) => props.font.size}px;

    > input {
      width: ${(props) => props.width}px;
      height: ${(props) => props.height}px;
    }
  }

  > span {
    font-family: ${(props) => props.font.font};
    font-size: ${(props) => props.font.size}px;
    margin-left: 5px;
    color: ${(props) => props.font.errorColor};
  }
`;

export { StyledDefaultBooleanInput };
