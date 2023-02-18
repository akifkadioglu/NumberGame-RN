import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import NButton from "../../../components/NButton";
import NTextInput from "../../../components/NTextInput";
import { router } from "../../../route/router";
import { routes } from "../../../route/routes";
import { HomeStyle } from "../Style";

export default function HomeForm({ navigation }) {
    const [number, setNumber] = useState('')

    function onPressHandler() {
        if (!number) return
        router.push({ navigation }, routes.GAME, {
            number: number
        })
    }
    function componentDidMount() {
        console.log('kdsjfn')
    }
    return (
        <View style={HomeStyle.form}>
            <Text style={HomeStyle.formTitle} >Number Game</Text>
            <NTextInput placeholder='Enter Number' setNumber={setNumber} />
            <NButton title='Start Game' onPress={onPressHandler} />
        </View>
    )
}