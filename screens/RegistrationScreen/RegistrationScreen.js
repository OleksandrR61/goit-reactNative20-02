import { useState, useEffect } from "react";

import {
    Container,
    FormContainer,
    InputText,
    InputSecretText,
    ButtonPrimary,
} from "../../components";

export default RegistrationScreen = () => {
    const [ avatar, setAvatar ] = useState(null);
    const [ login, setLogin ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isReady, setIsReady ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsReady(avatar && login && email && password)
    }, [avatar, login, email, password]);

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

                <ButtonPrimary
                    title={isLoading ? "Очікуйте..." : "Зареєстуватися"}
                    isReady={isReady}
                    style={{marginBottom: 16}}
                />
            </FormContainer>
        </Container>;
};