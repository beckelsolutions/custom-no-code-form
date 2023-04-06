export type InputTypes = 'text' | 'multiline text' | 'number' | 'boolean' | 'e-mail'  | 'dropdown' | 'container';

export interface InputType {
    inputType: InputTypes;
}

export interface DefaultInputStyle {
    padding: string;
    gap: number;
    fillColor: string;
    font: {
        font: string;
        size: number;
        color: string;
        placeholderColor: string;
        errorColor: string;
    };
    borderTop: BorderWithRadiusStyle;
    borderRight: BorderStyle;
    borderBottom: BorderWithRadiusStyle;
    borderLeft: BorderStyle;
    focusBorderTop: BorderWithRadiusStyle;
    focusBorderRight: BorderStyle;
    focusBorderBottom: BorderWithRadiusStyle;
    focusBorderLeft: BorderStyle;
    errorBorderTop: BorderWithRadiusStyle;
    errorBorderRight: BorderStyle;
    errorBorderBottom: BorderWithRadiusStyle;
    errorBorderLeft: BorderStyle;
}

export interface BorderStyle {
    color: string;
    thickness: number;
}

export interface BorderWithRadiusStyle extends BorderStyle {
    leftRadius: number;
    rightRadius: number;
}
