import { BorderStyle, BorderWithRadiusStyle, ButtonInformation } from '../types';
import { StyledDefaultButton } from './DefaultButton.style';

interface DefaultButtonProps extends ButtonInformation {
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

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
function DefaultButton(props: DefaultButtonProps) {
    return (
        <StyledDefaultButton
            {...props}
            type="submit"
        >
            {props.text}
        </StyledDefaultButton>
    )
}

export { DefaultButton };
