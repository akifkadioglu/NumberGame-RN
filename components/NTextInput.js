import { View, TextInput, StyleSheet, Text } from "react-native";

export default function NTextInput(props) {
    function numberHandler(t) {
        props.setNumber(t)
    }
    return (
        <View>
            <TextInput keyboardType="decimal-pad" style={style.input} placeholder={props.placeholder} onChangeText={numberHandler} />
        </View >
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: '100%',
        backgroundColor: '#ddd'
    }
})