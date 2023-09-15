import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default ButtonSecondary = ({text, textButton, onPress}) => <View
        style={styles.container}
    >
        <Text>
            {text}
        </Text>

        <TouchableOpacity
            onPress={onPress}
        >
            <Text>
                {textButton}
            </Text>
        </TouchableOpacity>
    </View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})