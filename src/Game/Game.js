import { View, Text } from "react-native";
import NumberAndButtons from "./Components/NumberAndButtons";
import { GameStyle } from "./Style";

export default function Game({ route, navigation }) {
    const { number } = route.params;
    return (
        <View style={GameStyle.container}>
            <NumberAndButtons />
        </View >
    )
}