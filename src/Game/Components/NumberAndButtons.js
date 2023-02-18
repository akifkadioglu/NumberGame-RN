import { useState } from "react";
import { View, Text } from "react-native";
import NButton from "../../../components/NButton";
import { router } from "../../../route/router";
import { routes } from "../../../route/routes";
import { GameStyle } from "../Style";

export default function NumberAndButtons(props) {
    const [dummyNumber, setDummyNumber] = useState(Math.floor(Math.random() * 100))
    const [min, setMinNumber] = useState(0)
    const [max, setMaxNumber] = useState(100)

    function generateNumber() {
        let delta = max - min
        setDummyNumber((Math.round(min + Math.random() * delta)));
    }

    function bigger() {
        setMinNumber(dummyNumber)
        generateNumber()
    }

    function smaller() {
        setMaxNumber(dummyNumber)
        generateNumber()
    }

    function equal() {
        if (dummyNumber == props.number) {
            router.push(props.navigation, routes.HOME)
        }
    }

    return (
        <View style={GameStyle.form}>
            <Text style={GameStyle.formTitle}>{dummyNumber.toString()}</Text>
            <View style={GameStyle.navbar}>
                <View style={GameStyle.button}>
                    <NButton title='↑' onPress={bigger} />
                </View>

                <View style={GameStyle.button}>
                    <NButton title='=' onPress={equal} />
                </View>

                <View style={GameStyle.button}>
                    <NButton title='↓' onPress={smaller} />
                </View>

            </View>
        </View>
    )
}