import { ReactElement } from 'react';
import StyledApp from './App.style';
import { CustomForm } from './components/CustomForm/CustomForm';
import { CustomForm2 } from './components/CustomForm2/CustomForm2';
import { DefaultBooleanInput } from './components/DefaultBooleanInput/DefaultBooleanInput';
import { DefaultButton } from './components/DefaultButton/DefaultButton';
import { DefaultDropdownInput } from './components/DefaultDropdownInput/DefaultDropdownInput';
import { DefaultNumberInput } from './components/DefaultNumberInput/DefaultNumberInput';
import { DefaultStringInput } from './components/DefaultStringInput/DefaultStringInput';

function App() {
    // dummy props, will be set by framer user.
    const textInput: ReactElement = <DefaultStringInput
        name={'string1'}
        required={true}
        inputType={'text'}
        padding={'15px 15px'}
        gap={5}
        fillColor={'lightgray'}
        borderTop={{
            color: "black",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 0
        }}
        borderRight={{
            color: "none",
            thickness: 0
        }}
        borderBottom={{
            color: "gray",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 2
        }}
        borderLeft={{
            color: "none",
            thickness: 0
        }}
        focusBorderTop={{
            color: "black",
            leftRadius: 0,
            rightRadius: 0,
            thickness: 2
        }}
        focusBorderRight={{
            color: "yellow",
            thickness: 2
        }}
        focusBorderBottom={{
            color: "green",
            leftRadius: 0,
            rightRadius: 0,
            thickness: 5
        }}
        focusBorderLeft={{
            color: "blue",
            thickness: 2
        }}
        errorBorderTop={{
            color: 'red',
            leftRadius: 0,
            rightRadius: 0,
            thickness: 2
        }}
        errorBorderRight={{
            color: 'blue',
            thickness: 2
        }}
        errorBorderBottom={{
            color: 'red',
            leftRadius: 0,
            rightRadius: 0,
            thickness: 5
        }}
        errorBorderLeft={{
            color: 'blue',
            thickness: 2
        }}
        font={{
            color: 'black',
            font: 'Calibri light, serif',
            size: 20,
            placeholderColor: 'gray',
            errorColor: 'red'
        }}
    />;

    const numberInput: ReactElement = <DefaultNumberInput
        name={'number1'}
        required={true}
        inputType={'number'}
        min={0}
        max={100}
        padding={'15px 15px'}
        gap={5}
        fillColor={'lightgray'}
        borderTop={{
            color: "black",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 0
        }}
        borderRight={{
            color: "none",
            thickness: 0
        }}
        borderBottom={{
            color: "gray",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 2
        }}
        borderLeft={{
            color: "none",
            thickness: 0
        }}
        focusBorderTop={{
            color: "black",
            leftRadius: 0,
            rightRadius: 0,
            thickness: 2
        }}
        focusBorderRight={{
            color: "yellow",
            thickness: 2
        }}
        focusBorderBottom={{
            color: "green",
            leftRadius: 0,
            rightRadius: 0,
            thickness: 5
        }}
        focusBorderLeft={{
            color: "blue",
            thickness: 2
        }}
        errorBorderTop={{
            color: 'red',
            leftRadius: 0,
            rightRadius: 0,
            thickness: 2
        }}
        errorBorderRight={{
            color: 'blue',
            thickness: 2
        }}
        errorBorderBottom={{
            color: 'red',
            leftRadius: 0,
            rightRadius: 0,
            thickness: 5
        }}
        errorBorderLeft={{
            color: 'blue',
            thickness: 2
        }}
        font={{
            color: 'black',
            font: 'Calibri light, serif',
            size: 20,
            placeholderColor: 'gray',
            errorColor: 'red'
        }}
    />;

    const dropdownInput = <DefaultDropdownInput
        name={'dropdown1'}
        required={true}
        inputType={'dropdown'}
        padding={'15px 15px'}
        gap={5}
        fillColor={'lightgray'}
        borderTop={{
            color: "black",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 0
        }}
        borderRight={{
            color: "none",
            thickness: 0
        }}
        borderBottom={{
            color: "gray",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 2
        }}
        borderLeft={{
            color: "none",
            thickness: 0
        }}
        focusBorderTop={{
            color: "black",
            leftRadius: 0,
            rightRadius: 0,
            thickness: 2
        }}
        focusBorderRight={{
            color: "yellow",
            thickness: 2
        }}
        focusBorderBottom={{
            color: "green",
            leftRadius: 0,
            rightRadius: 0,
            thickness: 5
        }}
        focusBorderLeft={{
            color: "blue",
            thickness: 2
        }}
        errorBorderTop={{
            color: 'red',
            leftRadius: 0,
            rightRadius: 0,
            thickness: 2
        }}
        errorBorderRight={{
            color: 'blue',
            thickness: 2
        }}
        errorBorderBottom={{
            color: 'red',
            leftRadius: 0,
            rightRadius: 0,
            thickness: 5
        }}
        errorBorderLeft={{
            color: 'blue',
            thickness: 2
        }}
        font={{
            color: 'black',
            font: 'Calibri light, serif',
            size: 20,
            placeholderColor: 'gray',
            errorColor: 'red'
        }}
        options={['blue', 'red', 'purple']}
    />

    const booleanInput = <DefaultBooleanInput
        name={'boolean1'}
        required={true}
        inputType={'boolean'}
        width={24}
        height={24}
        font={{
            font: 'Calibri light, serif',
            size: 20,
            errorColor: 'red'
        }}
    />

    const button = <DefaultButton
        name={'button'}
        required={true}
        inputType={'button'}
        text={'Absenden'}
        padding={'15px 15px'}
        fillColor={'lightgray'}
        borderTop={{
            color: "black",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 0
        }}
        borderRight={{
            color: "none",
            thickness: 0
        }}
        borderBottom={{
            color: "gray",
            leftRadius: 15,
            rightRadius: 15,
            thickness: 2
        }}
        borderLeft={{
            color: "none",
            thickness: 0
        }}
        font={{
            color: 'black',
            font: 'Calibri light, serif',
            size: 20,
        }}
    />

    return (
        <StyledApp>
            <CustomForm2
                inputs={[textInput, numberInput, booleanInput]}
                style={{ gap: 15 }}
                sendTo={''}
                messages={{ success: '', error: '' }}
            />
            {/*<CustomForm*/}
            {/*    textInput={textInput}*/}
            {/*    numberInput={numberInput}*/}
            {/*    booleanInput={booleanInput}*/}
            {/*    dropdownInput={dropdownInput}*/}
            {/*    submitButton={button}*/}
            {/*    inputs={[*/}
            {/*        {*/}
            {/*            name: "email",*/}
            {/*            label: "E-Mail",*/}
            {/*            inputType: 'e-mail',*/}
            {/*            required: true,*/}
            {/*            errorMessage: "Error",*/}
            {/*            emailInvalidMessage: ""*/}
            {/*        },*/}
            {/*        {*/}
            {/*            name: "age",*/}
            {/*            label: "Alter",*/}
            {/*            inputType: 'number',*/}
            {/*            required: true,*/}
            {/*            errorMessage: "Bitte gib ein Alter an.",*/}
            {/*            emailInvalidMessage: ""*/}
            {/*        },*/}
            {/*        {*/}
            {/*            name: "dropdown",*/}
            {/*            label: "Bitte auswählen",*/}
            {/*            inputType: 'dropdown',*/}
            {/*            required: true,*/}
            {/*            errorMessage: "Error",*/}
            {/*            emailInvalidMessage: ""*/}
            {/*        },*/}
            {/*        {*/}
            {/*            name: "message",*/}
            {/*            label: "Nachricht",*/}
            {/*            inputType: 'multiline text',*/}
            {/*            required: true,*/}
            {/*            errorMessage: "Bitte hinterlasse eine Nachricht.",*/}
            {/*            emailInvalidMessage: ""*/}
            {/*        },*/}
            {/*        {*/}
            {/*            name: "privacyChecked",*/}
            {/*            label: "Ich akzeptiere die Datenschutzregelung.",*/}
            {/*            inputType: 'boolean',*/}
            {/*            required: true,*/}
            {/*            errorMessage: "Bitte akzeptiere die Datenschutzregelung.",*/}
            {/*            emailInvalidMessage: ""*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*    style={{ gap: 8 }}*/}
            {/*    sendTo={"https://formspree.io/f/xpznvyvp"}*/}
            {/*    messages={{*/}
            {/*        success: "Erfolgreich!",*/}
            {/*        error: "Fehler!"*/}
            {/*    }}*/}
            {/*/>*/}
        </StyledApp>
    )
}

export default App
