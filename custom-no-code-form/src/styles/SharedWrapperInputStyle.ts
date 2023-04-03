import { css } from 'styled-components';
import { DefaultInputStyle } from '../components/types';

interface SharedInputStyleProps extends DefaultInputStyle {
  error: boolean;
}

const SharedWrapperInputStyle = css<SharedInputStyleProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap}px;

  font-family: ${props => props.font.font};
  font-size: ${props => props.font.size}px;

  > span {
    font-family: ${props => props.font.font};
    font-size: ${props => props.font.size}px;
    margin-left: 5px;
    color: ${props => props.font.errorColor};
  }
`;

const SharedInputStyle = css<SharedInputStyleProps>`
  width: 100%;
  padding: ${props => props.padding};
  font-family: ${props => props.font.font};
  font-size: ${props => props.font.size}px;
  color: ${props => props.font.color};
  background-color: ${props => props.fillColor};

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

  &:focus {
    outline: none;
    // border radius
    border-top-left-radius: ${props => props.focusBorderTop.leftRadius}px;
    border-top-right-radius: ${props => props.focusBorderTop.rightRadius}px;
    border-bottom-left-radius: ${props => props.focusBorderBottom.leftRadius}px;
    border-bottom-right-radius: ${props => props.focusBorderBottom.rightRadius}px;
    // border width
    border-top-width: ${props => props.focusBorderTop.thickness}px;
    border-right-width: ${props => props.focusBorderRight.thickness}px;
    border-bottom-width: ${props => props.focusBorderBottom.thickness}px;
    border-left-width: ${props => props.focusBorderLeft.thickness}px;
    // border color
    border-top-color: ${props => props.focusBorderTop.color};
    border-right-color: ${props => props.focusBorderRight.color};
    border-bottom-color: ${props => props.focusBorderBottom.color};
    border-left-color: ${props => props.focusBorderLeft.color};
  }

  ::placeholder {
    color: ${props => props.font.placeholderColor};
  }

  ${props => props.error &&
          // border radius
          "border-top-left-radius: " + props.errorBorderTop.leftRadius + "px !important;" +
          "border-top-right-radius: " + props.errorBorderTop.leftRadius + "px !important;" +
          "border-bottom-left-radius: " + props.errorBorderBottom.leftRadius + "px !important;" +
          "border-bottom-right-radius: " + props.errorBorderBottom.leftRadius + "px !important;" +
          // border width
          "border-top-width: " + props.errorBorderTop.thickness + "px !important;" +
          "border-right-width: " + props.errorBorderRight.thickness + "px !important;" +
          "border-bottom-width: " + props.errorBorderBottom.thickness + "px !important;" +
          "border-left-width: " + props.errorBorderLeft.thickness + "px !important;" +
          // border color
          "border-top-color: " + props.errorBorderTop.color + " !important;" +
          "border-right-color: " + props.errorBorderRight.color + " !important;" +
          "border-bottom-color: " + props.errorBorderBottom.color + " !important;" +
          "border-left-color: " + props.errorBorderLeft.color + " !important;"
  }
`;

export { SharedWrapperInputStyle, SharedInputStyle };
