import { TextInput, StyleSheet } from 'react-native';

export default InputText = ({
    value,
    onChangeText,
    placeholder,
    keyboardType,
    inputMode,
}) => <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        inputMode={inputMode}
        style={styles.input}
        placeholderTextColor={"#BDBDBD"}
        selectionColor={"#212121"}
    />;

const styles = StyleSheet.create({
    input: {
        height: 50,

        marginBottom: 16,
        padding: 16,

        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",

        backgroundColor: "#F6F6F6",

        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        color: "#212121",
    },
})