import { View } from "react-native";
import NButton from "../../../components/NButton";
import { GameStyle } from "../Style";

export default function NumberAndButtons(props) {


    return (
        <View style={GameStyle.navbar}>
            <View style={GameStyle.button}>
                <NButton title='↑' onPress={props.bigger} />
            </View>
            <View style={GameStyle.button}>
                <NButton title='=' onPress={props.equal} />
            </View>
            <View style={GameStyle.button}>
                <NButton title='↓' onPress={props.smaller} />
            </View>
        </View>
    )
}