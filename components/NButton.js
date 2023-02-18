import { View, Button, StyleSheet } from "react-native";
import { theme } from "../appTheme";

export default function NButton(props) {
    function onPressHandler() {
        props.onPress()
    }
    return (
        <View style={style.button}>
            <Button title={props.title} color={theme.primary} onPress={onPressHandler} />
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        marginVertical: 10,
    }
})