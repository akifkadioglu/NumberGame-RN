import { View, Text } from "react-native";
import { router } from "../../route/router";
import { routes } from "../../route/routes";
import GameNumber from "./Components/GameNumber";
import GameButtons from "./Components/GameButtons";
import { GameStyle } from "./Style";
import { useState } from "react";

export default function Game({ route, navigation }) {
    const { number } = route.params;
    const [dummyNumber, setDummyNumber] = useState(0)
    const [min, setMinNumber] = useState(0)
    const [max, setMaxNumber] = useState(100)

    function generateNumber() {
        let delta = max - min
        setDummyNumber((Math.round(min + Math.random() * delta)));
    }

    function bigger() {
        generateNumber()
        setMinNumber(dummyNumber)
    }

    function smaller() {
        generateNumber()
        setMaxNumber(dummyNumber)
    }

    function equal() {
        if (dummyNumber == number) {
            router.push({navigation}, routes.HOME)
        }
    }

    return (
        <View style={GameStyle.container}>
            <View style={GameStyle.form}>
                <GameNumber min={min} setDummyNumber={setDummyNumber} max={max} />
                <GameButtons number={number} bigger={bigger} equal={equal} smaller={smaller} />
            </View>
        </View >
    )
}