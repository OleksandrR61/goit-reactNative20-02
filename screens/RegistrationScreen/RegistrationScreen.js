import { useState } from "react";
import { Text } from "react-native";

import { Container, FormContainer, InputText, InputSecretText } from "../../components";

export default RegistrationScreen = () => {
    const [ avatar, setAvatar ] = useState(null);
    const [ login, setLogin ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return <Container>
            <FormContainer
                title={"Реєстрація"}
            >
                <InputText
                    value={login}
                    onChangeText={setLogin}
                    placeholder={"Логін"}
                    keyboardType={"default"}
                    inputMode={"none"}
                />

                <InputText
                    value={email}
                    onChangeText={setEmail}
                    placeholder={"Адреса електронної пошти"}
                    keyboardType={"email-address"}
                    inputMode={"email"}
                />

                <InputSecretText
                    value={password}
                    onChangeText={setPassword}
                    placeholder={"Пароль"}
                    keyboardType={"default"}
                    inputMode={"none"}
                    style={{marginBottom: 43}}
                />
            </FormContainer>
        </Container>;
};