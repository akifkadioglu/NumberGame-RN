import { View } from "react-native";
import HomeForm from "./Components/Form";
import { HomeStyle } from "./Style"

export default function Home({ navigation }) {

    return (
        <View style={HomeStyle.container}>
            <HomeForm navigation={navigation} />
        </View>
    )
}

