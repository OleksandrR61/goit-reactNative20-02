import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';


import InputText from "../InputText/InputText";

export default InputSecretText = ({
    value,
    onChangeText,
    placeholder,
    keyboardType,
    inputMode,
}) => {
    const [ isSecure, setIsSecure ] = useState(true);

    return <View
            style={styles.input}
        >
            <InputText
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                inputMode={inputMode}
                secureTextEntry={isSecure}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => setIsSecure(isSecure => !isSecure)}
            >
                Press Me
            </TouchableOpacity>
        </View>
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    input: {},
    button: {
        position: "absolute"
    },
});