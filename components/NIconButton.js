import { Icon } from "@rneui/themed";
import { View, Button, StyleSheet } from "react-native";
import { theme } from "../appTheme";

export default function NIconButton(props) {
    function onPressHandler() {
        props.onPress()
    }
    return (
        <View style={style.button}>
            <Icon name="react" />
            <Button title={props.title} color={theme.primary} onPress={onPressHandler} />
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        marginVertical: 10,
    }
})