import { Text, View } from "react-native";
import NTextInput from "../../../components/NTextInput";
import { GameStyle } from "../Style";

export default function GameNumber(props) {
    return (
        <View style={GameStyle.navbar}>
            <Text style={GameStyle.minMax}>{props.min.toString()}</Text>
            <View style={{ width: '50%' }} >
                <NTextInput placeholder='Try to know' setNumber={props.setDummyNumber} />
            </View>
            <Text style={GameStyle.minMax}>{props.max.toString()}</Text>
        </View>
    )
}