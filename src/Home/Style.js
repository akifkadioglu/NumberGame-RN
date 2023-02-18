import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        justifyContent: "space-evenly"
    },
    form: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 20,
        borderColor: '#ddd'
    },
    formTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 25
    },
    room: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center'
    }
}) 