import { useState } from "react";
import { Text, View } from "react-native";
import NButton from "../../../components/NButton";
import NTextInput from "../../../components/NTextInput";
import { router } from "../../../route/router";
import { routes } from "../../../route/routes";
import { HomeStyle } from "../Style";

export default function HomeForm({ navigation }) {
    const [number, setNumber] = useState('')
    function onPressHandler() {
        router.push({ navigation }, routes.GAME, {
            number: number
        })
    }

    return (
        <View style={HomeStyle.form}>
            <Text style={HomeStyle.formTitle} >Number Game</Text>
            <NTextInput placeholder='Enter Number' setNumber={setNumber} />
            <NButton title='Start Game' onPress={onPressHandler} />
        </View>
    )
}