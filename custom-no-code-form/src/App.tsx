import { ReactElement } from 'react';
import StyledApp from './App.style';
import { CustomForm } from './components/CustomForm/CustomForm';
import { DefaultInput } from './components/DefaultInput/DefaultInput';

function App() {
    // dummy props, will be set by framer user.
    const textInput: ReactElement = <DefaultInput />;

    return (
        <StyledApp>
            <CustomForm
                textInput={textInput}
                numberInput={null!}
                booleanInput={null!}
                submitButton={<button type={"submit"}>Jakob?</button>}
                inputs={[
                    {
                        name: "vorname",
                        label: "Vorname",
                        inputType: 'text',
                        required: true,
                        errorMessage: "Error :)",
                        emailInvalidMessage: "Invalid mail"
                    }
                ]}
                style={{ gap: 8 }}
                sendTo={""}
            />
        </StyledApp>
    )
}

export default App
