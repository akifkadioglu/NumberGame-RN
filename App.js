import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { theme } from './appTheme';
import Home from './src/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './src/Game/Game';
import { routes } from './route/routes';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={theme.primary} />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={routes.HOME}>
            <Stack.Screen options={{ title: 'Home' }}
              name={routes.HOME} component={Home} />
            <Stack.Screen options={{ title: 'Game' }}
              name={routes.GAME} component={Game} />
          </Stack.Navigator>
        </NavigationContainer>

      </View>
    </>

  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
