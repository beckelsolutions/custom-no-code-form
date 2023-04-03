import styled from 'styled-components';
import { BorderStyle, BorderWithRadiusStyle } from '../types';

interface StyledDefaultButtonProps {
    padding: string;
    fillColor: string;
    font: {
        font: string;
        size: number;
        color: string;
    }
    borderTop: BorderWithRadiusStyle;
    borderRight: BorderStyle;
    borderBottom: BorderWithRadiusStyle;
    borderLeft: BorderStyle;
}

const StyledDefaultButton = styled.button<StyledDefaultButtonProps>`
  width: 100%;
  font-family: ${(props) => props.font.font};
  font-size: ${(props) => props.font.size}px;
  
  background-color: ${(props) => props.fillColor};
  color: ${(props) => props.font.color};
  padding: ${(props) => props.padding};
  cursor: pointer;
  
  // border style
  border-style: solid;
  // border radius
  border-top-left-radius: ${props => props.borderTop.leftRadius}px;
  border-top-right-radius: ${props => props.borderTop.rightRadius}px;
  border-bottom-left-radius: ${props => props.borderBottom.leftRadius}px;
  border-bottom-right-radius: ${props => props.borderBottom.rightRadius}px;
  // border width
  border-top-width: ${props => props.borderTop.thickness}px;
  border-right-width: ${props => props.borderRight.thickness}px;
  border-bottom-width: ${props => props.borderBottom.thickness}px;
  border-left-width: ${props => props.borderLeft.thickness}px;
  // border color
  border-top-color: ${props => props.borderTop.color};
  border-right-color: ${props => props.borderRight.color};
  border-bottom-color: ${props => props.borderBottom.color};
  border-left-color: ${props => props.borderLeft.color};
`;

export {StyledDefaultButton};
